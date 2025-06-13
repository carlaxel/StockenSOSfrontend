import React from "react";
import styles from "./Social.module.css";
import facebook from "../assets/social/facebook_colored.svg";
import instagram from "../assets/social/instagram_colored.svg";

function Social(props) {
  return (
    <div className={styles.Social}>
      <a
        alt="facebook länk"
        className={styles.socialLink}
        href="https://www.facebook.com/StockenSOS/"
      >
        <img src={facebook} className={styles.Icon} alt="Facebook" />
      </a>
      <a
        alt="Instagram länk"
        className={styles.socialLink}
        href="https://www.instagram.com/stockensos/"
      >
        <img src={instagram} className={styles.Icon} alt="Instagram" />
      </a>
    </div>
  );
}

export default Social;
