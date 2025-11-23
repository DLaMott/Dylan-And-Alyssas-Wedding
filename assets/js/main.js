document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown");
  const target = new Date("May 1, 2025 00:00:00").getTime();
  setInterval(() => {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) { countdownEl.innerText = "It's your day!"; return; }
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff/(1000*60*60))%24);
    const m = Math.floor((diff/(1000*60))%60);
    const s = Math.floor((diff/1000)%60);
    countdownEl.innerText = `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
});