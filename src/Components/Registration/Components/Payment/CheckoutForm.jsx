import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "./CheckoutForm.module.css";

function CheckoutForm({ finalForm }) {
  let style = {
    base: {
      color: "#1e293b",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#94a3b8",
      },
      padding: "0.5rem",
    },
    invalid: {
      color: "#dc2626",
      iconColor: "#dc2626",
    },
  };

  const stripe = useStripe();
  const elements = useElements();
  const [state, setState] = useState({ complete: false, loading: false });
  const [secret, setSecret] = useState("");
  const [paymentError, setPaymentError] = useState({
    bool: false,
    message: "",
  });

  async function submit(e) {
    if (!stripe || !elements) {
      return;
    }

    setState(prev => ({ ...prev, loading: true }));

    const card = elements.getElement(CardElement);
    const { paymentIntent, error } = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: card,
      }
    });

    if (error) {
      console.log('Payment Error Details:', {
        type: error.type,
        code: error.code,
        message: error.message,
        declineCode: error.decline_code,
        paymentIntent: error.payment_intent
      });
      setPaymentError({ bool: true, message: error.message });
      setState(prev => ({ ...prev, loading: false }));
      return;
    } else if (paymentError.bool === true) {
      setPaymentError({ bool: false, message: "" });
    }

    fetch("/api-v1/done", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        INTENT: paymentIntent,
        reg_data: finalForm,
      }),
    });

    setState({ complete: true, loading: false });
  }

  useEffect(() => {
    async function init() {
      try {
        let paytshirts = 0;
        if (finalForm.shirt1 && finalForm.shirt2) {
          paytshirts = 2;
        } else if (finalForm.shirt1 || finalForm.shirt2) {
          paytshirts = 1;
        }
        let today = new Date();
        let lastTshirtFree = new Date("Sat Sept 30 2023 23:59:59 GMT+0200");
       
        if(today < lastTshirtFree){
          paytshirts = 0;
        }

        let secret = await fetch("/api-v1/init", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            email: finalForm.email1, 
            paytshirts, 
            race: finalForm.race 
          }),
        });

        if (secret.status !== 200) {
          const internalSecret = await secret.json();
          setPaymentError({
            bool: true,
            message: internalSecret,
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
  }, [finalForm.email1]);

  return (
    <div className={styles.Checkout}>
      {state.loading && (
        <div className={styles.LoadingOverlay}>
          <div className={styles.LoadingSpinner} />
        </div>
      )}
      {state.complete ? (
        <div className={styles.Complete}>
          <h1>Köp genomfört</h1>
        <p>Grattis du har nu köpt plats på Stocken SOS 2025!</p>
        <p>
          Ett mail med bekräftelse har skickats till {finalForm.email1}{" "}
          och {finalForm.email2}. I mailet finns en länk som du kan
          använda om du behöver ändra dina uppgifter innan loppet. Glöm nu inte att förbereda dig
          ordentligt. Lycka till!{" "}
        </p>
        </div>
      ) : (
        <>
          {paymentError.bool && (
            <div className={styles.PaymentError}>
              {paymentError.message}
            </div>
          )}
          
            <CardElement options={{ style }} />
          
          <button
            className={styles.Button}
            onClick={submit}
            disabled={!stripe || state.loading}
          >
            {state.loading ? "Bearbetar..." : "Betala"}
          </button>
        </>
      )}
    </div>
  );
}

export default CheckoutForm;
