import React from "react";
import styles from "../../styles/Profile/Card.module.css";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.flex}>
          <div className={styles.key}>Age :</div>
          <div className={styles.value}>20</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Height :</div>
          <div className={styles.value}>5F 3inch</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Color :</div>
          <div className={styles.value}>White </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>City :</div>
          <div className={styles.value}>Dhaka</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Ocupation :</div>
          <div className={styles.value}>Student</div>
        </div>
        <div className={styles.details}>
          The candidate is born and brought up in Dhaka, Bangladesh. She has
          studied in English medium ...
        </div>
      </div>
    </div>
  );
};

export default Card;
