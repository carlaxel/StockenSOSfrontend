import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { initGA, pageviewGA } from "./Components/GA";

import styles from "./App.module.css";
import Home from "./Components/Home/Home";
import Registration from "./Components/Registration/Registration";
import Result2019 from "./Components/Result/Result2019";
import Result2021 from "./Components/Result/Result2021";
import Andring from "./Components/Registration/Components/Andring";

//UA-156655216-1
import MenuStyles from "./App.css.js";

function App(props) {
  useEffect(() => {
    initGA();
    pageviewGA();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [viewResult, setViewResult] = useState(false);

  useEffect(() => {
    let today = new Date();
    let raceFinished = new Date("Sat Jul 17 2021 15:00:00 GMT+0100");
    if (today > raceFinished) {
      setViewResult(true);
    }
  }, []);

  function handleClose() {
    setMenuOpen(false);
    console.log(menuOpen);
  }

  return (
    <React.Fragment>
      <Menu styles={MenuStyles}>
        <NavLink to="/" className={styles.HeaderButton}>
          Hem
        </NavLink>
        {viewResult && (
          <NavLink to="/result2021" className={styles.HeaderButton}>
            Resultat 2021
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
            <Result2021 />
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
