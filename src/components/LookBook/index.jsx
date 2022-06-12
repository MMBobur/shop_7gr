import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import img1 from "../../assets/img/banner-08_720x539.webp";
import img2 from "../../assets/img/shop.webp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow:"none"
}));

export default () => {
  return (
    <div style={{backgroundColor:"#F2F2F2",padding:"5% 0% 5% 0%"}}>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {/* 1----------------------------------------------- */}
          <Grid item xs={11} sm={11} md={5}>
            <Item>
              <Item sx={{ position: "relative" }}>
                <div style={{ alignItems: "center" }}>
                  <div
                    style={{
                      paddingLeft: "6%",
                      marginTop: "25%",
                      color: "white",
                      width: "90%",
                      position: "absolute",
                      fontSize: "170%",
                      fontWeight: "900",
                      letterSpacing: "3px",
                    }}
                  >
                    The Beauty
                    <div
                      style={{
                        color: "white",
                        width: "90%",
                        position: "absolute",
                        fontSize: "140%",
                        fontWeight: "600",
                        letterSpacing: "3px",
                      }}
                    >
                      LOOKBOOK
                    </div>
                    <div
                      style={{
                        marginTop: "13%",
                        color: "white",
                        width: "90%",
                        position: "absolute",
                        fontSize: "60%",
                        fontWeight: "80",
                      }}
                    >
                      <a href="#" style={{ color: "white" }}>
                        VIEW COLLECTION
                      </a>
                    </div>
                  </div>
                  <img
                    src={img1}
                    style={{ width: "100%", opacity: "1" }}
                    alt=""
                  />
                </div>
              </Item>
            </Item>
          </Grid>
          {/* 1----------------------------------------------- */}
          {/* 2----------------------------------------------- */}

          <Grid item xs={11} sm={11} md={5}>
            <Item>
              <Item sx={{ position: "relative" }}>
                <div style={{ alignItems: "center" }}>
                  <div
                    style={{
                      paddingLeft: "6%",
                      marginTop: "36%",
                      color: "black",
                      width: "90%",
                      position: "absolute",
                      fontSize: "120%",
                      fontWeight: "200",
                      letterSpacing: "0px",
                    }}
                  >
                    Boxy2 T-Shirt with Roll Sleeve <br /> $20.00
                    <div
                      style={{
                        color: "black",
                        width: "90%",
                        position: "absolute",
                        fontWeight: "0",
                        letterSpacing: "0px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            border: "2px solid #DBDBDB",
                            display: "inline-block",
                            padding: "1% ",
                            margin: "1%",
                            fontSize:"70%",
                            borderRadius:"8%"
                          }}
                        >
                          -1259 <br /> day
                        </div>
                        <div
                          style={{
                            border: "2px solid #DBDBDB",
                            display: "inline-block",
                            padding: "1% ",
                            margin: "1%",
                            borderRadius:"8%",
                            fontSize:"70%",
                          }}
                        >
                          -14 <br /> hrs
                        </div>
                        <div
                          style={{
                            border: "2px solid #DBDBDB",
                            display: "inline-block",
                            padding: "1% ",
                            margin: "1%",
                            borderRadius:"8%",
                            fontSize:"70%",
                          }}
                        >
                          -159 <br /> mins
                        </div>
                        <div
                          style={{
                            border: "2px solid #DBDBDB",
                            display: "inline-block",
                            padding: "1%",
                            margin: "1%",
                            borderRadius:"8%",
                            fontSize:"70%",
                          }}
                        >
                          -16 <br /> secs
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={img2}
                    style={{ width: "100%", opacity: "1" }}
                    alt=""
                  />
                </div>
              </Item>
            </Item>
          </Grid>
          {/* 2----------------------------------------------- */}
        </Grid>
      </Box>
    </div>
  );
};
