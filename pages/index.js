import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";
import RegisterBanner from "@/components/RegisterBanner";
import axios from "axios";
import Search from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Navbar />
      <Header data={data} />
      <Steps />
      <RegisterBanner />
      <Footer />
      {/* <Search /> */}
    </>
  );
}

export async function getServerSideProps() {
  const fetchData = async () => {
    const { data } = await axios.get("https://bdapis.com/api/v1.1/divisions");
    return data;
  };
  const data = await fetchData();
  return {
    props: { data },
  };
}
