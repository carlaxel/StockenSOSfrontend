import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import styles from "./Payment.module.css";
import Checkout from "./Checkout";
import StockenImg from "./logo.png";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);

function Payment(props) {
  return (
    <Elements stripe={stripePromise}>
      <div className={styles.Payment}>
        <Checkout finalForm={props.finalForm} />
        <img className={styles.logo} src={StockenImg} alt="Stocken logo"></img>
      </div>
    </Elements>
  );
}

export default Payment;
