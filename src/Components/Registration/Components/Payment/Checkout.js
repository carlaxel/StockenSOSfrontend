import React from "react";
import { Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

function Checkout(props) {
  return (
    <Elements>
      <CheckoutForm finalForm={props.finalForm} />
    </Elements>
  );
}

export default Checkout;
