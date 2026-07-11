"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState(() => {
    if (typeof window === "undefined") return [];

    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  function addToFavorite(product) {
    const exist = favoriteItems.find((item) => item.id === product.id);

    if (!exist) {
      setFavoriteItems([...favoriteItems, product]);
    }
  }

  function removeFromFavorite(id) {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== id));
  }

  function toggleFavorite(product) {
    const exist = favoriteItems.find((item) => item.id === product.id);

    if (exist) {
      removeFromFavorite(product.id);
    } else {
      addToFavorite(product);
    }
  }

  function isFavorite(id) {
    return favoriteItems.some((item) => item.id === id);
  }
  const totalFavorites = favoriteItems.length;
  return (
    <FavoriteContext.Provider
      value={{
        favoriteItems,
        addToFavorite,
        removeFromFavorite,
        toggleFavorite,
        isFavorite,
        totalFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}
