import React from "react";
import styles from "../../styles/Profile/Index.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Profile/Card";
import axios from "axios";
import BASE_URL from "@/config";
const Profile = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        {" "}
        <div className={styles.flex}>
          <div className={styles.total}>Total Results : {data.totalUsers}</div>
          <div className={styles.filter}>Filter</div>
        </div>
        <div className={styles.profile__cards}>
          {data.users.map((user, index) => (
            <Card key={index} user={user} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { city, district, upazilla, gender, maritalStatus } = context.query;

  const url = `${BASE_URL}/api/auth/user-filter?gender=${gender}&maritalStatus=${maritalStatus}&city=${city}&district=${district}&upazilla=${upazilla}`;

  try {
    const { data } = await axios.get(url);
    console.log(data);
    return {
      props: {
        data: data, // Pass fetched data as props
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        data: null, // Pass null or handle error scenario
      },
    };
  }
}

export default Profile;
