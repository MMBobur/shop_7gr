import {
    Box,
    Typography,
    Paper,
    Container,
    Grid,
    IconButton,
    TextField,
    Stack,
    Chip,
  } from "@mui/material";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import TerrainIcon from "@mui/icons-material/Terrain";
  import GoogleIcon from "@mui/icons-material/Google";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import React from "react";
  
  const Features = () => {
    return (
      <>
        <Box
          style={{ height: "200px", width: "100%", background: "black" }}
          sx={{ mt: "5%" }}
        >
          <Typography
            variant="h3"
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
            pt={{ lg: "5%", md: "6%", sm: "8%", xs: "12%" }}
          >
            FEATURES
          </Typography>
        </Box>
        <Paper
          elevation={3}
          sx={{ mt: "10%", height: "100%" }}
          style={{ backgroundColor: "#f3e5f5" }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid lg={4} md={3} sm={12} xs={12}>
                <Box sx={{ pt: "15%" }}>
                  <Typography variant="h6">GET IN TOUCH</Typography>
                  <br />
                  <Typography>
                    Any questions? Let us know in store at 8th floor, 379 Hudson
                    St, New York, NY 10018 or call us on (+1) 96 716 6879
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton>
                    <TerrainIcon />
                  </IconButton>
                  <IconButton>
                    <GoogleIcon />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid lg={2} md={2} sm={4} xs={4}>
                <Box
                  sx={{
                    pl: {
                      md: "25%",
                      sm: 0,
                      xs: 0,
                    },
                  }}
                  pt={{ lg: "30%", md: "25%", sm: "20%", xs: "22%" }}
                >
                  <Typography>CATEGORIES</Typography>
                  <br />
                  <Typography variant="body2">Men</Typography>
                  <br />
                  <Typography variant="body2">Women</Typography>
                  <br />
                  <Typography variant="body2">Dresses</Typography>
                  <br />
                  <Typography variant="body2">Sunglasses</Typography>
                  <br />
                </Box>
              </Grid>
              <Grid lg={1.5} md={2} sm={4} xs={4}>
                <Box
                  sx={{
                    pl: {
                      md: "25%",
                      sm: 0,
                      xs: 0,
                    },
                  }}
                  pt={{ lg: "38%", md: "24%", sm: "20%", xs: "22%" }}
                >
                  <Typography>LINKS</Typography>
                  <br />
                  <Typography variant="body2">Search</Typography>
                  <br />
                  <Typography variant="body2">About us</Typography>
                  <br />
                  <Typography variant="body2">Contact Us</Typography>
                  <br />
                  <Typography variant="body2">Returns</Typography>
                  <br />
                </Box>
              </Grid>
              <Grid lg={1.5} md={2} sm={4} xs={4}>
                <Box
                  sx={{
                    pl: {
                      md: "25%",
                      sm: 0,
                      xs: 0,
                    },
                  }}
                  pt={{ lg: "38%", md: "24%", sm: "20%", xs: "22%" }}
                >
                  <Typography>HELP</Typography>
                  <br />
                  <Typography variant="body2">Track Order</Typography>
                  <br />
                  <Typography variant="body2">Returns</Typography>
                  <br />
                  <Typography variant="body2">Shipping</Typography>
                  <br />
                  <Typography variant="body2">FAQs</Typography>
                  <br />
                </Box>
              </Grid>
              <Grid lg={3} md={3} sm={12} xs={12}>
                <Box
                  sx={{
                    pl: {
                      md: "10%",
                      sm: 0,
                      xs: 0,
                    },
                  }}
                  pt={{ lg: "19%", md: "15%", sm: "20%", xs: "22%" }}
                >
                  <Typography>NEWSLETTER</Typography>
                  <TextField
                    id="standard-basic"
                    label="Email Adress"
                    variant="standard"
                    sx={{ width: {
                      lg:"100%",
                      md:"100%",
                      sm:"50%",
                      xs:"70%",
                    }, }}
                  />
  
                  <Stack direction="row" spacing={1} sx={{ fontSize: "40%" }}>
                    <Chip
                      label="Subscribe"
                      color="primary"
                      sx={{
                        background: "black",
                        width: "200px",
                        mt: "6%",
                        height: "40px",
                      }}
                    />
                  </Stack>
                </Box>
              </Grid>
            </Grid>
  
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                justifyContent: "center",
                pt:"2%",
                "& > :not(style)": {
                  m: 0.5,
                  width: 70,
                  height: "9%",
                },
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  pt: "0.5%",
                  pb: "0.5%",
                  background: "black",
                  color: "white",
                }}
              >
                VISA
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: "0.5%",
                  pb: "0.5%",
                  background: "black",
                  color: "white",
                }}
              >
                Matter
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: "0.5%",
                  pb: "0.5%",
                  background: "black",
                  color: "white",
                }}
              >
                American
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: "0.5%",
                  pb: "0.5%",
                  background: "black",
                  color: "white",
                }}
              >
                PayPall
              </Paper>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                justifyContent: "center",
                pb:"5%",
                pt:"2%",
              }}
            >
                <Typography>Copyright @ 2018 Mastexnalogies.com.All rights reserved</Typography>
                </Box>
          </Container>
        </Paper>
      </>
    );
  };
  
  export default Features;
  