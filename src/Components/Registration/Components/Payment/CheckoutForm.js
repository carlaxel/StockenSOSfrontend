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
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  };

  const [state, setState] = useState({ complete: false });
  const [secret, setSecret] = useState("");
  const [element, setElement] = useState({});
  const [paymentError, setPaymentError] = useState({
    bool: false,
    message: "",
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
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        INTENT: paymentIntent,
        reg_data: props.finalForm,
      }),
    });

    setState({ complete: true });
  }
  function handleReady(element) {
    setElement(element);
  }

  useEffect(() => {
    async function init() {
      try {
        let secret = await fetch("/api-v1/init", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ email: props.finalForm.email1 }),
        });
        if (secret.status !== 200) {
          setPaymentError({
            bool: true,
            message: "Fel i email format",
          });
          return;
        }
        secret = await secret.json();
        setSecret(secret);
      } catch (e) {
        setPaymentError({
          bool: true,
          message: "Kan inte kontakta server, försök igen senare",
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
        <p>Grattis du har nu köpt plats på Stocken SOS 2021!</p>
        <p>
          Ett mail med bekräftelse har skickats till {props.finalForm.email1}{" "}
          och {props.finalForm.email2}. I mailet finns en länk som du kan
          använda om du behöver ändra dina uppgifter innan loppet. Någon vecka
          innan loppet kommer vi maila dig en banguide med detaljerad
          information om bansträckningen. Glöm nu inte att förbereda dig
          ordentligt. Lycka till!{" "}
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
