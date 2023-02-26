import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Main from "@/components/main";
import CityNameInput from "@/components/cityNameInput";

export default function Home() {
  return (
    <>
      <Head>
        <title>Il meteo di Pepe</title>
        <meta name="description" content="Che tempo fa?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/DaySun.svg" />
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
