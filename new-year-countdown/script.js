const days = document.getElementById("days"),
  hours = document.getElementById("hours"),
  minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds"),
  countdown = document.getElementById("countdown"),
  year = document.getElementById("year"),
  loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountDown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? `0${h}` : h;
  minutes.innerHTML = m < 10 ? `0${m}` : m;
  seconds.innerHTML = s < 10 ? `0${s}` : s;
}

// updateCountDown();
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);
setInterval(updateCountDown, 1000);
