const cities = [
  "Dhaka",
  "Chittagong",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];
const districts = [
  "Dhaka",
  "Chittagong",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
  "Comilla",
  "Jessore",
  "Narayanganj",
  "Narsingdi",
  "Gazipur",
  "Tangail",
  "Bagerhat",
  "Pabna",
  "Faridpur",
  "Manikganj",
  "Munshiganj",
  "Rajbari",
];

const institutes = [
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

const names = [
  "Ahmed",
  "Fatima",
  "Ali",
  "Samiha",
  "Tariq",
  "Nasim",
  "Salma",
  "Shahid",
  "Fariha",
  "Mahmud",
];

const professions = [
  "Teacher",
  "Doctor",
  "Engineer",
  "Lawyer",
  "Software Developer",
  "Business Owner",
  "Accountant",
  "Architect",
  "Journalist",
  "Government Official",
];

const educationTypes = ["General", "Koumi", "Alia"];

const marriageStatus = ["Never Married", "Married", "Widowed", "Divorced"];
const averageMonthlyIncomes = [
  10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
];

const skinColors = [
  "Fair",
  "Light",
  "Medium",
  "Olive",
  "Brown",
  "Dark",
  // Add more as needed
];
const datesOfBirth = [
  "1995-01-01",
  "1996-02-01",
  "1997-03-01",
  "1998-04-01",
  "1999-05-01",
  "2000-06-01",
  "2001-07-01",
  "2002-08-01",
  "2003-09-01",
  "2004-10-01",
];

const sessions = [
  "20021-22",
  "20020-21",
  "20019-20",
  "20018-19",
  "20017-18",
  "20016-27",
  "20015-16",
  "20014-15",
];
const upazillas = [
  // Dhaka Division
  "Dhaka Sadar",
  "Nawabganj",
  "Narayanganj",
  "Gazipur Sadar",
  "Manikganj",
  "Munshiganj",
  "Jessore Sadar",
  "Shatkhira Sadar",
  "Khulna Sadar",
  "Barisal Sadar",
  "Patuakhali Sadar",
  "Bhola Sadar",
  "Barguna Sadar",
  "Pirojpur Sadar",
  "Jhenaidah Sadar",
  "Magura Sadar",
  "Chuadanga Sadar",
  "Kushtia Sadar",
  "Meherpur Sadar",
  "Narayanganj Sadar",
  "Faridpur Sadar",
  "Rajbari Sadar",
  "Gopalganj Sadar",
  "Tangail Sadar",
  "Mymensingh Sadar",
  "Sherpur Sadar",
  "Netrokona Sadar",
  "Kishoreganj Sadar",
  "Jamalpur Sadar",
  "Sunamganj Sadar",
  "Sylhet Sadar",
  "Habiganj Sadar",
  "Moulvibazar Sadar",
  "Brahmanbaria Sadar",
  "Comilla Sadar",
  "Chandpur Sadar",
  "Feni Sadar",
  "Noakhali Sadar",
  "Lakshmipur Sadar",
  "Chittagong Sadar",
  "Cox's Bazar Sadar",
  "Rangamati Sadar",
  "Khagrachhari Sadar",
  "Bandarban Sadar",

  // Rangpur Division
  "Dinajpur Sadar",
  "Panchagarh Sadar",
  "Thakurgaon Sadar",
  "Nilphamari Sadar",
  "Gaibandha Sadar",
  "Rangpur Sadar",
  "Kurigram Sadar",
  "Lalmonirhat Sadar",
  "Kurigram Sadar",
  "Lalmonirhat Sadar",
  "Sherpur Sadar",
  "Netrokona Sadar",
  "Kishoreganj Sadar",
  "Jamalpur Sadar",
  "Sunamganj Sadar",
  "Sylhet Sadar",
  "Habiganj Sadar",
  "Moulvibazar Sadar",
  "Brahmanbaria Sadar",
  "Comilla Sadar",
  "Chandpur Sadar",
  "Feni Sadar",
  "Noakhali Sadar",
  "Lakshmipur Sadar",
  "Chittagong Sadar",
  "Cox's Bazar Sadar",
  "Rangamati Sadar",
  "Khagrachhari Sadar",
  "Bandarban Sadar",

  // Mymensingh Division
  "Netrokona Sadar",
  "Kishoreganj Sadar",
  "Jamalpur Sadar",
  "Sunamganj Sadar",
  "Sylhet Sadar",
  "Habiganj Sadar",
  "Moulvibazar Sadar",
  "Brahmanbaria Sadar",
  "Comilla Sadar",
  "Chandpur Sadar",
  "Feni Sadar",
  "Noakhali Sadar",
  "Lakshmipur Sadar",
  "Chittagong Sadar",
  "Cox's Bazar Sadar",
  "Rangamati Sadar",
  "Khagrachhari Sadar",
  "Bandarban Sadar",

  // Chittagong Division
  "Brahmanbaria Sadar",
  "Comilla Sadar",
  "Chandpur Sadar",
  "Feni Sadar",
  "Noakhali Sadar",
  "Lakshmipur Sadar",
  "Chittagong Sadar",
  "Cox's Bazar Sadar",
  "Rangamati Sadar",
  "Khagrachhari Sadar",
  "Bandarban Sadar",

  // Khulna Division
  "Jessore Sadar",
  "Shatkhira Sadar",
  "Khulna Sadar",
  "Barisal Sadar",
  "Patuakhali Sadar",
  "Bhola Sadar",
  "Barguna Sadar",
  "Pirojpur Sadar",
  "Jhenaidah Sadar",
  "Magura Sadar",
  "Chuadanga Sadar",
  "Kushtia Sadar",
  "Meherpur Sadar",

  // Rajshahi Division
  "Pabna Sadar",
  "Sirajganj Sadar",
  "Bogra Sadar",
  "Joypurhat Sadar",
  "Naogaon Sadar",
  "Chapai Nawabganj Sadar",
  "Nawabganj Sadar",
  "Natore Sadar",
  "Kushtia Sadar",
  "Meherpur Sadar",

  // Sylhet Division
  "Sunamganj Sadar",
  "Sylhet Sadar",
  "Habiganj Sadar",
  "Moulvibazar Sadar",

  // Barisal Division
  "Barisal Sadar",
  "Patuakhali Sadar",
  "Bhola Sadar",
  "Barguna Sadar",
  "Pirojpur Sadar",

  // Rangpur Division
  "Thakurgaon",
];

const bodyTypes = [
  "Slim",
  "Athletic",
  "Average",
  "Curvy",
  "Muscular",
  "Heavyset",
];

const heights = [
  { feet: 5, inches: 8 },
  { feet: 5, inches: 4 },
  { feet: 5, inches: 5 },
  { feet: 6, inches: 6 },
  { feet: 5, inches: 8 },
];

const maritalStatuses = ["Never Married", "Divorced", "Married"];

const educationalStatus = [
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

export {
  institutes,
  districts,
  maritalStatuses,
  cities,
  names,
  professions,
  marriageStatus,
  averageMonthlyIncomes,
  datesOfBirth,
  upazillas,
  skinColors,
  bodyTypes,
  sessions,
  educationTypes,
  heights,
  educationalStatus,
};
