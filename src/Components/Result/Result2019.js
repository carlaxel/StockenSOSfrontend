import React from "react";
import { Helmet } from "react-helmet";
import Result from "./Result";
import styles from "./Result.module.css";
import runners from "./runners2019";

export default function Result2019(props) {
  return (
    <div className={styles.Background}>
      <Helmet>
        <title>Stocken SOS</title>

        <link rel="canonical" href="https://stockensos.se/result2019" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      <Result runners={runners} />
    </div>
  );
}
