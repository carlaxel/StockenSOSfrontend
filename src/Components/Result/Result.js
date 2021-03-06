import React, { useState } from "react";
import styles from "./Result.module.css";

export default function Result(props) {
  const [race, setRace] = useState("lång");
  const [raceclass, setRaceclass] = useState("alla");

  let list = returnRunners(race, raceclass, props.runners);

  function handleChangeRace(e) {
    setRace(e.target.value);
  }

  function handleChangeClass(e) {
    setRaceclass(e.target.value);
  }

  return (
    <div className={styles.Main}>
      <div className={styles.Select}>
        <select value={race} onChange={e => handleChangeRace(e)} name="race">
          <option value="lång">Långa</option>
          <option value="mellan">Mellan</option>
        </select>
        <select
          value={raceclass}
          onChange={e => handleChangeClass(e)}
          name="raceclass"
        >
          <option value="alla">Samtliga</option>
          <option value="herr">Herr</option>
          <option value="dam">Dam</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>
      <div>{list}</div>
    </div>
  );
}

function HHMMSStoSec(input) {
  let [hour, min, sec] = input.split(":");
  hour = parseInt(hour);
  min = parseInt(min);
  sec = parseInt(sec);
  let output = 0;
  while (hour > 0) {
    output = output + 3600;
    hour--;
  }
  while (min > 0) {
    output = output + 60;
    min--;
  }
  while (sec > 0) {
    output = output + 1;
    sec--;
  }

  return output;
}

function returnRunners(race, raceclass, runners) {
  let runnersCopy = [...runners];
  runnersCopy = runnersCopy.filter(runner => {
    return (
      runner.officialtime &&
      runner.race === race &&
      (runner.runnersclass === raceclass || raceclass === "alla")
    );
  });

  runnersCopy.sort((b, a) => {
    return HHMMSStoSec(b.officialtime) - HHMMSStoSec(a.officialtime);
  });

  runnersCopy = runnersCopy.map((runner, i) => {
    return (
      <div className={styles.Item}>
        <span className={styles.id}>{i + 1}: </span>
        <span>StartNr: {runner._id} </span>
        <span>{runner.runner1} </span>
        <span>{runner.runner2} </span>
        <span>{runner.officialtime}</span>
      </div>
    );
  });
  return runnersCopy;
}
