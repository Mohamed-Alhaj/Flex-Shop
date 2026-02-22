import { Typography, Box, Stack, Rating } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Reviewers({ product }) {
  return (
    <div>
      <Typography
        sx={{
          padding: "0 0 10px",
          color: "primary.main",
          fontSize: {
            xs: "22px",
            sm: "24px",
            md: "26px",
            lg: "28px",
            xl: "30px",
          },
          fontWeight: 600,
        }}
      >
        Reviews
      </Typography>

      {product.reviews.map((review,i) => {
     return <Box key={i}
        sx={{
          backgroundColor: "#ffffffc2",
          padding: "20px",
          borderRadius: "10px",
          marginBottom:"20px"
        }}
      >
        <Typography component="span" sx={{margin:"10px"}}>
            <AccountCircleIcon color="primary" sx={{ fontSize: {
              xs: "26px",
              sm: "30px",
              md: "34px",
              lg: "38px",
              xl: "42px",
            },}}/>
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "22px",
              lg: "24px",
              xl: "26px",
            },
          }}
        >
          <span style={{position:"relative",top:"3px"}}>{review.reviewerName}</span>
          <hr style={{ color: "#530840" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "20px",
                  lg: "22px",
                  xl: "24px",
                },
              }}
            >
              {review.comment}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "20px",
                  lg: "22px",
                  xl: "24px",
                },
              }}
            >
              <Stack direction="row" spacing={1}>
                <Rating
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  sx={{
                    fontSize: {
                      xs: 12,
                      sm: 18,
                      md: 20,
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      xs: 8,
                      sm: 14,
                      md: 16,
                    },
                    color: "gray",
                  }}
                >
                  ({review.rating})
                </Typography>
              </Stack>
            </Typography>
          </div>
        </Typography>
      </Box>
      })}
    </div>
  );
}
