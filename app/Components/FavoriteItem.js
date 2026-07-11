"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useFavorite } from "../Contexts/FavoriteContext";

export default function FavoriteItem({ item }) {
  const { removeFromFavorite } = useFavorite();

  return (
    <Card sx={{ borderRadius: 3, height: "100%" }}>
      <CardMedia
        component="img"
        image={item.images[0]}
        alt={item.title}
        sx={{
          height: 200,
          objectFit: "contain",
          p: 2,
        }}
      />

      <CardContent>
        <Typography variant="h6" noWrap>
          {item.title}
        </Typography>

        <Typography color="primary" fontWeight="bold" mt={1}>
          ${item.price}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "space-between",
          px: 2,
          pb: 2,
        }}
      >
        <Button component={Link} href={`/${item.id}`} variant="contained">
          View
        </Button>

        <Button
          color="error"
          variant="outlined"
          onClick={() => removeFromFavorite(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
