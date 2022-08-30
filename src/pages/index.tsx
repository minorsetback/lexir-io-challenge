import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/MainPage/Header";
import Content from "../components/MainPage/Content";
import Footer from "@components/MainPage/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>LEXIR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Content />
      <Footer />
    </>
  )
}
