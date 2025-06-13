import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Inputs.module.css";

export default function Andring() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let [done, setDone] = useState(false);
  let [error, setError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function fetchRunner(id) {
      let data = await fetch("/api-v1/runnerandring", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          INTENT: id,
        }),
      });
      if (data.status !== 200) {
        setError(true);
        return;
      }
      data = await data.json();
      delete data.stripeIntendId;
      delete data.checkin;
      delete data.finished;
      delete data.finishtime;
      delete data.officialtime;

      // add for allow change shirt
      // delete data.shirt1;
      // delete data.shirt2;
      delete data.race;

      setForm(data);
    }
    try {
      fetchRunner(id);
    } catch (e) {
      setError(true);
    }
  }, [id]);

  const [form, setForm] = useState({
    firstname1: "",
    lastname1: "",
    firstname2: "",
    lastname2: "",
    // race: "",
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

  function handleChange(e) {
    let formCopy = { ...form };
    formCopy[e.target.name] = e.target.value;

    // const re = /^[0-9\b]+$/;
    // if (e.target.value == "" || re.test(e.target.value)) {
    setForm(formCopy);
    //   }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let formCopy = { ...form };
    //validate here

    console.log(formCopy)
    for (let value of Object.values(formCopy)) {
      if (value || value === 0) {
      } else {
        window.alert("Alla fält måste fyllas i.");
        return;
      }
    }

    //send up
    let data = await fetch("/api-v1/runnerandring", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        body: formCopy,
      }),
    });
    await data.json();
    setDone(true);
  }
  if (error) {
    return <div>Fel uppstod, försök senare</div>;
  }

  return done ? (
    <div>Tack, info har uppdaterats</div>
  ) : (
    <React.Fragment>
      <div className={styles.Box}>
        <form className={styles.Inputs} onSubmit={handleSubmit}>
          <div className={styles.InputElement}>
            <label htmlFor="firstname1">Förnamn på deltagare 1</label>
            <input
              className={styles.formControl}
              name="firstname1"
              onChange={handleChange}
              value={form.firstname1}
            ></input>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="lastname1">Efternamn på deltagare 1</label>
            <input
              className={styles.formControl}
              name="lastname1"
              onChange={handleChange}
              value={form.lastname1}
            ></input>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="firstname2">Förnamn på deltagare 2</label>
            <input
              className={styles.formControl}
              name="firstname2"
              onChange={handleChange}
              value={form.firstname2}
            ></input>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="lastname2">Efternamn på deltagare 2</label>
            <input
              className={styles.formControl}
              name="lastname2"
              onChange={handleChange}
              value={form.lastname2}
            ></input>
          </div>
          {/* <div className={styles.InputElement}>
            <label htmlFor="race">Val av lopp</label>
            <select
              className={styles.formControl}
              value={form.race}
              name="race"
              onChange={handleChange}
            >
              <option defaultValue value=""></option>
              <option value="lång">Långa</option>
              <option value="mellan">Mellan</option>
            </select>
          </div> */}
          <div className={styles.InputElement}>
            <label htmlFor="runnersclass">Klass</label>
            <select
              className={styles.formControl}
              name="runnersclass"
              onChange={handleChange}
              value={form.runnersclass}
            >
              <option defaultValue value=""></option>
              <option value="herr">Herr</option>
              <option value="dam">Dam</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="email1">Email Deltagare 1</label>
            <input
              className={styles.formControl}
              name="email1"
              onChange={handleChange}
              type="email"
              value={form.email1}
            ></input>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="email2">Email Deltagare 2</label>
            <input
              className={styles.formControl}
              name="email2"
              onChange={handleChange}
              type="email"
              value={form.email2}
            ></input>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="birthdate1">Födelsedatum Deltagare 1</label>
            <input
              className={styles.formControl}
              name="birthdate1"
              onChange={handleChange}
              type="number"
              value={form.birthdate1}
              placeholder="YYYYMMDD"
            ></input>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="birthdate2">Födelsedatum Deltagare 2</label>
            <input
              className={styles.formControl}
              name="birthdate2"
              onChange={handleChange}
              type="number"
              value={form.birthdate2}
              placeholder="YYYYMMDD"
            ></input>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="phone1">Telefon Deltagare 1</label>
            <input
              className={styles.formControl}
              name="phone1"
              onChange={handleChange}
              type="tel"
              value={form.phone1}
            ></input>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="phone2">Telefon Deltagare 2</label>
            <input
              className={styles.formControl}
              name="phone2"
              onChange={handleChange}
              type="tel"
              value={form.phone2}
            ></input>
          </div>

          <div className={styles.InputElement}>
            <label htmlFor="shirt1">Storlek T-shirt 1 (Ej knatte)</label>
            <select
              className={styles.formControl}
              value={form.shirt1}
              name="shirt1"
              onChange={handleChange}
            >
              <option defaultValue value=""></option>
              <option value="Dam S">Dam S</option>
              <option value="Dam M">Dam M</option>
              <option value="Dam L">Dam L</option>
              <option value="Dam XL">Dam XL</option>
              <option value="Herr S">Herr S</option>
              <option value="Herr M">Herr M</option>
              <option value="Herr L">Herr L</option>
              <option value="Herr XL">Herr XL</option>
            </select>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="shirt2">Storlek T-shirt 2 (Ej knatte)</label>
            <select
              className={styles.formControl}
              value={form.shirt2}
              name="shirt2"
              onChange={handleChange}
            >
              <option defaultValue value=""></option>
              <option value="Dam S">Dam S</option>
              <option value="Dam M">Dam M</option>
              <option value="Dam L">Dam L</option>
              <option value="Dam XL">Dam XL</option>
              <option value="Herr S">Herr S</option>
              <option value="Herr M">Herr M</option>
              <option value="Herr L">Herr L</option>
              <option value="Herr XL">Herr XL</option>
            </select>
          </div> 
          <div className={styles.InputElement}>
            <label htmlFor="SOS_participation1">
              Deltagare 1 har sprungit SOS X gånger tidigare
            </label>
            <select
              className={styles.formControl}
              name="SOS_participation1"
              onChange={handleChange}
              value={form.SOS_participation1}
            >
              <option defaultValue value="0">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className={styles.InputElement}>
            <label htmlFor="SOS_participation2">
              Deltagare 2 har sprungit SOS X gånger tidigare
            </label>
            <select
              className={styles.formControl}
              name="SOS_participation2"
              onChange={handleChange}
              value={form.SOS_participation2}
            >
              <option defaultValue value="0">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button type="submit">Uppdatera information</button>
        </form>
      </div>
    </React.Fragment>
  );
}
