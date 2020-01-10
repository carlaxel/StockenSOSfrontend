import React, { useState, useEffect } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import TagManager from "react-gtm-module";
import styles from "./CheckoutForm.module.css";

function CheckoutForm(props) {
  let style = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  const [state, setState] = useState({ complete: false });
  const [secret, setSecret] = useState("");
  const [element, setElement] = useState({});
  const [paymentError, setPaymentError] = useState({
    bool: false,
    message: ""
  });
  async function submit(e) {
    const { paymentIntent, error } = await props.stripe.handleCardPayment(
      secret,
      element,
      {}
    );
    if (error) {
      console.log(error);
      setPaymentError({ bool: true, message: error.message });
      return;
    } else if (paymentError.bool === true) {
      setPaymentError({ bool: false, message: "" });
    }
    fetch("/api-v1/done", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ INTENT: paymentIntent, reg_data: props.finalForm })
    });

    setState({ complete: true });
    console.log("Purchase Complete!");
  }
  function handleReady(element) {
    console.log(element);
    setElement(element);
  }

  useEffect(() => {
    async function init() {
      try {
        let secret = await fetch("/api-v1/init", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ email: props.finalForm.email1 })
        });
        secret = await secret.json();
        console.log("secret: " + secret);
        setSecret(secret);
      } catch (e) {
        setPaymentError({
          bool: true,
          message: "Kan inte kontakta server, försök igen senare"
        });
      }
    }
    init();
  }, [props.finalForm.email1]);

  if (state.complete) {
    // const tagManagerArgs = {
    //   dataLayer: {
    //     userId: "001",
    //     userProject: "project",
    //     page: "home"
    //   },
    //   dataLayerName: "PageDataLayer"
    // };
    // TagManager.dataLayer(tagManagerArgs);
    return (
      <div className={styles.Complete}>
        <h1>Köp genomfört</h1>
        <p>Välkommen till Stocken SOS, vi ses den 18 Juli</p>
        <p>
          Bekräftelse email har skickats till {props.finalForm.email1} och{" "}
          {props.finalForm.email2}{" "}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.Checkout}>
      <p>Vill du genomföra köp?</p>
      <CardElement style={style} onReady={handleReady} hidePostalCode />
      {paymentError.bool && (
        <span className={styles.PaymentError}>{paymentError.message}</span>
      )}
      <button className={styles.Button} onClick={submit}>
        Betala
      </button>
    </div>
  );
}

export default injectStripe(CheckoutForm);
