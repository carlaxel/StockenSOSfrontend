import React from "react";
import { Helmet } from "react-helmet";
import Result from "./Result";
import styles from "./Result.module.css";
import runners from "./runners2021";

export default function Result2021(props) {
  return (
    <div className={styles.Background}>
      <Helmet>
        <title>Stocken SOS</title>
      </Helmet>
      <Result runners={runners} />
    </div>
  );
}
