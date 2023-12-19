import React, { useState, useEffect, use } from "react";
import styles from "../../styles/Header.module.css";
import axios from "axios";
import { useRouter } from "next/router";
const Box = ({ data }) => {
  const [city, setCity] = useState("All");
  const [districts, setDistricts] = useState([]);
  const [currentDistrict, setCurrentDistrict] = useState();
  const [upazillas, setUpazzilas] = useState([]);
  const [currentUpazilla, setCurrentUpazilla] = useState("All");
  const [gender, setGender] = useState("All");
  const [maritalStatus, setMaritalStatus] = useState("All");
  const router = useRouter();

  const fetch = async (city) => {
    try {
      if (city == "All") {
        setCurrentDistrict("All");
        setDistricts(["All"]);
        setCurrentUpazilla(["All"]);
        setUpazzilas([]);
        return;
      }
      const { data } = await axios.get(
        `https://bdapis.com/api/v1.1/division/${city}`
      );
      setDistricts(data.data);
      // setCurrentDistrict(data.data[0].district);
    } catch (error) {
      console.log(error);
    }
  };

  const search = () => {
    try {
      router.push(
        `/profile?gender=${gender}&maritalStatus=${maritalStatus}&city=${city}&district=${currentDistrict}&upazilla=${currentUpazilla}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(city);
  }, [city]);
  return (
    <div className={styles.box}>
      {/* {city} - {currentDistrict} - {currentUpazilla} */}
      <form>
        <div className={styles.field}>
          {" "}
          <label>I am Looking for</label>
          <select default="All" onChange={(e) => setGender(e.target.value)}>
            {["All", "Male", "Female"].map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          {" "}
          <label>Marital Status</label>
          <select
            default="Unmarried"
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            {["All", "Never Married", "Married", "Divorced"].map(
              (item, index) => (
                <option key={index}>{item}</option>
              )
            )}
          </select>
        </div>

        <div className={styles.field}>
          <label>City </label>
          <select onChange={(e) => setCity(e.target.value)}>
            {[{ division: "All" }, ...data.data].map((item, index) => (
              <option
                key={index}
                value={item.division}
                selected={item.division == "All" ? true : false}
              >
                {item.division}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label>District</label>
          <select
            onChange={(e) => {
              setCurrentDistrict(e.target.value);
              setUpazzilas(
                districts.find((item) => item.district == e.target.value)
                  ? districts.find((item) => item.district == e.target.value)
                      .upazilla
                  : []
              );
              e.target.value = "All" & setCurrentUpazilla("All");
            }}
          >
            {[
              {
                district: "All",
              },
              ...districts,
            ].map(
              (item, index) =>
                item.district && (
                  <option
                    key={index}
                    value={item.district}
                    selected={item.district == currentDistrict ? true : false}
                  >
                    {item.district}
                  </option>
                )
            )}
          </select>
        </div>

        <div className={styles.field}>
          <label>Upazilla</label>
          <select
            default="Dhaka"
            onChange={(e) => setCurrentUpazilla(e.target.value)}
          >
            {["All", ...upazillas].map((item, index) => (
              <option
                key={index}
                selected={item == currentUpazilla ? true : false}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className={styles.search} onClick={() => search()}>
        Search
      </div>
    </div>
  );
};

export default Box;
