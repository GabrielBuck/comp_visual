(() => {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let t = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    const cols = 18;
    const rows = 12;
    const gapX = w / cols;
    const gapY = h / rows;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = x * gapX + gapX / 2;
        const py = y * gapY + gapY / 2;
        const wave = Math.sin(x * 0.55 + t) + Math.cos(y * 0.65 - t * 0.8);
        const size = 2.2 + (wave + 2) * 1.25;
        const hue = 210 + x * 4 + y * 3 + Math.sin(t) * 20;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 88%, 68%, ${0.30 + (wave + 2) * 0.10})`;
        ctx.fill();
      }
    }

    ctx.beginPath();
    for (let x = 0; x <= w; x += 4) {
      const y = h * 0.56 + Math.sin(x * 0.018 + t * 1.7) * 30 + Math.sin(x * 0.006 - t) * 22;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(88,214,255,.7)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    t += 0.012;
    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  draw();
})();
