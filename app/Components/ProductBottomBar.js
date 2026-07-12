"use client";

import { useState } from "react";
import { Box, Button, Snackbar, Alert } from "@mui/material";
import { useCart } from "../Contexts/CartContext";
import { useFavorite } from "../Contexts/FavoriteContext";

export default function ProductBottomBar({ product }) {
  const { toggleCart, isInCart } = useCart();
  const [open, setOpen] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorite();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          gap: 2,
          p: 2,
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          color={isInCart(product.id) ? "error" : "primary"}
          onClick={() => {
            toggleCart(product);
            setOpen(true);
          }}
          sx={{ flex: 1 }}
        >
          {isInCart(product.id) ? "Remove from Cart 🗑️" : "Add to Cart 🛒"}
        </Button>

        <Button
          variant="contained"
          color={isFavorite(product.id) ? "error" : "success"}
          onClick={() => toggleFavorite(product)}
          sx={{ flex: 1 }}
        >
          {isFavorite(product.id)
            ? "Remove from Favorites 🤍"
            : "Add to Favorites ❤️"}
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity={isInCart(product.id) ? "success" : "error"}
          variant="filled"
        >
          {isInCart(product.id)
            ? "Product added to cart 👍"
            : "Product removed from cart 🗑️"}
        </Alert>
      </Snackbar>
    </>
  );
}
