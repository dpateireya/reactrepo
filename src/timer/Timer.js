import "./Timer.css";
import Heading from "../adsbox/heading/Heading";
import { useState } from "react";
const inittime = "00:00:00 AM";
let IsTimeron = true;
function Timer() {
  const [showtime, setShowtime] = useState(inittime);
  const [counttime, setCounttime] = useState(0);

  function startTimesub() {
    if (IsTimeron) {
      window.mytimer = setInterval(() => {
        setCounttime((vartime) => vartime + 1);
        IsTimeron = false;
      }, 1000);
    }
  }

  function stopTimesub() {
    clearInterval(window.mytimer);
    IsTimeron = true;
  }
  function resetTimesub() {
    stopTimesub();
    setCounttime(0);
  }

  function showTimesub() {
    let dt = new Date().toLocaleTimeString();
    setShowtime(dt.toString());
  }

  return (
    <>
      <div className="timer_form_style">
        <div>
          <Heading head="Timer Exercise" />
        </div>
        <div className="timer_form_style">
          <div>
            <Heading head="Click and Showtime" />
          </div>
          <div className="timer_label_style">
            <label> {showtime}</label>
          </div>
          <div>
            <button onClick={showTimesub} className="timer_button_style">
              Show Time
            </button>
          </div>
        </div>
        <div className="timer_form_style">
          <div>
            <Heading head="Start/Stop and reset time" />
          </div>
          <div className="timer_label_style">
            <label>
              {(counttime / 60).toFixed()}:{counttime % 60}
            </label>
          </div>
          <div>
            <button onClick={startTimesub} className="timer_button_style">
              Start
            </button>
            <button onClick={stopTimesub} className="timer_button_style">
              Stop
            </button>
            <button onClick={resetTimesub} className="timer_button_style">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
