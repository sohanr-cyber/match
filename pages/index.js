import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";
import RegisterBanner from "@/components/RegisterBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Steps />
      <RegisterBanner />
      <Footer />
    </>
  );
}
