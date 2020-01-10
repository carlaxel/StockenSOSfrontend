import React, { useEffect } from "react";
import styles from "./CheckoutForm.module.css";

function Knatte(props) {
  useEffect(() => {
    async function submit() {
      fetch("/api-v1/doneKnatte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ reg_data: props.finalForm })
      });
    }

    console.log(props);
    submit();
  }, [props]);

  return (
    <div className={styles.Complete}>
      <h1>Anmälan genomförd</h1>
      <p>Välkommen till Stocken SOS, vi ses den 23 Juli</p>
      <p>Uppdatera text</p>
    </div>
  );
}

export default Knatte;
