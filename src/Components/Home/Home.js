import React, { useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import Header from "./Header";
import Main from "./Main";
import Codiv from "./Covid";
//import ImagesComponent from "./ImagesComponent";
import Info from "./Info";
import Social from "./Social";
const Sponsors = React.lazy(() => import("./Sponsors"));

export default function Home(props) {
  const [covid, setCovid] = useState(true);
  return (
    <div className={styles.Home}>
      <Helmet>
        <title>Stocken SOS 2020 | Swimrun på Orust </title>

        <link rel="canonical" href="https://stockensos.se" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      {covid && <Codiv setCovid={setCovid} />}

      <Main />
      {/*<ImagesComponent />*/}
      <Info />
      <Suspense fallback={<div>Loading...</div>}>
        <Sponsors />
      </Suspense>
      <Social />
    </div>
  );
}
