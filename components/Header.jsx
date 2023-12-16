import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
const backgrounds = [
  "https://images.pexels.com/photos/306066/pexels-photo-306066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1021076/pexels-photo-1021076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
const Header = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the background index to change the picture
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [backgroundIndex, backgrounds.length]);
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url("${backgrounds[backgroundIndex]}")`,
        backgroundPosition: "fill",
      }}
    >
      <div className={styles.surface}></div>
      <h1 className={styles.heading1}>
        find a religious partner of your choice
      </h1>
      <p>we made it easy for you to get your life partner in your location </p>
      <div className={styles.box}>
        <form>
          <div className={styles.field}>
            {" "}
            <label>I am Looking for</label>
            <select default="Bride">
              {["Bride", "Groom"].map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            {" "}
            <label>Marital Status</label>
            <select default="Unmarried">
              {["Unmarried", "Married", "Divorced"].map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            {" "}
            <label>Location</label>
            <select default="Dhaka">
              {[
                "Dhaka",
                "Rajsahi",
                "Khulna",
                "Rangpur",
                "Chittagong",
                "Mymensingh",
              ].map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
        </form>
        <div className={styles.search}>Search</div>
      </div>
    </div>
  );
};

export default Header;
