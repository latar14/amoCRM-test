import React, { useEffect, useState } from "react";
import Buttons from "../Buttons/Buttons";
import { Typography } from "@mui/material";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { display } from "@mui/system";
import Header from "../Header/Header";

const Timer = () => {
  const [input, setInput] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(false);
  const [inputDisable, setInputDisable] = useState(false);
  const [pauseDisable, setPauseDisable] = useState(true);
  const [continueDisable, setContinueDisable] = useState(true);
  const handleChange = (e) => {
    setInput(e.target.value);
    setMinutes(e.target.value);
  };
  const handleChangeHours = (e) => {
    setInput(e.target.value);
    setHours(e.target.value);
  };
  const start = () => {
    setFlag(true);
    setInputDisable(true);
    setPauseDisable(false);
  };
  const reset = () => {
    setFlag(false);
    setInputDisable(false);
    setSeconds(0);
    setMinutes(0);
    setInput(input);
    setPauseDisable(true);
    setContinueDisable(true);
  };

  const pause = () => {
    setFlag(false);
    setPauseDisable(true);
    setContinueDisable(false);
  };

  const continueB = () => {
    setFlag(true);
    setPauseDisable(false);
    setContinueDisable(true);
  };

  useEffect(() => {
    if (flag) {
      const interval = setInterval(() => {
        if (parseInt(minutes)  == 0 && parseInt(hours) !== 0) {
          setMinutes((minutes) => minutes + 59)
          setHours((hours) => hours - 1)
        }
        else if (parseInt(seconds) == 0 && parseInt(minutes) !== 0) {
          setSeconds((seconds) => seconds + 59);
          setMinutes((minutes) => minutes - 1);
        } else if (parseInt(seconds) == 0 && parseInt(minutes) == 0) {
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 200);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, minutes, flag]);

  return (
    <>
    <Header/>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "120px",
          width: "350px",
          margin: "auto",
        }}
      >
        <TextField
        
          label="Set hours to count"
          id="outlined-basic"
          type={"number"}
          InputProps={{
            inputProps: {
              max: 24,
              min: 1,
            },
          }}
          onChange={handleChangeHours}
          style={{ width: "400px", marginTop: "40px" }}
          size="normal"
        />
        <TextField
        
          label="Set minutes to count"
          id="outlined-basic"
          type={"number"}
          InputProps={{
            inputProps: {
              max: 60,
              min: 1,
            },
          }}
          onChange={handleChange}
          style={{ width: "400px", marginTop: "40px" }}
          size="normal"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Typography variant="h3" component="h2">
          {parseInt(hours) < 10 ? "0" + hours : hours} :{" "}
          {parseInt(minutes) < 10 ? "0" + minutes : minutes} :{" "}
          {parseInt(seconds) < 10 ? "0" + seconds : seconds}
        </Typography>
      </div>
      <Buttons
        start={start}
        reset={reset}
        pause={pause}
        continueB={continueB}
        startDisable={inputDisable}
        pauseDisable={pauseDisable}
        continueDisable={continueDisable}
      />
    </>
  );
};

export default Timer;
