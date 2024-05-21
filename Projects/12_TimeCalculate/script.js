const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const container = document.getElementsByClassName('time_container');
const giveaway = document.querySelector('.giveaway');
const value = document.querySelectorAll('.value');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2024, 4, 23, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let date = futureDate.getDate();

let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minute}am`;

// future time in ms
const futureTime = futureDate.getTime();

function remainingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;

  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1d = 24hr

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function formate(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  value.forEach((item, index) => {
    item.innerHTML = formate(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    container.innerHTML = `<h4>Sorry, this giveaway hase expired</h4>`;
  }
}

let countdown = setInterval(remainingTime, 1000);

remainingTime();
