import Personal from "@/components/Profile/Personal";
import React from "react";
import styles from "./../../styles/Profile/Details.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Introduction from "@/components/Profile/Introduction";
import Physical from "@/components/Profile/Physical";
import Education from "@/components/Profile/Education";
import Family from "@/components/Profile/Family";
import Address from "@/components/Profile/Address";
import Expectation from "@/components/Profile/Expectation";
import Piety from "@/components/Profile/Piety";
import Similar from "@/components/Profile/Similar";

const ProfileDetails = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper} style={{ minHeight: "100vh" }}>
        <div className={styles.left}>
          {" "}
          <Introduction />
          <Personal />
          <Physical />
          <Education />
          <Piety />
          <Address />
          <Family />
          <Expectation />
        </div>
        <div className={styles.right}>
          <Similar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileDetails;
