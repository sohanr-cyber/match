import React from "react";
import styles from "../../styles/Profile/Introuduction.module.css";
import Image from "next/image";
const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <Image
            src="https://images.pexels.com/photos/6208084/pexels-photo-6208084.jpeg?auto=compress&cs=tinysrgb&w=600"
            height="250"
            width="200"
            alt=""
          />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>320n23u23</div>
          <div className={styles.flex}>
            <div className={styles.key}>Name</div>
            <div className={styles.value}>Md Sohanur Rahman (Sohan)</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.key}>Age</div>
            <div className={styles.value}>23</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.key}>height</div>
            <div className={styles.value}>5'10"</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.key}>Color</div>
            <div className={styles.value}>Brown</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.key}>Type Of Education:</div>
            <div className={styles.value}>General</div>
          </div>

          <div className={styles.flex}>
            <div className={styles.key}>Ocupation</div>
            <div className={styles.value}>Student</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.key}>Location</div>
            <div className={styles.value}>Rangpur</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.key}>Piety</div>
            <div className={styles.value}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              veniam praesentium similique tempora accusamus cumque consectetur
              eligendi. Deleniti, aut incidunt deserunt aspernatur recusandae,
              atque perspiciatis cupiditate earum dolorem id exercitationem?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
