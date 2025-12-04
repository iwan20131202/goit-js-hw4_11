// 1
const timer1Display = document.getElementById("timer1");
const startTimer1 = document.getElementById("startTimer1");

startTimer1.addEventListener("click", () => {
  let totalSeconds = 3600;
  timer1Display.style.color = "#fff";

  const interval = setInterval(() => {
    totalSeconds -= 60;

    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = "00";

    timer1Display.textContent = `${h}:${m}:${s}`;

    if (totalSeconds === 1800) {
      timer1Display.style.color = "#ff6b6b";
      alert("Залишилось менше половини часу!");
    }

    if (totalSeconds <= 0) {
      clearInterval(interval);
      timer1Display.textContent = "00:00:00";
    }
  }, 60000);
});
// 2
const timer2Display = document.getElementById("timer2");
const startTimer2 = document.getElementById("startTimer2");

startTimer2.addEventListener("click", () => {
  let time = 30000;
  startTimer2.disabled = true;
  timer2Display.classList.remove("flash");

  const interval = setInterval(() => {
    time -= 1;

    timer2Display.textContent = (time / 1000).toFixed(3);

    if (time <= 10000) {
      timer2Display.classList.add("flash");
    }

    if (time <= 0) {
      clearInterval(interval);
      timer2Display.textContent = "0.000";
      startTimer2.disabled = false;
      timer2Display.classList.remove("flash");
    }
  }, 1);
});
