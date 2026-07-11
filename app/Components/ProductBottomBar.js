"use client";

import { useState } from "react";
import { Box, Button, Snackbar, Alert } from "@mui/material";
import { useCart } from "../Contexts/CartContext";
import { useFavorite } from "../Contexts/FavoriteContext";

export default function ProductBottomBar({ product }) {
  const { addItemToCart } = useCart();
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
          onClick={() => {
            addItemToCart(product);
            setOpen(true);
          }}
          sx={{ flex: 1, background: "#310853" }}
        >
          Add to Cart 🛒
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
        <Alert severity="success" variant="filled">
          Product added to cart 👍
        </Alert>
      </Snackbar>
    </>
  );
}
