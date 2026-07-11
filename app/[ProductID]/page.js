"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";

import Loader from "../Components/Loader";
import Reviewers from "../Components/Reviewers";
import ProductBottomBar from "../Components/ProductBottomBar"
import ProductCarousel from "../Components/ProductCarousel";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";

import {
  Typography,
  Rating,
  Stack,
  Container,
} from "@mui/material";

import "animate.css";

export default function Page() {
  const { ProductID } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

 useEffect(() => {
  axios
    .get(`https://dummyjson.com/products/${ProductID}`, {
    })
    .then((res) => {
      setProduct(res.data);
    })
    .catch((err) => {
      if (err.name !== "CanceledError") {
        setError("Failed to load product");
      }
    });

}, [ProductID]);

  const originalPrice = useMemo(() => {
    if (!product) return 0;
    return Math.floor(
      product.price +
        (product.discountPercentage * product.price) / 100
    );
  }, [product]);

  if (!product && !error) return <Loader />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div>
      <ProductCarousel product={product} />
      <Container maxWidth="md">
        <FavoriteIcon/>
        <Typography
          className="animate__animated animate__bounceInLeft animate__once"
          sx={{
            px: 2,
            pt: 2,
            fontSize: { xs: 18, sm: 20, md: 22, lg: 26 },
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
          color="primary"
        >
          ${product.price}
          <Typography
            component="span"
            sx={{
              color: "black",
              textDecoration: "line-through",
              fontSize: { xs: 14, sm: 16, md: 20, lg: 24 },
            }}
          >
            ${originalPrice}
          </Typography>
        </Typography>

        <hr />

        <Typography sx={{ px: 2, py: 1 }}>
          <strong>Product:</strong> {product.title}
        </Typography>

        <Typography sx={{ px: 2, py: 1 }}>
          <strong>Brand:</strong> {product.brand}
        </Typography>

        <Typography sx={{ px: 2, py: 1 }}>
          <strong>Description:</strong> {product.description}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ px: 2, py: 1 }}>
          <Rating value={product.rating} precision={0.5} readOnly />
          <Typography>({product.rating})</Typography>
        </Stack>

        <hr />

        <Reviewers product={product}/>
        <ProductBottomBar product={product}/>
      </Container>
    </div>
  );
}
