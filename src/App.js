import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import styles from "./App.module.css";
import Home from "./Components/Home/Home";
import Registration from "./Components/Registration/Registration";
import Result2019 from "./Components/Result/Result2019";
import Result2020 from "./Components/Result/Result2020";
import Andring from "./Components/Registration/Components/Andring";

import MenuStyles from "./App.css.js";

function App(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewResult, setViewResult] = useState(false);

  useEffect(() => {
    let today = new Date();
    let raceFinished = new Date("Sat Jul 23 2020 16:00:00 GMT+0100");
    if (today - raceFinished > 0) {
      setViewResult(true);
    }
  }, []);

  function handleChange() {
    console.log("change");
  }

  function handleClose() {
    console.log("test");
    setMenuOpen(false);
    console.log(menuOpen);
  }

  return (
    <React.Fragment>
      <Menu isOpen={menuOpen} onStateChange={handleChange} styles={MenuStyles}>
        <NavLink to="/" className={styles.HeaderButton}>
          Hem
        </NavLink>
        {viewResult && (
          <NavLink to="/result2020" className={styles.HeaderButton}>
            Resultat 2020
          </NavLink>
        )}
        <NavLink to="/result2019" className={styles.HeaderButton}>
          Resultat 2019
        </NavLink>
        <NavLink to="/registration" className={styles.HeaderButton}>
          Anmälan
        </NavLink>
      </Menu>
      <Switch>
        {viewResult && (
          <Route path="/result2020">
            <Result2020 />
          </Route>
        )}
        <Route onClick={handleClose} path="/result2019">
          <Result2019 />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/andring/:id">
          <Andring />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
