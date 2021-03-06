import React from "react";
import { StripeProvider } from "react-stripe-elements";

import styles from "./Payment.module.css";
import Checkout from "./Checkout";
import Knatte from "./Knatte";
import StockenImg from "./logo.png";

function Payment(props) {
  if (props.knatte) {
    return <Knatte finalForm={props.finalForm} />;
  }
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE}>
      <div className={styles.Payment}>
        <Checkout finalForm={props.finalForm} />
        <img className={styles.logo} src={StockenImg} alt="Stocken logo"></img>
      </div>
    </StripeProvider>
  );
}

export default Payment;
