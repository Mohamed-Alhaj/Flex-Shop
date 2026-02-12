"use client";

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
import {Box} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?sortBy=title&order=asc")
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
            margin: "20px",
            padding: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          All Products
        </h1>
        <hr />
        {/* Products Cards */}
        <Grid container spacing={3} sx={{ my: 2 }}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
              <Card
                sx={{
                  height: {
                    xs: "240px",
                    sm: "290px",
                    lg: "300px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "160px",
                      width: "160px",
                    }}
                    image={product.thumbnail}
                  />
                </Box>

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
                        xs: 10,
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
                    <Rating value={product.rating} precision={0.5} readOnly sx={{
                      fontSize: {
                        xs: 14,
                        sm: 20,
                        md: 22,
                      },
                      fontWeight: 600,
                    }}/>
                    <Typography sx={{
                      fontSize: {
                        xs: 10,
                        sm: 16,
                        md: 15,
                      },
        
                      color:"gray"
                    }}>
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
