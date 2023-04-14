import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Episodes from "../components/Episodes";
import Subjects from "../components/Subjects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      {/*  META DATA */}
      <Head>
        <title>INFO WAVE V1</title>
        <meta name="description" content="Info Wave" />
        <meta property="og:image" content="faviconRob.ico" />
        <meta
          name="facebook-domain-verification"
          content="anh6svr8eyppmiyhj82z4tp7nqbxqa"
        />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/sound_white.ico" />
      </Head>
      <main className={styles.main}>
        {/* HERO SECTION*/}
        <Hero />
        <Episodes />
        <Subjects />
        <Footer src={"/footer_image.png"} width={1024} height={515} />
      </main>
    </div>
  );
}
