import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/MainPage/Header";
import Content from "../components/MainPage/Content";
import Footer from "@components/MainPage/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}
