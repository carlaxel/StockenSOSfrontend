import React from "react";
import { Helmet } from "react-helmet";
import Result from "./Result";
import styles from "./Result.module.css";
import runners from "./runners2023";

export default function Result2023(props) {
  return (
    <div className={styles.Background}>
      <Helmet>
        <title>Stocken SOS</title>
      </Helmet>
      <Result runners={runners} />
    </div>
  );
}
