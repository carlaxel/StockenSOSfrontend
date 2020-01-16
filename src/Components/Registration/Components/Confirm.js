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
        <h2>Bekräftelse</h2>
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
                betala startavgift. Din anmälan kommer inte att godkännas förrän
                startavgiften är betalad. Startavgiften är 500 kr per löpare i
                lång- och mellandistanserna. Knattedistansen är gratis och
                deltagare anmäls till johan.kyllerman@gmail.com. För deltagare
                under 18 år vill vi ha målsmans medgivande.
              </p>
              <p>
                Vi kan inte återbetala outnyttjade startavgifter. Får du
                förhinder ber vi dig hitta en ersättare vars personuppgifter ska
                registreras via länken i bekräftelsemailet du fick vid
                anmälningstillfället. Ändring av storlek på t-shirt kan göras
                senast 1 Juli. Sista anmälan är 15 juli
              </p>
              <h5>Hantering av personuppgifter</h5>
              <p>
                Sommarträning på Stocken är arrangör av Stocken SOS och samlar
                in födelsedatum och kontaktinformation från samtliga deltagare
                för att kunna informera om loppet samt skicka erbjudanden om
                framtida lopp och produkter från våra sponsorer. Dina
                personuppgifter kommer endast behandlas av organisationsteamet
                och speciellt utsedda funktionärer. Genom att anmäla dig till
                Stocken SOS och betala in startavgiften samtycker du till att vi
                behandlar dina personuppgifter i enlighet med ovan.
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
      <h2>Bekräftelse</h2>
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
                betala startavgift. Din anmälan kommer inte att godkännas förrän
                startavgiften är betalad. Startavgiften är 500 kr per löpare i
                lång- och mellandistanserna. Knattedistansen är gratis och
                deltagare anmäls till johan.kyllerman@gmail.com. För deltagare
                under 18 år vill vi ha målsmans medgivande.
              </p>
              <p>
                Vi kan inte återbetala outnyttjade startavgifter. Får du
                förhinder ber vi dig hitta en ersättare vars personuppgifter ska
                registreras via länken i bekräftelsemailet du fick vid
                anmälningstillfället. Ändring av storlek på t-shirt kan göras
                senast 1 Juli. Sista anmälan är 15 juli
              </p>
              <h4>Hantering av personuppgifter</h4>
              <p>
                Sommarträning på Stocken är arrangör av Stocken SOS och samlar
                in födelsedatum och kontaktinformation från samtliga deltagare
                för att kunna informera om loppet samt skicka erbjudanden om
                framtida lopp och produkter från våra sponsorer. Dina
                personuppgifter kommer endast behandlas av organisationsteamet
                och speciellt utsedda funktionärer. Genom att anmäla dig till
                Stocken SOS och betala in startavgiften samtycker du till att vi
                behandlar dina personuppgifter i enlighet med ovan.
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
