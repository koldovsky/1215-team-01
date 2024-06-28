const closeButton = document.querySelector(".map__close-button");
const addressBox = document.querySelector(".map__address-box");

closeButton.addEventListener("click", function () {
  addressBox.style.display = "none";
});

function getCurrentTime() {
  return new Date();
}

const workingHours = {
  TueFri: { open: 16, close: 22 },
  Sat: { open: 11, close: 21 },
  Sun: { open: 12, close: 19 }
};

function formatTime(time) {
  return time < 10 ? `0${time}` : `${time}`;
}

function updateWorkingHours() {
  const currentTime = getCurrentTime();
  const currentDay = currentTime.getDay();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  let nextOpenTime = null;
  let nextCloseTime = null;
  let isOpen = false;

  if (
    (currentDay >= 2 && currentDay <= 5 &&
      currentHour >= workingHours.TueFri.open && currentHour < workingHours.TueFri.close) ||
    (currentDay === 6 &&
      currentHour >= workingHours.Sat.open && currentHour < workingHours.Sat.close) ||
    (currentDay === 0 &&
      currentHour >= workingHours.Sun.open && currentHour < workingHours.Sun.close)
  ) {
    isOpen = true;
    nextCloseTime = new Date(currentTime);
    if (currentDay >= 2 && currentDay <= 5) {
      nextCloseTime.setHours(workingHours.TueFri.close);
    } else if (currentDay === 6) {
      nextCloseTime.setHours(workingHours.Sat.close);
    } else if (currentDay === 0) {
      nextCloseTime.setHours(workingHours.Sun.close);
    }
    nextCloseTime.setMinutes(0);
    nextCloseTime.setSeconds(0);
  } else {
    nextOpenTime = new Date(currentTime);
    if (currentDay === 0 && currentHour >= workingHours.Sun.close) {
      nextOpenTime.setDate(currentTime.getDate() + (2 - currentDay + 7) % 7);
      nextOpenTime.setHours(workingHours.TueFri.open);
    } else if (currentDay === 6 && currentHour >= workingHours.Sat.close) {
      nextOpenTime.setDate(currentTime.getDate() + 2);
      nextOpenTime.setHours(workingHours.TueFri.open);
    } else if (currentDay >= 1 && currentDay <= 5 && currentHour >= workingHours.TueFri.close) {
      nextOpenTime.setDate(currentTime.getDate() + 1);
      nextOpenTime.setHours(workingHours.TueFri.open);
    } else if (currentDay >= 2 && currentDay <= 5) {
      nextOpenTime.setHours(workingHours.TueFri.open);
    } else if (currentDay === 6) {
      nextOpenTime.setHours(workingHours.Sat.open);
    } else if (currentDay === 0) {
      nextOpenTime.setHours(workingHours.Sun.open);
    }
    nextOpenTime.setMinutes(0);
    nextOpenTime.setSeconds(0);
  }

  const infoElement = document.getElementById('working-hours__info');
  const countdownElement = document.getElementById('working-hours__countdown-info');

  if (isOpen) {
    const diffInMinutes = Math.ceil((nextCloseTime - currentTime) / 60000);
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;
    infoElement.textContent = `We are open now!`;
    countdownElement.textContent = `Closes in ${hours} hours and ${minutes} minutes.`;
  } else {
    const diffInMinutes = Math.ceil((nextOpenTime - currentTime) / 60000);
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;
    infoElement.textContent = `We are closed now.`;
    countdownElement.textContent = `Next opening in ${hours} hours and ${minutes} minutes.`;
  }
}

setInterval(updateWorkingHours, 60000);

updateWorkingHours();