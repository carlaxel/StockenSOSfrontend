import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header(props) {
  const [allowReg, setAllowReg] = useState(true);

  useEffect(() => {
    let today = new Date();
    let raceFinished = new Date("Sat Jul 16 2021 10:00:00 GMT+0100");
    if (today - raceFinished > 0) {
      setAllowReg(false);
    }
  }, []);

  const [fake, setFake] = useState(0);
  useEffect(() => {
    if (fake === 2) {
      setFake(3);
    }
  }, [fake]);

  return (
    <div className={`${styles.Header} ${styles.shadow}`}>
      <div className={`${styles.HeaderBox}`}>
        <h1 className={`${styles.H1}`}>Stocken SOS 2021</h1>
        <p className={styles.BreadText}>
          För fjärde året arrangerar vi Stocken Spring och Sim, loppet där alla
          är välkomna . Vi springer och simmar i en fantastisk natur på Orusts
          västkust där både barn, ungdomar och vuxna är välkomna. Loppet
          arrangeras av den ideella föreningen Sommarträning på Stocken och
          överskottet går till att förbättra miljön för boende och gäster i
          samhället.
        </p>
        <div className={styles.anmalanDiv}>
          {allowReg ? (
            <Link to="/registration" className={styles.AnmalanButton}>
              Anmälan 2021
            </Link>
          ) : (
            <Link className={styles.AnmalanButtonClosed}>Anmälan 2021</Link>
          )}

          <h4 className={styles.H4}>17 Juli 13:00</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
