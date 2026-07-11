"use client";

import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavorite } from "../Contexts/FavoriteContext";

export default function FavoriteBadge() {
  const { totalFavorites } = useFavorite();

  return (
    <Badge
      badgeContent={totalFavorites}
      color="error"
      invisible={totalFavorites === 0}
    >
      <FavoriteBorderIcon />
    </Badge>
  );
}