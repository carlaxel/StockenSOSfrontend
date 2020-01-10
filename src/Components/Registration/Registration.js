import React, { useState, useEffect } from "react";
import styles from "./Registration.module.css";
import Inputs from "./Components/Inputs";
import Confirm from "./Components/Confirm";
import Payment from "./Components/Payment/Payment";
export default function Registration(props) {
  const [form, setForm] = useState({
    firstname1: "",
    lastname1: "",
    firstname2: "",
    lastname2: "",
    race: "",
    runnersclass: "",
    email1: "",
    email2: "",
    birthdate1: "",
    birthdate2: "",
    phone1: "",
    phone2: "",
    address1: "",
    zipcode1: "",
    city1: "",
    address2: "",
    zipcode2: "",
    city2: "",
    shirt1: "",
    shirt2: "",
    SOS_participation1: "0",
    SOS_participation2: "0"
  });
  const [stage, setStage] = useState("input");
  const [allowReg, setAllowReg] = useState(true);

  useEffect(() => {
    let today = new Date();
    let raceFinished = new Date("Sat Jul 16 2020 05:00:00 GMT+0100");
    if (today - raceFinished > 0) {
      setAllowReg(false);
    }
  }, []);

  if (!allowReg) {
    return <p>Registrering är avslutad</p>;
  }

  if (form && form.race === "knatte") {
    return (
      <div className={styles.Registration}>
        <div className={styles.Main}>
          {stage === "input" && (
            <Inputs form={form} setForm={setForm} setStage={setStage} />
          )}
          {stage === "confirm" && (
            <Confirm finalForm={form} setStage={setStage} knatte />
          )}
          {stage === "payment" && (
            <Payment finalForm={form} setStage={setStage} knatte />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.Registration}>
      <div className={styles.Main}>
        {stage === "input" && (
          <Inputs form={form} setForm={setForm} setStage={setStage} />
        )}
        {stage === "confirm" && (
          <Confirm finalForm={form} setStage={setStage} />
        )}
        {stage === "payment" && (
          <Payment finalForm={form} setStage={setStage} />
        )}
      </div>
    </div>
  );
}
