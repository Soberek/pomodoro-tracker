const { default: axios } = require("axios");

const h1El = document.getElementById("timer");
const list = document.getElementById("history");

let seconds = 0;
const array = [];

setInterval(() => {
  seconds++;
  timer.textContent = humanReadable(seconds);
}, 1000);

function onClickSaveTime() {
  array.push(seconds);
  console.log(array);
  const liEl = document.createElement("li");
  liEl.textContent = `${humanReadable(seconds)}`;
  list.appendChild(liEl);

  let totalTime = array.reduce((a, i) => a + i, 0);

  total.textContent = humanReadable(totalTime);

  seconds = 0;
}

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let second = seconds - (hours * 3600 + minutes * 60);

  let secondsFormat = second < 10 ? `:0${second}` : `:${second}`;
  let minutesFormat = minutes < 10 ? `:0${minutes}` : `:${minutes}`;
  let hoursFormat = hours < 10 ? `0${hours}` : `${hours}`;

  return `${hoursFormat}${minutesFormat}${secondsFormat}`;
}

axios.post("/edit", array).then((response) => {});
