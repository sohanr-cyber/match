import React, { Children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      {Children}
      <Footer />
    </>
  );
};

export default Layout;
