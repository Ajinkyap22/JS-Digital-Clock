"use strict";

const showTime = function () {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  if (hour >= 12) {
    if (hour !== 12) hour -= 12;
    session = "PM";
  }

  if (hour === 0) {
    hour = 12;
  }

  const time = `${String(hour).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")} ${session}`;

  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
};

showTime();
