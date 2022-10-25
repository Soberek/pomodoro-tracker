const h1El = document.getElementById("timer");
const list = document.getElementById("history");

let x;
let seconds = 0;
let startedFrom;
const array = [];

Counter();

function Counter() {
  let buttonStart = document.getElementById("startCounter");
  let buttonStop = document.getElementById("stopCounter");
  let buttonSave = document.getElementById("saveCounter");
  let buttonReset = document.getElementById("resetCounter");

  buttonStart.addEventListener("click", () => {
    console.log("start clicked");
    startCounter();
  });
  buttonStop.addEventListener("click", () => {
    console.log("stop clicked");
    stopCounter();
  });
  buttonSave.addEventListener("click", () => {
    console.log("save clicked");
    saveCounter();
  });
  buttonReset.addEventListener("click", () => {
    console.log("reset clicked");
    resetCounter();
  });
}

function startCounter() {
  const countDownHours = document.getElementById("countDownHours").value;
  const countDownMinutes = document.getElementById("countDownMinutes").value;
  const countDownSeconds = document.getElementById("countDownSeconds").value;

  let hours = +(countDownHours * 3600);
  let minutes = +(countDownMinutes * 60);
  let second = +countDownSeconds;
  seconds = 0;

  stopCounter();
  seconds = hours + minutes + second;
  startedFrom = seconds;

  console.log(`${hours} ${minutes} ${second}`);
  console.log(seconds);
  x = setInterval(() => {
    let distance = --seconds;
    console.log(distance);
    renderTime(distance);
    if (distance <= 0) {
      clearInterval(x);
      console.log("Ding dong");
    }
  }, 1000);
}

function stopCounter() {
  clearInterval(x);
}

function saveCounter() {
  let timePassed = startedFrom - seconds;
  const liEl = document.createElement("li");

  // let totalTime = array.reduce((a, i) => a + i, 0);

  // total.textContent = humanReadable(startedFrom - seconds);

  if (seconds > 0) {
    liEl.textContent = humanReadable(timePassed);
    list.appendChild(liEl);
    array.push(seconds);
  }
  seconds = 0;
  renderTime(seconds);
  stopCounter();
}

function resetCounter() {
  console.log("reset");
  seconds = 0;
  renderTime(seconds);
  stopCounter();
}

function renderTime(seconds) {
  timer.textContent = humanReadable(seconds);
}

// Time format
function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let second = seconds - (hours * 3600 + minutes * 60);

  let secondsFormat = second < 10 ? `:0${second}` : `:${second}`;
  let minutesFormat = minutes < 10 ? `:0${minutes}` : `:${minutes}`;
  let hoursFormat = hours < 10 ? `0${hours}` : `${hours}`;

  return `${hoursFormat}${minutesFormat}${secondsFormat}`;
}
