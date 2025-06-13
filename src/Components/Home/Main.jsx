import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";

function Main(props) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.Main}>
      <div className={styles.MainCenter}>
        <h2 className={styles.H2}>Stocken SOS</h2>
        <p className={styles.P}>
          Lördagen den 19 juli arrangerar vi för åttonde gången Stocken Spring
          och Sim (SOS), loppet där både barn, ungdomar och vuxna är välkomna.
          Vi springer och simmar i en fantastisk natur på Orusts västkust.
          Loppet arrangeras av den ideella föreningen Sommarträning på Stocken
          och överskottet går till att förbättra miljön för boende och gäster i
          samhället.
        </p>
        <p className={styles.P}>
          Vi springer parvis två och två och har tre distanser att välja på så
          att alla kan hitta just sin utmaning. De tre distanserna är:{" "}
        </p>
        <ul>
          <li className={styles.Li}>
            Lång: Ca 5,7 km löpning och 700 m simning
          </li>
          <li className={styles.Li}>
            Mellan: Ca 2,5 km löpning och 200 m simning
          </li>
          <li className={styles.Li}>
            Knatte: Ca 0,5 km löpning och vattenplask (för barn och knattar i
            första hand){" "}
          </li>
        </ul>

        <p className={styles.P}>
          Löpningen sker i varierad terräng på och runt Stocken, där den långa
          distansen även inkluderar ett besök på Råön. På den kortaste distansen
          (0,5 km) finns inget krav på parvis löpning, däremot kan det vara bra
          med föräldrastöd för de allra minsta.
        </p>

        <p className={styles.P}>
          Om du anmäler dig senast 15 augusti 2024 ingår en t-shirt i
          funktionsmaterial till ett värde av 450 kr. Sista anmälan 17 juli.
        </p>
        <iframe
          title="Video från Stocken SOS 2019"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FStockenSOS%2Fvideos%2F475746976333421%2F&show_text=0&width=560"
          width={
            windowDimensions.width > 620 ? 560 : windowDimensions.width - 80
          }
          height={
            windowDimensions.width > 620
              ? 315
              : Math.ceil((windowDimensions.width - 80) / 1.77777778)
          }
          style={{
            border: "none",
            overflow: "hidden",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default Main;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
