import React from "react";
import styles from "../../styles/Profile/Index.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Profile/Card";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className={styles.profile__cards}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Card key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
