// const startBtn = document.querySelector("#start-button");
// const stopBtn = document.querySelector("#stop-button");
// const resetBtn = document.querySelector("#reset-button");
// const timer = document.querySelector("#timer");

// startBtn.addEventListener("click", startTimer);
// stopBtn.addEventListener("click", stopTimer);
// resetBtn.addEventListener("click", resetTimer);

// let timerId;
// let lastTimerStartTime = 0;
// let lastTimePast = 0;

// function startTimer() {
//   stopBtn.disabled = false;
//   this.disabled = true;
//   resetBtn.disabled = true;

//   lastTimerStartTime = Date.now();

//   timerId = requestAnimationFrame(updateTimer);
// }

// function stopTimer() {
//   this.disabled = true;
//   startBtn.disabled = false;
//   resetBtn.disabled = false;

//   cancelAnimationFrame(timerId);
//   lastTimePast += Date.now() - lastTimerStartTime;
// }

// function resetTimer() {
//   this.disabled = true;
//   timer.textContent = "00:00:000";
//   lastTimerStartTime = 0;
//   lastTimePast = 0;
// }

// function updateTimer() {
//   const millisElapsed = Date.now() - lastTimerStartTime + lastTimePast;
//   const secondsElapsed = millisElapsed / 1000;
//   const minutesElapsed = secondsElapsed / 60;

//   const millisText = formatNumber(millisElapsed % 1000, 3);
//   const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
//   const minutesText = formatNumber(Math.floor(minutesElapsed), 2);

//   timer.textContent = `${minutesText}:${secondsText}:${millisText}`;
//   timerId = requestAnimationFrame(updateTimer);
// }

// function formatNumber(number, len) {
//   const stringNumber = String(number);
//   return stringNumber.padStart(len, "0");
// }

// *****************
// SOLUTION 2
// *****************
const startBtn = document.querySelector("#start-button");
const stopBtn = document.querySelector("#stop-button");
const resetBtn = document.querySelector("#reset-button");
const timer = document.querySelector("#timer");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

let timerId;
let lastTimerStartTime = 0;
let lastTimePast = 0;
const Interval_Ms = 1000 / 60;

function startTimer() {
  stopBtn.disabled = false;
  this.disabled = true;
  resetBtn.disabled = true;

  lastTimerStartTime = Date.now();

  timerId = setInterval(updateTimer, Interval_Ms);
}

function stopTimer() {
  this.disabled = true;
  startBtn.disabled = false;
  resetBtn.disabled = false;

  clearInterval(timerId);
  lastTimePast += Date.now() - lastTimerStartTime;
}

function resetTimer() {
  this.disabled = true;
  timer.textContent = "00:00:000";
  lastTimerStartTime = 0;
  lastTimePast = 0;
}

function updateTimer() {
  const millisElapsed = Date.now() - lastTimerStartTime + lastTimePast;
  const secondsElapsed = millisElapsed / 1000;
  const minutesElapsed = secondsElapsed / 60;

  const millisText = formatNumber(millisElapsed % 1000, 3);
  const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
  const minutesText = formatNumber(Math.floor(minutesElapsed), 2);

  timer.textContent = `${minutesText}:${secondsText}:${millisText}`;
}

function formatNumber(number, len) {
  const stringNumber = String(number);
  return stringNumber.padStart(len, "0");
}
