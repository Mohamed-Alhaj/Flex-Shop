"use client";

import { useCart } from "../Contexts/CartContext";
import CartItem from "../Components/CartItem";
import { Box, Container, Typography } from "@mui/material";

export default function Cart() {
  const { cartItems, totalPrice } = useCart();

  return (
    <Container>
    <div style={{ margin: "20px" }}>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:"#c163ff",
          borderRadius:"5px"
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Total
        </Typography>

        <Typography variant="h5" color="primary" fontWeight="bold">
          ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </div>
    </Container>
  );
}
