import React from "react";
import styles from "./Sponsors.module.css";
import Barebells from "../assets/sponsors/Barebells-logo.png";
import Hemkop from "../assets/sponsors/hemk-p-ell-s-logga.png";
import Nicks from "../assets/sponsors/NICKS_logotyp_BLACK.png";
import OrustSparbank from "../assets/sponsors/Orust-Sparbank_logo_sl_8353_c_pos_r2_720x280px_.jpg";
import Petersons from "../assets/sponsors/Petersons-krog.jpg";
import Sjoraddningen from "../assets/sponsors/Sj-r-ddningen.png";
import SmartEyes from "../assets/sponsors/SMARTEYES-PMS-233C.png";
import VitaminWell from "../assets/sponsors/VitaminWell.png";
import Salming from "../assets/sponsors/SAL_LOGO_PAYOFF_BLK.png";
function Sponsors(props) {
  return (
    <div className={styles.Sponsors}>
      <h2 className={styles.H2}>Huvudsponsor</h2>
      <div styles={styles.main_sponsor}>
        <Sponsor img={Salming} main />
      </div>
      <h2 className={styles.H2}>Sponsorer</h2>
      <div styles={styles.sponsors}>
        <Sponsor img={Barebells} />
        <Sponsor img={Hemkop} />
        <Sponsor img={Nicks} />
        <Sponsor img={OrustSparbank} />
        <Sponsor img={Petersons} />
        <Sponsor img={Sjoraddningen} />
        <Sponsor img={SmartEyes} />
        <Sponsor img={VitaminWell} />
      </div>
    </div>
  );
}

function Sponsor(props) {
  return (
    <div className={styles.sponsorBox}>
      {props && props.main ? (
        <img
          src={props.img}
          className={styles.main_sponsorImg}
          alt="sponsor"
        ></img>
      ) : (
        <img
          src={props.img}
          className={styles.sponsorImg}
          alt="main sponsor"
        ></img>
      )}
    </div>
  );
}

export default Sponsors;
