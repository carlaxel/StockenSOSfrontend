import React from "react";
import styles from "./Social.module.css";
import { ReactComponent as Facebook } from "../assets/social/facebook_colored.svg";
import { ReactComponent as Instagram } from "../assets/social/instagram_colored.svg";
import { ReactComponent as Twitter } from "../assets/social/twitter_colored.svg";
//import { ReactComponent as Youtube } from "../assets/social/youtube_colored.svg";

function Social(props) {
  return (
    <div className={styles.Social}>
      <a
        className={styles.socialLink}
        href="https://www.facebook.com/StockenSOS/"
      >
        <Facebook className={styles.Icon} />
      </a>
      <a
        className={styles.socialLink}
        href="https://www.instagram.com/stockensos/"
      >
        <Instagram className={styles.Icon} />
      </a>
      <a className={styles.socialLink} href="https://twitter.com">
        <Twitter className={styles.Icon} />
      </a>
      {/*<Youtube className={styles.Icon} />*/}
    </div>
  );
}

export default Social;
