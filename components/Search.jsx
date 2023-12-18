import React from "react";
import styles from "../styles/Search.module.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const MeritalStatus = ["Never Married", "Married", "Divorced", "Widowed"];
const EducationalStatus = [
  "BSC",
  "Dakhil",
  "Diploma",
  "Doctorate",
  "Fazil",
  "HSC",
  "High School",
  "Kamil",
  "MSC",
  "Master",
  "SSC",
];

const universityNames = [
  "Ahsanullah University of Science & Technology",
  "American International University - Bangladesh",
  "Asa University Bangladesh",
  "Asian University of Bangladesh",
  "Atish Dipankar University",
  "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
  "Bangabandhu Sheikh Mujibur Rahman Medical University",
  "Bangladesh Agricultural University",
  "Bangladesh Open University",
  "Bangladesh University",
  "Bangladesh University of Business & Technology",
  "Bangladesh University of Engineering and Technology",
  "Bangladesh University of Professionals",
  "Bangladesh University of Textiles",
  "Begum Rokeya University, Rangpur",
  "BGC Trust University, Bangladesh",
  "Brac University",
  "Chittagong Independent University",
  "Chittagong University of Engineering and Technology",
  "City University",
  "Comilla University",
  "Daffodil International University",
  "Darul Ihsan University",
  "Dhaka International University",
  "Dhaka University of Engineering and Technology",
  "East Delta University",
  "Eastern University",
  "East West University",
  "East-West University, Mohakhali",
  "Green University of Bangladesh",
  "Hajee Mohammad Danesh Science and Technology University",
  "IBAIS University",
  "Independent University, Bangladesh",
  "International Culture University",
  "International Islamic University Chittagong",
  "International University of Business Agriculture and Technology",
  "Islamic University Kushtia",
  "Islamic University of Technology",
  "Jagannath University",
  "Jahangirnagar University",
  "Jatiya Kabi Kazi Nazrul Islam University",
  "Khulna University",
  "Khulna University of Engineering And Technology",
  "Leading University",
  "Manarat International University",
  "Mawlana Bhashani Science And Technology University",
  "Metropolitan University",
  "Military Institute of Science and Technology",
  "National University",
  "Noakhali University of Science and Technology",
  "North East University Bangladesh",
  "Northern University Bangladesh",
  "North South University",
  "Pabna University of Science and Technology",
  "Patuakhali Science and Technology University",
  "People's University of Bangladesh",
  "Premier University",
  "Presidency University",
  "Queens University",
  "Rajshahi University of Engineering and Technology",
  "Shahjalal University of Science and Technology",
  "Southeast University",
  "Southern University Bangladesh",
  "Stamford University",
  "Sylhet Agricultural University",
  "Sylhet Engineering College",
  "Sylhet International University",
  "United International University",
  "University of Asia Pacific, Dhanmondi",
  "University of Chittagong",
  "University of Development Alternative",
  "University of Dhaka",
  "University of Information Technology & Sciences",
  "University of Liberal Arts",
  "University of Rajshahi",
  "University of Science & Technology Chittagong",
  "World University of Bangladesh",
];

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <dic>Filter Serach</dic>
        <div className={styles.close}>X</div>
      </div>

      {/* Allow Chose Gender */}
      <div className={styles.heading}>
        <div className={styles.title}>Gender</div>
        <div className={styles.togle}>-</div>
      </div>
      <div className={styles.options}>
        <div className={styles.flex}>
          <div className={styles.icon}>
            <CheckBoxOutlineBlankIcon />
          </div>
          <div className={styles.value}>Female</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.icon}>
            <CheckBoxOutlineBlankIcon />
          </div>
          <div className={styles.value}>Male</div>
        </div>
      </div>

      {/* Allow Chose Age */}
      <div className={styles.heading}>
        <div className={styles.title}>Age</div>
        <div className={styles.togle}>-</div>
      </div>
      <div className={styles.options}>
        <div
          className={styles.flex}
          style={{
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <label>Minimum </label> <input type="number" />
        </div>
        <div
          className={styles.flex}
          style={{ justifyContent: "space-between" }}
        >
          <label>Maximum</label> <input type="number" />
        </div>
      </div>

      {/* Allow chose Height */}
      <div className={styles.heading}>
        <div className={styles.title}>Height</div>
        <div className={styles.togle}>-</div>
      </div>
      <div className={styles.options}>
        <div
          className={styles.flex}
          style={{
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <label>Minimum </label> <input type="number" />
        </div>
        <div
          className={styles.flex}
          style={{ justifyContent: "space-between" }}
        >
          <label>Maximum</label> <input type="number" />
        </div>
      </div>

      {/* Allow chose Merital Status */}
      <div className={styles.heading}>
        <div className={styles.title}>Gender</div>
        <div className={styles.togle}>-</div>
      </div>
      <div className={styles.options}>
        {MeritalStatus.map((item, index) => (
          <div className={styles.flex} key={index}>
            <div className={styles.icon}>
              <CheckBoxOutlineBlankIcon />
            </div>
            <div className={styles.value}>{item}</div>
          </div>
        ))}
      </div>

      {/* Allow Chose Educational Status */}
      <div className={styles.heading}>
        <div className={styles.title}>Education</div>
        <div className={styles.togle}>-</div>
      </div>
      <div
        className={styles.options}
        style={{ maxHeight: "30vh", overflow: "scroll" }}
      >
        {EducationalStatus.map((item, index) => (
          <div className={styles.flex} key={index}>
            <div className={styles.icon}>
              <CheckBoxOutlineBlankIcon />
            </div>
            <div className={styles.value}>{item}</div>
          </div>
        ))}
      </div>

      {/* Allow Chose Educational Status */}
      <div className={styles.heading}>
        <div className={styles.title}>Education</div>
        <div className={styles.togle}>-</div>
      </div>
      <div
        className={styles.options}
        style={{ maxHeight: "30vh", overflow: "scroll" }}
      >
        {universityNames.map((item, index) => (
          <div className={styles.flex} key={index}>
            <div className={styles.icon}>
              <CheckBoxOutlineBlankIcon />
            </div>
            <div className={styles.value}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
