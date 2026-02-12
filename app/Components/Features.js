import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

export default function Features() {
  return (
      <Box sx={{ flexGrow: 1,padding:"70px 0",margin:"20px 0 0",backgroundColor:"primary.main",color:"white" }}>
        <Container>
        <Grid container spacing={9} justifyContent="center">
          <Grid  size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                mx: "auto",
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "secondary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LocalShippingIcon sx={{ fontSize: 50, color: "gray" }} />
            </Box>

            <Typography sx={{ mt: 1 , fontWeight:"bold"}}>
             FREE AND FAST DELIVERY
            </Typography>
          </Grid>

          <Grid  size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                mx: "auto",
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "secondary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HeadsetMicIcon sx={{ fontSize: 50, color: "gray" }} />
            </Box>

            <Typography sx={{ mt: 1, fontWeight:"bold" }}>
              24/7 CUSTOMER SERVICE 
            </Typography>
          </Grid>

         <Grid  size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                mx: "auto",
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "secondary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PriceCheckIcon sx={{ fontSize: 50, color: "gray" }} />
            </Box>

            <Typography sx={{ mt: 1, fontWeight:"bold"}}>
               MONEY BACK GUARANTEE
            </Typography>
          </Grid>
        </Grid>
        </Container>
      </Box>
  );
}
