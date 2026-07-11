"use client";

import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../Contexts/CartContext";

export default function CartBadge() {
  const { totalItems } = useCart();

  return (
    <Badge badgeContent={totalItems} color="error">
      <ShoppingCartOutlinedIcon />
    </Badge>
  );
}