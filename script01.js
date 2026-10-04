const els = {
  date: document.getElementById("date"),
  time: document.getElementById("time"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  period: document.getElementById("period"),
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "short", year: "numeric", month: "short", day: "numeric",
});
const pad = (n) => String(n).padStart(2, "0");

function render() {
  const now = new Date();
  const h = now.getHours();

  els.hours.textContent = pad(h % 12 || 12);
  els.minutes.textContent = pad(now.getMinutes());
  els.seconds.textContent = pad(now.getSeconds());
  els.period.textContent = h >= 12 ? "PM" : "AM";
  els.date.textContent = dateFormat.format(now);
  els.time.dateTime = `${pad(h)}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  // Re-sync to the next whole second so the display never drifts or skips.
  setTimeout(render, 1000 - now.getMilliseconds());
}

render();
