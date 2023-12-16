import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
const backgrounds = [
  "https://images.pexels.com/photos/306066/pexels-photo-306066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1021076/pexels-photo-1021076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

import axios from "axios";

const Header = ({ data }) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [city, setCity] = useState(data.data[2].division);
  const [districts, setDistricts] = useState([]);
  const [currentDistrict, setCurrentDistrict] = useState();
  const [subDistricts, setSubDistricts] = useState([]);
  const fetch = async (city) => {
    try {
      const { data } = await axios.get(
        `https://bdapis.com/api/v1.1/division/${city}`
      );
      setDistricts(data.data);
      setCurrentDistrict(data.data[0].district);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(city);
  }, [city]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

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
            <label>City </label>
            <select onChange={(e) => setCity(e.target.value)}>
              {[...data.data].map((item, index) => (
                <option
                  key={index}
                  value={item.division}
                  selected={item.division == city ? true : false}
                >
                  {item.division}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>District</label>
            <select onChange={(e) => setCurrentDistrict(e.target.value)}>
              {[...districts].map((item, index) => (
                <option key={index} value={item.district}>
                  {item.district}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            {" "}
            <label>Upazilla</label>
            <select default="Dhaka">
              {districts
                ?.find((item) => item.district == currentDistrict)?
                .upazilla.map((item, index) => (
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
