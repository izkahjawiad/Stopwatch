var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var start = document.getElementById("start");
var stopWatch;

const startStopWatch = () => {
  msec++;
  msecHeading.innerHTML = msec;

  if (msec >= 100) {
    sec++;
    secHeading.innerHTML = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minHeading.innerHTML = min;
    sec = 0;
  }
};

function Start() {
  stopWatch = setInterval(startStopWatch, 10);
  start.disabled = true;
}
function Stop() {
  clearInterval(stopWatch);
  start.disabled = false;
}
function Reset() {
  minHeading.innerHTML = 0;
  secHeading.innerHTML = 0;
  msecHeading.innerHTML = 0;
  clearInterval(stopWatch);
}