// first we discussed setTimeOut;
function delayedFunction() {
  console.log("This function is delayed by 2000 milliseconds (2 Seconds).");
}

setTimeout(delayedFunction, 2000);

// now discussed setInterval;
function repeadtedFunction() {
  console.log(
    "This function is repeadted by every 1000 milliseconds (1 Seconds).",
  );
}

setInterval(repeadtedFunction, 1000);

// now try the clearTimeOut(timeOutUid);
function delayedFunction() {
  console.log("This function is delayed by 2000 milliseconds (2 Seconds).");
}
const mytime = setTimeout(delayedFunction, 2000);
clearTimeout(mytime);

//now try clearInterval;
function repeadtedFunction() {
  console.log(
    "This function is repeadted by every 1000 milliseconds (1 Seconds).",
  );
}
repeadtedFunction();
const intervalId = setInterval(repeadtedFunction, 1000);
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
