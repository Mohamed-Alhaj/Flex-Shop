import { Box, Card, CardMedia, Typography, IconButton } from "@mui/material";

import { useCart } from "../Contexts/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: { xs: 1.5, sm: 2 },
        mb: 2,
        borderRadius: 3,
        boxShadow: 2,
        gap: 1,
      }}
    >
      <CardMedia
        component="img"
        image={item.images[0]}
        alt={item.title}
        sx={{
          width: { xs: 65, sm: 90 },
          height: { xs: 65, sm: 90 },
          objectFit: "contain",
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          ml: { xs: 1, sm: 2 },
          flex: 1,
          minWidth: 0,
        }}
      >
        <Typography
          noWrap
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.15rem",
            },
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "primary.main",
            fontWeight: "bold",
            fontSize: {
              xs: "0.8rem",
              sm: "0.95rem",
              md: "1rem",
            },
          }}
        >
          ${item.price}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.2, sm: 0.8 },
          flexShrink: 0,
        }}
      >
        <IconButton
          size="small"
          color="error"
          onClick={() => decreaseQuantity(item.id)}
        >
          <RemoveIcon
            sx={{
              fontSize: {
                xs: 18,
                sm: 22,
              },
            }}
          />
        </IconButton>

        <Typography
          sx={{
            minWidth: 20,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
            },
          }}
        >
          {item.quantity}
        </Typography>

        <IconButton
          size="small"
          color="success"
          onClick={() => increaseQuantity(item.id)}
        >
          <AddIcon
            sx={{
              fontSize: {
                xs: 18,
                sm: 22,
              },
            }}
          />
        </IconButton>

        <IconButton
          size="small"
          color="error"
          onClick={() => removeItem(item.id)}
        >
          <DeleteIcon
            sx={{
              fontSize: {
                xs: 18,
                sm: 22,
              },
            }}
          />
        </IconButton>
      </Box>
    </Card>
  );
}
