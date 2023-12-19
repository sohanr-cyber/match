import React from "react";
import styles from "../../styles/Profile/Card.module.css";
import { calculateAge, colorsWithTransparency } from "@/utils";
import faker from "faker";
const Card = ({ user, index }) => {
  return (
    <div
      className={styles.container}
      style={{
        // backgroundColor: `${faker.random.arrayElement(colorsWithTransparency)}`,
        // background: `${colorsWithTransparency[index]}`,
        // border: `1px solid ${colorsWithTransparency[index]}`,
        // boxShadow: `1px 1px 1px 1px ${colorsWithTransparency[index]}`,
        background: `linear-gradient(45deg ,${
          colorsWithTransparency[index]
        },${faker.random.arrayElement(colorsWithTransparency)})`,
      }}
    >
      <div className={styles.top}>
        <div
          className={styles.pic}
          style={{
            color: "blue",
            // backgroundColor: `${faker.random.arrayElement(
            //   colorsWithTransparency
            // )}`,
          }}
        >
          {user?.gender == "Male" ? (
            <div style={{ color: "green" }}>M</div>
          ) : (
            <div style={{ color: "purple" }}>F</div>
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.flex}>
          <div className={styles.key}>Age:</div>
          <div className={styles.value}>{calculateAge(user?.bornAt)}</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Height:</div>
          <div className={styles.value}>5F 3inch</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Color:</div>
          <div className={styles.value}>{user?.skinColor} </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Body:</div>
          <div className={styles.value}>{user?.bodyType}</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Ocupation:</div>
          <div className={styles.value}>{user?.profession}</div>
        </div>
        {/* <div className={styles.details}>
          The candidate is born and brought up in Dhaka, Bangladesh. She has
          studied in English medium ...
        </div> */}
      </div>
    </div>
  );
};

export default Card;
