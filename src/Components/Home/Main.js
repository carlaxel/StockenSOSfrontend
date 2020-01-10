import React from "react";
import styles from "./Main.module.css";

function Main(props) {
  return (
    <div className={styles.Main}>
      <div className={styles.MainCenter}>
        <h2 className={styles.H2}>Stocken Spring och Sim</h2>
        <p className={styles.P}>
          Lördagen den 18 juli 2020 arrangerar vi för fjärde gången Stocken
          Spring och Sim (SOS), loppet där alla är välkomna. Vi springer parvis
          två och två och har tre distanser att välja på så att alla kan hitta
          just sin utmaning. För minderåriga (under 18 år) vill vi ha målsmans
          medgivande. De tre distanserna är:
        </p>
        <ul>
          <li className={styles.Li}>Lång: Ca 5 km löpning och 500 m simning</li>
          <li className={styles.Li}>
            Mellan: Ca 2,5 km löpning och 200 m simning
          </li>
          <li className={styles.Li}>
            Kort: Ca 0,5 km löpning och vattenplask (för barn och knattar i
            första hand){" "}
          </li>
        </ul>
        <p className={styles.P}>
          Löpningen sker i varierad terräng i och runt Stocken, där den längsta
          distansen (5 km) även inkluderar ett besök på Råön. På den kortaste
          distansen (0,5 km) finns inget krav på parvis löpning, däremot kan det
          vara bra med föräldrastöd för de allra minsta.
        </p>
        <p className={styles.P}>
          Vi kan ta emot ett begränsat antal löpare och kommer tillämpa först
          till kvarn. Om du anmäler dig senast 1 juli får du en Salming
          löpartshirt i funktionsmaterial. Sista anmälan 15 juli. Vi reserverar
          oss för slutförsäljning.
        </p>
        <p className={styles.P}>
          Stocken SOS arrangeras av den ideella föreningen Sommarträning på
          Stocken i samarbete med vår huvudsponsor Salming Running och
          eventsponsorer Nick's, Hemköp Ellös, Orusts Sparbank, Petersons Krog
          och Smarteyes. Överskottet går till att förbättra miljön för boende
          och gäster i Stocken.
        </p>
      </div>
    </div>
  );
}

export default Main;
