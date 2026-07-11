"use client";

import { Container, Typography, Grid } from "@mui/material";
import { useFavorite } from "../Contexts/FavoriteContext";
import FavoriteItem from "../Components/FavoriteItem";

export default function Favorite() {
  const { favoriteItems } = useFavorite();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        My Favorites ❤️
      </Typography>

      {favoriteItems.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="text.secondary">
          Your favorites list is empty.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {favoriteItems.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <FavoriteItem item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
