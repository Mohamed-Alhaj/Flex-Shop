import { Box, Typography, Container, Grid } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", py: 4 }}>
      <Container>
        <Box sx={{ padding: "20px" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", py: 3, fontWeight: "bold" }}
          >
            Flex Shop
          </Typography>

          {/* Footer Grid */}
          <Grid container spacing={4}>
            {/* Subscribe */}
            <Grid size={{ xs: 12, md: 5, lg: 4 }}>
              <Typography sx={{ fontSize: "22px", mb: 1 }}>
                Stay in touch
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "gray" }}>
                Subscribe to get special offers, free giveaways, and
                once-in-a-lifetime deals.
              </Typography>
            </Grid>

            {/* Links */}
            <Grid container spacing={4} size={{ xs: 12, md: 7, lg: 8 }} sx={{textAlign:"center"}}>
              {[
                { title: "Shop", links: ["New Arrivals", "Best Sellers", "Offers"] },
                { title: "Customer Service", links: ["Contact Us", "Returns", "FAQs"] },
                { title: "Company", links: ["About Us", "Careers", "Blog"] },
                { title: "Legal", links: ["Privacy Policy", "Terms", "Cookies"] },
              ].map((section, index) => (
                <Grid key={index} size={{ xs: 6, lg: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      mb: 1,
                      color: "gray",
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      pl: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            cursor: "pointer",
                            "&:hover": { color: "primary.main" },
                          }}
                        >
                          {link}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Bottom bar */}
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              sx={{ fontSize: "12px", mt: 4 }}
            >
              <Typography sx={{ color: "gray", mb: { xs: 2, sm: 0 }}}>
                © 2026 Flex Shop. All rights reserved.
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                {["Privacy", "Terms", "Support"].map((item,i) => (
                  <Typography
                    key={i}
                    sx={{
                      cursor: "pointer",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
