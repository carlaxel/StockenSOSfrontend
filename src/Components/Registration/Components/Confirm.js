import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "./Confirm.module.css";

export default function Confirm(props) {
  let [ok, setOk] = useState(false);

  function handleOk(e) {
    let value = ok;
    setOk(!value);
  }

  function handleBack() {
    props.setStage("input");
  }

  const translate = {
    firstname1: "Förnamn 1",
    lastname1: "Efternamn 1",
    firstname2: "Förnamn 2",
    lastname2: "Efternamn 2",
    race: "Lopp",
    runnersclass: "Klass",
    email1: "Email 1",
    email2: "Email 2",
    birthdate1: "Födelsedatum Deltagare 1",
    birthdate2: "Födelsedatum Deltagare 2",
    phone1: "Telefon 1",
    phone2: "Telefon 2",
    address1: "Adress 1",
    zipcode1: "Postnummer 1",
    city1: "Stad 1",
    address2: "Adress 2",
    zipcode2: "Postnummer 2",
    city2: "Stad 2",
    shirt1: "T-Shirt 1",
    shirt2: "T-Shirt 2",
    SOS_participation1: "Deltagare 1 har sprungit SOS X gånger tidigare",
    SOS_participation2: "Deltagare 2 har sprungit SOS X gånger tidigare"
  };

  function handleClick() {
    if (!ok) {
      window.alert("Villkor måste godkännas");
      return;
    }
    props.setStage("payment");
  }
  if (props.knatte) {
    return (
      <div className={styles.Confirm}>
        <h2>Bekräfta värden</h2>
        {Object.keys(props.finalForm).map(input => (
          <div key={input}>
            <label style={{ margin: "0.3rem", fontWeight: "bold" }}>
              {translate[input]}:
            </label>
            <label>{props.finalForm[input]}</label>
          </div>
        ))}
        <div style={{ marginTop: "2rem" }}>
          <input onChange={handleOk} type="checkbox" checked={ok} name="ok" />
          <span style={{ margin: "0.3rem" }} onClick={handleOk}>
            Godkänn
          </span>
          <label>
            <Popup
              trigger={<span style={{ color: "blue" }}> villkor </span>}
              modal
              closeOnDocumentClick
            >
              <p>
                {" "}
                Anmälan görs på hemsidan genom att ange personuppgifter samt
                betala in startavgiften. Begränsat antal löpare, först till
                kvarn gäller. Startavgiften är 500 kr per löpare i lång- och
                mellandistanserna. Knattedistansen är gratis (men deltagare
                måste anmälas till johan.kyllerman@awx.se). För minderåriga
                (under 18 år) vill vi ha målsmans medgivande att deltaga. Din
                anmälan kommer inte att godkännas förrän startavgiften är
                inbetald. Vi kan inte återbetala outnyttjade startavgifter, så
                om du skulle få förhinder ber vi dig att hitta en ersättare som
                kan ta din plats. Viktigt i så fall att kontakta oss så vi kan
                uppdatera startlistan med rätt personuppgifter. För att hantera
                ändringar i efterhand kommer vi att ta ut en administrativ
                avgift på 50 kr.
              </p>
              <p>
                Vi tar emot anmälningar löpande och antal och platser är
                begränsade. Först till kvarn gäller, vi reserverar oss för
                slutförsäljning. Pga högt intresse har vi tidigarelagt deadline
                för anmälan till senast 15 juli.
              </p>
              <p>
                Vi lagrar de uppgifter som du handahåller oss i formulär, era
                uppgifter kommer ej att användas för syften utanför Stocken SOS.
              </p>
            </Popup>
          </label>
        </div>
        <div>
          <button
            style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
            onClick={handleBack}
          >
            Tillbaka
          </button>
          <button
            style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
            onClick={handleClick}
          >
            Bekräfta anmälan
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.Confirm}>
      <h2>Bekräfta värden</h2>
      {Object.keys(props.finalForm).map(input => (
        <div key={input}>
          <label style={{ margin: "0.3rem", fontWeight: "bold" }}>
            {translate[input]}:
          </label>
          <label>{props.finalForm[input]}</label>
        </div>
      ))}
      <div style={{ marginTop: "2rem" }}>
        <input onChange={handleOk} type="checkbox" checked={ok} name="ok" />
        <span style={{ margin: "0.3rem" }} onClick={handleOk}>
          Godkänn
        </span>
        <label>
          <Popup
            trigger={<span style={{ color: "blue" }}> villkor </span>}
            modal
            closeOnDocumentClick
          >
            <React.Fragment>
              <p>
                {" "}
                Anmälan görs på hemsidan genom att ange personuppgifter samt
                betala in startavgiften. Begränsat antal löpare, först till
                kvarn gäller. Startavgiften är 500 kr per löpare i lång- och
                mellandistanserna. Knattedistansen är gratis (men deltagare
                måste anmälas till johan.kyllerman@awx.se). För minderåriga
                (under 18 år) vill vi ha målsmans medgivande att deltaga. Din
                anmälan kommer inte att godkännas förrän startavgiften är
                inbetald. Vi kan inte återbetala outnyttjade startavgifter, så
                om du skulle få förhinder ber vi dig att hitta en ersättare som
                kan ta din plats. Viktigt i så fall att kontakta oss så vi kan
                uppdatera startlistan med rätt personuppgifter. För att hantera
                ändringar i efterhand kommer vi att ta ut en administrativ
                avgift på 50 kr.
              </p>
              <p>
                Vi tar emot anmälningar löpande och antal och platser är
                begränsade. Först till kvarn gäller, vi reserverar oss för
                slutförsäljning. Pga högt intresse har vi tidigarelagt deadline
                för anmälan till senast 15 juli.
              </p>
              <p>
                Vi lagrar de uppgifter som du handahåller oss i formulär, era
                uppgifter kommer ej att användas för syften utanför Stocken SOS.
              </p>
            </React.Fragment>
          </Popup>
        </label>
      </div>
      <div>
        <button
          style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
          onClick={handleBack}
        >
          Tillbaka
        </button>
        <button
          style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
          onClick={handleClick}
        >
          Gå till betalning
        </button>
      </div>
    </div>
  );
}
