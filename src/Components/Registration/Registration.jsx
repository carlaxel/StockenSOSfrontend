import React, { useState, useEffect } from "react";
import { pageviewGA } from "../GA";
import styles from "./Registration.module.css";
import Inputs from "./Components/Inputs.jsx";
import Confirm from "./Components/Confirm.jsx";
import Payment from "./Components/Payment/Payment.jsx";
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
    shirt1: "",
    shirt2: "",
    SOS_participation1: "0",
    SOS_participation2: "0",
  });
  const [stage, setStage] = useState("input");
  const [allowReg, setAllowReg] = useState(true);

  useEffect(() => {
    pageviewGA();
  }, []);

  useEffect(() => {
    let today = new Date();
    let regFinished = new Date("Jul 17 2025 23:59:59 GMT+0200");
    if (today - regFinished > 0) {
      setAllowReg(false);
    }
  }, []);

  if (!allowReg) {
    return <p>Registrering är avslutad</p>;
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
