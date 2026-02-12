"use client";

import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Stack } from "@mui/material";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";
import {Container} from "@mui/material";
import { useState } from "react";

export default function NewArrival() {
  const [value, setValue] = useState(4);
  return (
    <div>
        <Box sx={{ width: "100%", margin: "20px 0", padding: "20px", backgroundColor: "primary.main"}}>
          <Typography
            color="gray"
            sx={{
              m: "20px",
              fontWeight: "bold",
              fontSize: {
                xs: "22px",
                sm: "26px",
                md: "32px",
                lg: "55px",
              },
              backgroundColor: "primary",
            }}
          >
            New Arrival
          </Typography>
          {/* Products Cards */}
           <Container>
          <Box sx={{ padding: "20px 30px" }}>
            <Grid container spacing={3}>
              {[1, 2, 3, 4].map((item) => (
                <Grid
                  key={item}
                  sx={{ maxWidth: "350px", mx: "auto" }}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                  <Card>
                    <CardMedia
                      sx={{ height: 160 }}
                      image="https://www.ravalmd.com/hs-fs/hubfs/AdobeStock_276306017%20(1).jpeg?width=6570&height=4380&name=AdobeStock_276306017%20(1).jpeg"
                    />
                    <CardContent sx={{ textAlign: "left" }}>
                      <Typography variant="h5">Product</Typography>
                      <Typography variant="h6" color="primary">
                        $ 120{" "}
                        <span
                          style={{
                            marginLeft: "15px",
                            color: "gray",
                            textDecoration: "line-through",
                            fontSize: "16px",
                          }}
                        >
                          $ 199
                        </span>
                      </Typography>
                      <Typography component={"div"}>
                        <Stack direction={"row"} spacing={1}>
                          <Rating name="read-only" value={value} readOnly />{" "}
                          <p
                            style={{
                              fontSize: "14px",
                              color: "gray",
                              position: "relative",
                              top: "3px",
                            }}
                          >
                            (20)
                          </p>
                        </Stack>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          </Container>
          {/* Products Cards */}
        </Box>
    </div>
  );
}
