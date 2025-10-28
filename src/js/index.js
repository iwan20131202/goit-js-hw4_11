const timeCatch = (ms) => {
  const mils = Math.floor(ms % 1000);
  const sec = Math.floor((ms / 1000) % 60);
  const min = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24);

  return `
  ${String(hours).padStart(2, 0)}:${String(min).padStart(2, 0)}:${String(
    sec
  ).padStart(2, 0)}.${String(mils).padStart(3, 0)}`;
};

// stopwatch

const stopwatchDisplay = document.querySelector(".stopwatch__time");
const stopwatchActions = document.querySelector(".stopwatch__actions");

let TIME = 0;
const TIME_STEP = 50;

stopwatchDisplay.textContent = timeCatch(TIME);

let intervalId;
let countTime = TIME;

const updateTime = () => {
  countTime += TIME_STEP;
  stopwatchDisplay.textContent = timeCatch(countTime);
};

const handleStopWatchControl = (e) => {
  const target = e.target;

  if (target.tagName !== "BUTTON") return;

  const action = target.dataset.action;

  //   початок секундоміра
  if (action === "start") {
    if (intervalId) return;
    intervalId = setInterval(updateTime, TIME_STEP);
  }

  if (action === "pause") {
    clearInterval(intervalId);
    intervalId = null;
  }

  if (action === "clear") {
    clearInterval(intervalId);
    countTime = 0;
    stopwatchDisplay.textContent = timeCatch(0);
    intervalId = null;
  }
};
stopwatchActions.addEventListener("click", handleStopWatchControl);