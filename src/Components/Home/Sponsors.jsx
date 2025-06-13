import React from "react";
import styles from "./Sponsors.module.css";
import Hemkop from "../assets/sponsors/hemk-p-ell-s-logga.png";
import OrustSparbank from "../assets/sponsors/Orust-Sparbank_logo_sl_8353_c_pos_r2_720x280px_.jpg";
import Petersons from "../assets/sponsors/Petersons-krog.jpg";
import Sjoraddningen from "../assets/sponsors/Sj-r-ddningen.png";
import VitaminWell from "../assets/sponsors/VitaminWell.png";
import UnderArmour from "../assets/sponsors/under-armour-logo.png";
import Barebells from '../assets/sponsors/barebells.png'
import IvarsFarg from "../assets/sponsors/ivars_farg.png";
import BohusKayak from "../assets/sponsors/bohus_kayak.png";
import Strana from "../assets/sponsors/strana.png";
import Morlanda from "../assets/sponsors/morlanda_handelstradgard.png";
import Rokeri from "../assets/sponsors/stockens_rokeri.png";
import Kiwi from "../assets/sponsors/butik_kiwi.png";
import FrokenTrulls from "../assets/sponsors/froken_trulls.png";
import QvistLof from "../assets/sponsors/qvistlof.jpeg";
import Grindebacken from "../assets/sponsors/grindebacken.png";

function Sponsors(props) {
  return (
    <div className={styles.Sponsors}>
      {/* <h2 className={styles.H2}>Huvudsponsor</h2>
      <div className={styles.main_sponsor}>
        <Sponsor img={RR} main />
      </div> */}
      <h2 className={styles.H2}>Sponsorer</h2>
      <div className={styles.sponsors}>
        <Sponsor img={UnderArmour} />
        <Sponsor img={Hemkop} />
        <Sponsor img={OrustSparbank} />
        <Sponsor img={Petersons} />
        <Sponsor img={Sjoraddningen} />
        <Sponsor img={VitaminWell} />
        <Sponsor img={IvarsFarg} />
        <Sponsor img={BohusKayak} />
        <Sponsor img={Barebells} />
        <Sponsor img={Strana} />
        <Sponsor img={Morlanda} />
        <Sponsor img={Rokeri} />
        <Sponsor img={Kiwi} />
        <Sponsor img={FrokenTrulls} />
        <Sponsor img={QvistLof} />
        <Sponsor img={Grindebacken} />
      </div>
    </div>
  );
}

function Sponsor(props) {
  return props && props.main ? (
    <a href="https://revolutionrace.se" target="_blank" rel="noreferrer">
      <div>
        <img
          src={props.img}
          className={styles.main_sponsorImg}
          alt="main sponsor"
        ></img>
      </div>
    </a>
  ) : (
    <div className={styles.sponsorBox}>
      <img src={props.img} className={styles.sponsorImg} alt="sponsor"></img>
    </div>
  );
}

export default Sponsors;
