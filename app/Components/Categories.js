import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { CardActionArea } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import SpaIcon from "@mui/icons-material/Spa";
import WatchIcon from "@mui/icons-material/Watch";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DiamondIcon from "@mui/icons-material/Diamond";
import ChairSharpIcon from "@mui/icons-material/ChairSharp";
import Link from "next/link";

export default function Categories() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          margin: "20px 0",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Container>
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
            Categories
          </Typography>
          {/* Categories Cards */}
          <Box sx={{ padding: "20px 30px" }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                <Link href={"/Laptops"} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 445 }}>
                    <CardActionArea>
                      <CardContent>
                        <LaptopIcon color="primary" sx={{ fontSize: "30px" }} />
                        <Typography gutterBottom variant="h5" component="div">
                          Laptops
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                <Link href={"/Watches"} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 445 }}>
                    <CardActionArea>
                      <CardContent>
                        <WatchIcon color="primary" sx={{ fontSize: "30px" }} />
                        <Typography gutterBottom variant="h5" component="div">
                          Watches
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                <Link href={"/Mobiles"} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 445 }}>
                    <CardActionArea>
                      <CardContent>
                        <PhoneAndroidIcon
                          color="primary"
                          sx={{ fontSize: "30px" }}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                          Mobiles
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                <Link href={"/Jewelry"} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 445 }}>
                    <CardActionArea>
                      <CardContent>
                        <DiamondIcon
                          color="primary"
                          sx={{ fontSize: "30px" }}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                          Jewelry
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                <Link href={"/Decoration"} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 445 }}>
                    <CardActionArea>
                      <CardContent>
                        <ChairSharpIcon
                          color="primary"
                          sx={{ fontSize: "30px" }}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                          Decoration
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                <Link href={"/Beauty"} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: 445 }}>
                    <CardActionArea>
                      <CardContent>
                        <SpaIcon color="primary" sx={{ fontSize: "30px" }} />
                        <Typography gutterBottom variant="h5" component="div">
                          Beauty
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
        {/* Categories Cards */}
      </Box>
    </div>
  );
}
