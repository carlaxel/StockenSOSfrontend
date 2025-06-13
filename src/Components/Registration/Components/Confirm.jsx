import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "./Confirm.module.css";

export default function Confirm(props) {
  const [ok, setOk] = useState(false);

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
    SOS_participation2: "Deltagare 2 har sprungit SOS X gånger tidigare",
  };

  // Group related fields together
  const fieldGroups = {
    race: ["race", "runnersclass"],
    runner1: ["firstname1", "lastname1", "birthdate1", "email1", "phone1", "address1", "zipcode1", "city1", "shirt1", "SOS_participation1"],
    runner2: ["firstname2", "lastname2", "birthdate2", "email2", "phone2", "address2", "zipcode2", "city2", "shirt2", "SOS_participation2"],
  };

  const handleOk = () => setOk(!ok);
  const handleBack = () => props.setStage("input");
  const handleContinue = () => {
    if (!ok) {
      window.alert("Villkor måste godkännas");
      return;
    }
    props.setStage("payment");
  };

  const renderFields = (fields) => {
    return fields.map(
      (field) =>
        props.finalForm[field] && (
          <div key={field} className={styles.infoItem}>
            <span className={styles.label}>{translate[field]}</span>
            <span className={styles.value}>{props.finalForm[field]}</span>
          </div>
        )
    );
  };

  const TermsContent = ({ close }) => (
    <div className={styles.termsModal}>
      <button className={styles.closeButton} onClick={close}>
        ×
      </button>
      <div className={styles.termsContent}>
        <h4>Anmälningsvillkor</h4>
        <p>
          Anmälan görs på hemsidan genom att ange personuppgifter samt betala
          startavgift. Din anmälan kommer inte att godkännas förrän startavgiften
          är betalad. Startavgiften är 600 kr per löpare i långdistansen och 400kr
          i mellandistansen. Knattedistansen är gratis och deltagare anmäls till
          stockensommar@gmail.com. För deltagare under 18 år vill vi ha målsmans
          medgivande.
        </p>
        <p>
          Vi kan inte återbetala outnyttjade startavgifter. Får du förhinder ber
          vi dig hitta en ersättare vars personuppgifter ska registreras via
          länken i bekräftelsemailet du fick vid anmälningstillfället. Sista
          anmälan är 17 juli.
        </p>
        <h4>Hantering av personuppgifter</h4>
        <p>
          Sommarträning på Stocken är arrangör av Stocken SOS och samlar in
          födelsedatum och kontaktinformation från samtliga deltagare för att
          kunna informera om loppet samt skicka erbjudanden om framtida lopp och
          produkter från våra sponsorer. Dina personuppgifter kommer endast
          behandlas av organisationsteamet och speciellt utsedda funktionärer.
          Genom att anmäla dig till Stocken SOS och betala in startavgiften
          samtycker du till att vi behandlar dina personuppgifter i enlighet med
          ovan.
        </p>
      </div>
    </div>
  );

  return (
    <div className={styles.Confirm}>
      <h2 className={styles.title}>Bekräftelse</h2>
      
      <div className={styles.infoGrid}>
        {renderFields(fieldGroups.race)}
      </div>

      <div className={styles.infoGrid}>
        {renderFields(fieldGroups.runner1)}
      </div>

      {props.finalForm.firstname2 && (
        <div className={styles.infoGrid}>
          {renderFields(fieldGroups.runner2)}
        </div>
      )}

      <div className={styles.termsContainer}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={ok}
            onChange={handleOk}
            name="ok"
          />
          <span>Jag godkänner</span>
          <Popup
            trigger={
              <span className={styles.termsLink}>villkoren</span>
            }
            modal
            closeOnDocumentClick
            overlayStyle={{
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            contentStyle={{
              background: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0',
              maxWidth: '90vw',
              width: '500px',
              maxHeight: '70vh',
              overflow: 'auto',
              margin: '0',
              position: 'relative'
            }}
          >
            {close => <TermsContent close={close} />}
          </Popup>
        </label>
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={handleBack}
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          Tillbaka
        </button>
        <button
          onClick={handleContinue}
          className={`${styles.button} ${styles.primaryButton}`}
        >
          Fortsätt till betalning
        </button>
      </div>
    </div>
  );
}
