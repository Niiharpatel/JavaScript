const time = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  //   console.log("setInterval  date:", date.getSeconds());
  time.innerHTML = date.toLocaleTimeString();
}, 1000);
