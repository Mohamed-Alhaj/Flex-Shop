"use client";

import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Rating,
  Button,
  Container,
  Link,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

export default function Products() {
  const [value, setValue] = useState(2);
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
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        p: 3,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          sx={{
            m: 2,
            fontWeight: "bold",
            fontSize: { xs: 22, sm: 26, md: 32, lg: 55 },
            color: "gray",
          }}
        >
          Products
        </Typography>

        {/* Products Cards */}
        <Grid container spacing={3} justifyContent="center">
          {products.length === 0 ? (
            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Loader />
            </Grid>
          ) : (
            products.slice(2, 10).map((product) => (
              <Grid key={product.id} size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
                <Link
                  href={`/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: {
                        xs: "250px",
                        sm: "260px",
                        lg: "270px",
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
                          fontSize: { xs: 14, sm: 16, md: 18 },
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
                            color: "gray",
                            textDecoration: "line-through",
                            fontSize: { xs: 12, sm: 14, md: 16 },
                          }}
                        >
                          $
                          {Math.floor(
                            product.price +
                              (product.discountPercentage * product.price) /
                                100,
                          )}
                        </Typography>
                      </Typography>

                      <Stack direction="row" spacing={1}>
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
                            color: "gray",
                          }}
                        >
                          ({product.rating})
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))
          )}
        </Grid>

        <Link href="/AllProducts/">
          <Button
            color="secondary"
            variant="contained"
            sx={{ fontSize: 20, mt: 3 }}
          >
            All Products
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
