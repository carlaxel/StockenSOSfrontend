import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./Inputs.module.css";

export const renderPrice = (form) => {
  let today = new Date();
  let lastTshirtFree = new Date("Sat Aug 15 2024 23:59:59 GMT+0200");
  
  if(form.race === "lång" || !form.race){
    if (today < lastTshirtFree) {
      return 600 * 2;
    }else{
      if (form.shirt1 && form.shirt2) {
        return 600 * 2 + 250 * 2;
      } else if (form.shirt1 || form.shirt2) {
        return 600 * 2 + 250 * 1;
      } else {
        return 600 * 2;
      }
    }
  }else{
    if (today < lastTshirtFree) {
      return 400 * 2;
    }else{
      if (form.shirt1 && form.shirt2) {
        return 400 * 2 + 250 * 2;
      } else if (form.shirt1 || form.shirt2) {
        return 400 * 2 + 250 * 1;
      } else {
        return 400 * 2;
      }
    }
  }
};

export default function Inputs(props) {
  const { form, setForm } = props;
  const [borders, setBorders] = useState({
    firstname1: false,
    lastname1: false,
    firstname2: false,
    lastname2: false,
    race: false,
    runnersclass: false,
    email1: false,
    email2: false,
    birthdate1: false,
    birthdate2: false,
    phone1: false,
    phone2: false,
    address1: false,
    zipcode1: false,
    city1: false,
    address2: false,
    zipcode2: false,
    city2: false,
    SOS_participation1: false,
    SOS_participation2: false,
    
  });

  function handleChange(e) {
    let formCopy = { ...form };
    formCopy[e.target.name] = e.target.value;

    // const re = /^[0-9\b]+$/;
    // if (e.target.value == "" || re.test(e.target.value)) {
    setForm(formCopy);
    //   }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let formCopy = { ...form };
    //validate here

    let reject = false;
    let reason = "";
    let fields = {};
    for (let [key, value] of Object.entries(formCopy)) {
      
      if (value || value === 0) {
        fields[key] = false;
        if (key === "birthdate1" || key === "birthdate2") {
          if (value.length !== 8) {
            fields[key] = true;
            reason = "Födelsedatum har fel format";
            reject = true;
          }
        } else if (key === "phone1" || key === "phone2") {
          if (value.length < 9) {
            fields[key] = true;
            reason = "Telefonnummer har fel format";
            reject = true;
          }
        } else if (key === "email1" || key === "email2") {
          if (!validateEmail(value)) {
            fields[key] = true;
            reason = "Email har fel format";
            reject = true;
          }
        }
      } else {
        if (key === "shirt1" || key === "shirt2") {
          continue;
        }
        reason = "Alla fält måste fyllas i.";
        reject = true;
        fields[key] = true;
      }
    }
    if (reject) {
      setBorders(fields);
      window.alert(reason);
      return;
    }

    //send up
    //props.setFinalForm(formCopy);
    props.setStage("confirm");
  }

  const renderTshirt = (form) => {
    if (form.shirt1 && form.shirt2) {
      return <p>2 * T-Shirt</p>;
    } else if (form.shirt1 || form.shirt2) {
      return <p>1 * T-Shirt</p>;
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Stocken SOS</title>

        <link rel="canonical" href="https://stockensos.se/registration" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      <div className={styles.Box}>
        <form className={styles.Inputs} onSubmit={handleSubmit}>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="firstname1">
              Förnamn på deltagare 1
            </label>
            <input
              id="firstname1"
              className={styles.formControl}
              name="firstname1"
              onChange={handleChange}
              value={form.firstname1}
              placeholder="Ange förnamn"
              style={
                borders.firstname1
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="lastname1">
              Efternamn på deltagare 1
            </label>
            <input
              id="lastname1"
              className={styles.formControl}
              name="lastname1"
              onChange={handleChange}
              value={form.lastname1}
              placeholder="Ange efternamn"
              style={
                borders.lastname1
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="firstname2">
              Förnamn på deltagare 2
            </label>
            <input
              id="firstname2"
              className={styles.formControl}
              name="firstname2"
              onChange={handleChange}
              value={form.firstname2}
              placeholder="Ange förnamn"
              style={
                borders.firstname2
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="lastname2">
              Efternamn på deltagare 2
            </label>
            <input
              id="lastname2"
              className={styles.formControl}
              name="lastname2"
              onChange={handleChange}
              value={form.lastname2}
              placeholder="Ange efternamn"
              style={
                borders.lastname2
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="race">
              Val av lopp
            </label>
            <select
              className={styles.formControl}
              value={form.race}
              name="race"
              onChange={handleChange}
              style={
                borders.race
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            >
              <option defaultValue value=""></option>
              <option value="lång">Långa</option>
              <option value="mellan">Mellan</option>
            </select>
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="runnersclass">
              Klass
            </label>
            <select
              className={styles.formControl}
              name="runnersclass"
              onChange={handleChange}
              value={form.runnersclass}
              style={
                borders.runnersclass
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            >
              <option defaultValue value=""></option>
              <option value="herr">Herr</option>
              <option value="dam">Dam</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="email1">
              Email Deltagare 1
            </label>
            <input
              id="email1"
              className={styles.formControl}
              name="email1"
              onChange={handleChange}
              type="email"
              value={form.email1}
              placeholder="Ange email"
              style={
                borders.email1
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="email2">
              Email Deltagare 2
            </label>
            <input
              id="email2"
              className={styles.formControl}
              name="email2"
              onChange={handleChange}
              type="email"
              value={form.email2}
              placeholder="Ange email"
              style={
                borders.email2
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="birthdate1">
              Födelsedatum Deltagare 1
            </label>
            <input
              id="birthdate1"
              className={styles.formControl}
              name="birthdate1"
              onChange={handleChange}
              type="number"
              value={form.birthdate1}
              placeholder="YYYYMMDD"
              style={
                borders.birthdate1
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="birthdate2">
              Födelsedatum Deltagare 2
            </label>
            <input
              id="birthdate2"
              className={styles.formControl}
              name="birthdate2"
              onChange={handleChange}
              type="number"
              value={form.birthdate2}
              placeholder="YYYYMMDD"
              style={
                borders.birthdate2
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="phone1">
              Telefon Deltagare 1
            </label>
            <input
              id="phone1"
              className={styles.formControl}
              name="phone1"
              onChange={handleChange}
              type="tel"
              value={form.phone1}
              placeholder="Ange telefonnummer"
              style={
                borders.phone1
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="phone2">
              Telefon Deltagare 2
            </label>
            <input
              id="phone2"
              className={styles.formControl}
              name="phone2"
              onChange={handleChange}
              type="tel"
              value={form.phone2}
              placeholder="Ange telefonnummer"
              style={
                borders.phone2
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            />
          </div>

          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="shirt1">
              Storlek T-shirt 1
            </label>
            <select
              id="shirt1"
              className={styles.formControl}
              value={form.shirt1}
              name="shirt1"
              onChange={handleChange}
              style={
                borders.shirt1
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
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
            <label className={styles.label} htmlFor="shirt2">
              Storlek T-shirt 2
            </label>
            <select
              id="shirt2"
              className={styles.formControl}
              value={form.shirt2}
              name="shirt2"
              onChange={handleChange}
              style={
                borders.shirt2
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
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
            <label className={styles.label} htmlFor="SOS_participation1">
              Deltagare 1 har sprungit SOS X gånger tidigare
            </label>
            <select
              required
              id="SOS_participation1"
              className={styles.formControl}
              name="SOS_participation1"
              onChange={handleChange}
              value={form.SOS_participation1}
              style={
                borders.SOS_participation1
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            >
              <option defaultValue value="0">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className={styles.InputElement}>
            <label className={styles.label} htmlFor="SOS_participation2">
              Deltagare 2 har sprungit SOS X gånger tidigare
            </label>
            <select
              id="SOS_participation2"
              className={styles.formControl}
              name="SOS_participation2"
              onChange={handleChange}
              value={form.SOS_participation2}
              style={
                borders.SOS_participation2
                  ? { borderColor: "#ef4444" }
                  : undefined
              }
            >
              <option defaultValue value="0">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className={styles.CartMobile}>
            <h4>Kassa</h4>
            <div>
              <p>2 * Löpare</p>
              { renderTshirt(form) }
              <h3>Summa: {renderPrice(form)} kr</h3>
            </div>
          </div>
          <button className={styles.Button} onClick={handleSubmit}>
            Bekräfta
          </button>
        </form>
        <div className={styles.CartBox}>
          <div className={styles.Cart}>
            <h4 className={styles.Kassa}>Kassa</h4>

            <React.Fragment>
              <p>2 * Löpare</p>
              {renderTshirt(form)}

              <h3 className={styles.Sum}>Summa: {renderPrice(form)} kr</h3>
            </React.Fragment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function validateEmail(email) {
 
  let re =  // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
