import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Result from "./Result";
import styles from "./Result.module.css";

export default function Result2021(props) {
  const [runners, setRunners] = useState([]);

  useEffect(() => {
    async function init() {
      let runners = await fetch("/api-2021/runners/getAll");
      console.log(runners);
      runners = await runners.json();
      console.log(runners);
      setRunners(runners);
    }
    init();
  }, []);

  return (
    <div className={styles.Background}>
      <Helmet>
        <title>Stocken SOS</title>

        <link rel="canonical" href="https://stockensos.se/result2021" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      <Result runners={runners} />
    </div>
  );
}
