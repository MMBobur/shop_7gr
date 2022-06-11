import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as React from "react";
import Button from "@mui/material/Button";

import rasm from "../../assets/img/headercarusel1.jpg";
import rasm2 from "../../assets/img/headercarusel2.jpg";
import rasm3 from "../../assets/img/headercarusel3.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 8000, min: 1024 },
    items: 3,
    // slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 8024, min: 464 },
    items: 2,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 2464, min: 0 },
    items: 1,
    // slidesToSlide: 1, // optional, default to 1.
  },
};

const index = () => {
  return (
    <div>
      <Carousel
        // swipeable={false}
        // draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        transition="1s"
      >
        <div
          style={{
            backgroundImage: `url(${rasm})`,
            // width: "100%",
            height: "700px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            textAlign: "center",
            opacity: 1,
            backgroundBlendMode: "screen",
          }}
        >
          {/* <img style={{ width: "100%", height: "800px" }} src={rasm} alt="" /> */}
          <div style={{ paddingTop: "13%", color: "white" }}>
            <h3
              style={{
                fontSize: "27px",
                fontFamily: "sans-serif",
                fontWeight: "200",
              }}
            >
              Women Collection 2018
            </h3>
            <h1
              style={{
                fontSize: { md: "50px", sm: "40px", xs: "30px" },
                fontFamily: "sans-serif",
                fontWeight: "1000",
                wordSpacing: "7px",
                letterSpacing: "10px",
              }}
            >
              NEW ARRIVALS
            </h1>
            <Button
              variant="contained"
              disableElevation
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "13px 40px 13px 40px",
                fontSize: "16px",
                ":hover": { backgroundColor: "#FA4F00" },
              }}
            >
              SHOP NOW
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${rasm2})`,
            // width: "100%",
            height: "700px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            textAlign: "center",
            opacity: 1,
          }}
        >
          {/* <img style={{ width: "100%", height: "800px" }} src={rasm} alt="" /> */}
          <div style={{ paddingTop: "13%", color: "black" }}>
            <h3
              style={{
                fontSize: "27px",
                fontFamily: "sans-serif",
                fontWeight: "200",
              }}
            >
              Women Collection 2018
            </h3>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontWeight: "1000",
                wordSpacing: "7px",
                letterSpacing: "10px",
              }}
            >
              NEW ARRIVALS
            </h1>
            <Button
              variant="contained"
              disableElevation
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "13px 40px 13px 40px",
                fontSize: "16px",
                ":hover": { backgroundColor: "#FA4F00" },
              }}
            >
              SHOP NOW
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${rasm3})`,
            // width: "100%",
            height: "700px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            justifyContent: "center",
            textAlign: "center",
            opacity: 1,
          }}
        >
          {/* <img style={{ width: "100%", height: "800px" }} src={rasm} alt="" /> */}
          <div style={{ paddingTop: "13%", color: "black" }}>
            <h3
              style={{
                fontSize: "27px",
                fontFamily: "sans-serif",
                fontWeight: "200",
              }}
            >
              Women Collection 2018
            </h3>
            <h1
              style={{
                fontSize: { md: "50px", sm: "40px", xs: "30px" },
                fontFamily: "sans-serif",
                fontWeight: "1000",
                wordSpacing: "7px",
                letterSpacing: "10px",
                color: "white",
              }}
            >
              NEW ARRIVALS
            </h1>
            <Button
              variant="contained"
              disableElevation
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "13px 40px 13px 40px",
                fontSize: "16px",
                ":hover": {
                  backgroundColor: "#FA4F00",
                },
              }}
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default index;
