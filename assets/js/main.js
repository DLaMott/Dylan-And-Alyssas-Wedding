document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("countdown");
  if (!el) return;

  const target = new Date("May 1, 2025 00:00:00").getTime();

  setInterval(() => {
    const diff = target - Date.now();
    if (diff <= 0) { el.innerText = "It's the day!"; return; }

    const d = Math.floor(diff/86400000);
    const h = Math.floor((diff%86400000)/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);

    el.innerText = `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
});
