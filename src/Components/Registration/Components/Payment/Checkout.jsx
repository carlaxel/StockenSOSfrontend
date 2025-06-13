import React from "react";
import CheckoutForm from "./CheckoutForm";

function Checkout(props) {
  return <CheckoutForm finalForm={props.finalForm} />;
}

export default Checkout;
