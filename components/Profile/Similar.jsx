import React from "react";
import Card from "./Card";
import styles from "../../Styles/Profile/Similar.module.css";

const Similar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Similar Profile</div>
      <div className={styles.cards}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Similar;
