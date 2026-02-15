"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "../Components/Loader";
import Reviewers from "../Components/Reviewers";
import axios from "axios";
import {
  Typography,
  Rating,
  Stack,
  Card,
  CardMedia,
  Box,
  CardContent,
  Container,
} from "@mui/material";
import ProductCarousel from "../Components/ProductCarousel";
import { Padding } from "@mui/icons-material";
import "animate.css";

export default function Page() {
  const { ProductID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${ProductID}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [ProductID]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div>
      <ProductCarousel product={product} />
      <Container maxWidth={"md"}>
        <h4
          className="animate__animated animate__bounceInLeft"
          style={{ padding: "20px 20px 0", color: "#530840", display: "block" }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 20, md: 22 },
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
                fontSize: { xs: 12, sm: 14, md: 18, lg: 22 },
              }}
            >
              $
              {Math.floor(
                product.price +
                  (product.discountPercentage * product.price) / 100,
              )}
            </Typography>
          </Typography>
        </h4>
        <hr />

        <h4 style={{ padding: "10px 20px", color: "#530840" }}>
          Product:{" "}
          <span style={{ fontSize: "18px", color: "black" }}>
            {product.title}
          </span>
        </h4>
        <h4 style={{ padding: "10px 20px", color: "#530840" }}>
          Brand:{" "}
          <span style={{ fontSize: "18px", color: "black" }}>
            {product.brand}
          </span>
        </h4>
        <h4 style={{ padding: "10px 20px", color: "#530840" }}>
          Description:{" "}
          <span style={{ fontSize: "18px", color: "black" }}>
            {product.description}
          </span>
        </h4>

        <Stack direction="row" spacing={1} sx={{ padding: "5px 20px 10px" }}>
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            sx={{
              fontSize: {
                xs: 14,
                sm: 20,
                md: 22,
              },
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xs: 10,
                sm: 16,
                md: 15,
              },
              color: "black",
            }}
          >
            ({product.rating})
          </Typography>
        </Stack>
        <hr />
        <div style={{padding:"10px 20px"}}>
          <Reviewers product={product}/>
        </div>
      </Container>
    </div>
  );
}
