"use client";

import { Container, Paper, Typography, Box } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={5}
        sx={{
          p: 5,
          borderRadius: 4,
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          mb={2}
        >
          <StorefrontIcon
            color="primary"
            sx={{ fontSize: 60 }}
          />
        </Box>

        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          About Flex Shop
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ lineHeight: 2 }}
        >
          Flex Shop is a modern e-commerce website built with
          Next.js, React, Material UI, and Bootstrap.
          Our goal is to provide a fast, simple, and enjoyable
          shopping experience with a clean and responsive design.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 3, lineHeight: 2 }}
        >
          The project includes product browsing, shopping cart,
          favorites, responsive layouts, and many modern features
          that simulate a real online store.
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          sx={{
            mt: 5,
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Thank you for visiting Flex Shop ❤️
        </Typography>
      </Paper>
    </Container>
  );
}