"use client";

import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={5}
        sx={{
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          mb={2}
        >
          Contact Us
        </Typography>

        <Typography
          color="text.secondary"
          textAlign="center"
          mb={5}
        >
          We would love to hear from you. Feel free to contact us anytime.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <PhoneIcon color="primary" />
          <Typography variant="h6">
            +963 938 602 266
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <WhatsAppIcon color="success" />
          <Typography variant="h6">
            +963 938 602 266
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <EmailIcon color="error" />
          <Typography variant="h6">
            flexshop@gmail.com
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 5,
          }}
        >
          <LocationOnIcon color="warning" />
          <Typography variant="h6">
            Aleppo, Syria
          </Typography>
        </Box>

        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="https://wa.me/963938602266"
            target="_blank"
          >
            Chat on WhatsApp
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}