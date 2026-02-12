"use client"

import Link from "next/link";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Stack } from "@mui/material";
import { Rating } from "@mui/material";
import { useEffect,useState } from "react";
import axios from "axios";

export default function AllProducts() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <h1
          style={{
            margin: "10px",
            padding: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          All Products
        </h1>
        <hr />
        {/* Products Cards */}
        <Grid container spacing={3} sx={{my:2}}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
              <Card sx={{height:"390px"}}>
                <CardMedia
                  sx={{
                    height: "250px",
                  }}
                  image={product.thumbnail}
                />

                <CardContent
                  sx={{
                    textAlign: "left",
                    p: {
                      xs: 1.5,
                      sm: 2,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 14,
                        sm: 16,
                        md: 18,
                      },
                      fontWeight: 600,
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 14,
                        sm: 16,
                        md: 18,
                      },
                    }}
                    color="primary"
                  >
                    ${product.price}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <Rating value={product.rating} precision={0.5} readOnly />
                    <Typography sx={{ fontSize: 14, color: "gray" }}>
                      ({product.stock})
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Products Cards */}
      </Container>
    </div>
  );
}
