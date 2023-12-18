import React from "react";
import styles from "../../styles/Profile/Personal.module.css";

const Family = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <div className={styles.title}>Family Information</div>
        <div className={styles.toggle}>-</div>
      </div>
      <div className={styles.details}>
        <div className={styles.flex}>
          <div className={styles.key}>Father Infomation : </div>
          <div className={styles.value}> - </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Mother Information : </div>
          <div className={styles.value}> - </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>Sibling Information : </div>
          <div className={styles.value}> </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.key}>How Islamic The Family is : </div>
          <div className={styles.value}>Good </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
