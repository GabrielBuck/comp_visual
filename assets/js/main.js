(() => {
  const canvas = document.getElementById('hero-canvas');
  const glow = document.getElementById('cursor-glow');
  const frame = document.getElementById('frame-count');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let t = 0;
  let mx = .5;
  let my = .5;
  let frameCount = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  window.addEventListener('pointermove', (e) => {
    mx = e.clientX / innerWidth;
    my = e.clientY / innerHeight;
    if (glow) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }
  });

  const draw = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, w, h);

    const cols = 28;
    const rows = 20;
    const gx = w / cols;
    const gy = h / rows;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const nx = x / cols;
        const ny = y / rows;
        const dx = nx - mx;
        const dy = ny - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const wave = Math.sin(x * .72 + t * 2.2) + Math.cos(y * .61 - t * 1.5) + Math.sin(dist * 24 - t * 3.3);
        const size = Math.max(1.2, 2.4 + wave * 1.4);
        const px = x * gx + gx / 2 + Math.sin(y * .45 + t) * 3;
        const py = y * gy + gy / 2 + Math.cos(x * .33 - t) * 3;

        const near = Math.max(0, 1 - dist * 2.8);
        const r = Math.floor(120 + 110 * near);
        const g = Math.floor(200 + 55 * near);
        const b = Math.floor(90 + 160 * (1 - near));

        ctx.fillStyle = `rgba(${r},${g},${b},${0.22 + near * .58})`;
        ctx.fillRect(px - size / 2, py - size / 2, size, size);
      }
    }

    ctx.strokeStyle = 'rgba(217,255,87,.72)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < w; x += 3) {
      const y = h * .55 + Math.sin(x * .015 + t * 2.2) * 23 + Math.sin(x * .004 - t) * 32;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    if (Math.random() < .04) {
      const y = Math.random() * h;
      const height = 2 + Math.random() * 16;
      ctx.fillStyle = Math.random() > .5 ? 'rgba(76,246,255,.18)' : 'rgba(255,92,168,.14)';
      ctx.fillRect(Math.random() * 30, y, w - Math.random() * 50, height);
    }

    frameCount++;
    if (frame) frame.textContent = String(frameCount).padStart(6, '0').slice(-6);
    t += .012;
    requestAnimationFrame(draw);
  };

  resize();
  addEventListener('resize', resize);
  draw();
})();