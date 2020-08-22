import React from "react";
import styles from "./Covid.module.css";

function Covid(props) {
  const handleClick = () => {
    props.setCovid(false);
  };
  return (
    <div className={styles.Covid}>
      <div onClick={handleClick} className={styles.X}></div>
      <div className={styles.CovidCenter}>
        <h2 className={styles.H2}>MED ANLEDNING AV CORONA/COVID-19 SKJUTS SOS 2020 UPP</h2>
        <p className={styles.P}>
        Förbudet mot allmänna sammankomster med fler än 50 personer ligger kvar tillsvidare och vi skjuter därför upp SOS 2020 till 2021. Alla som betalat in deltagaravgiften kommer kontaktas via mail och kompenseras. Lycka till med träningen så ses vi den 17 juli 2021 istället, anmälan är öppen!        </p>
      </div>
    </div>
  );
}

export default Covid;
