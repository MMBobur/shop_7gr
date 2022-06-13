import React from "react";
import Image_list from "../../components/image_list";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LookBook from "../../components/LookBook";
import Blog from "../../components/blog";
import Carusel from "../../components/Carusel/index";

export default () => {
  return (
    <>
      <Carusel />
      <Navbar />
      <Image_list />
      <LookBook />
      <Blog />
      <Footer />
    </>
  );
};
