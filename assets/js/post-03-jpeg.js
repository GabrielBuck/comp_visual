(() => {
  const canvas = document.getElementById('jpeg-canvas');
  const range = document.getElementById('jpeg-generation');
  const output = document.getElementById('jpeg-generation-output');
  const status = document.getElementById('jpeg-status');
  if (!canvas || !range || !output || !status) return;

  const ctx = canvas.getContext('2d');
  const width = 720;
  const height = 420;
  canvas.width = width;
  canvas.height = height;
  const generations = [0, 1, 5, 10, 20, 50];
  const snapshots = new Map();

  function drawSource() {
    const sky = ctx.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, '#6f8fd7');
    sky.addColorStop(.62, '#d9c6a0');
    sky.addColorStop(1, '#658061');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#ffd56b';
    ctx.beginPath();
    ctx.arc(575, 95, 52, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#31543b';
    ctx.fillRect(0, 285, width, 135);
    ctx.fillStyle = '#d8d2c2';
    ctx.fillRect(85, 195, 250, 150);
    ctx.fillStyle = '#a85e4c';
    ctx.beginPath();
    ctx.moveTo(65, 205);
    ctx.lineTo(210, 105);
    ctx.lineTo(360, 205);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#3e536e';
    ctx.fillRect(132, 235, 58, 62);
    ctx.fillRect(235, 235, 58, 62);

    ctx.strokeStyle = 'rgba(255,255,255,.9)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(425, 318);
    ctx.bezierCurveTo(470, 250, 535, 245, 620, 300);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255,255,255,.95)';
    ctx.font = '700 28px system-ui, sans-serif';
    ctx.fillText('JPEG LAB', 28, 48);
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText('bordas + gradientes + texto + detalhes', 30, 74);
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  async function buildSnapshots() {
    drawSource();
    snapshots.set(0, canvas.toDataURL('image/png'));
    let data = canvas.toDataURL('image/jpeg', .32);

    for (let i = 1; i <= 50; i += 1) {
      const img = await loadImage(data);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      data = canvas.toDataURL('image/jpeg', .32);
      if (generations.includes(i)) snapshots.set(i, data);
      status.textContent = `gerando cópia ${i}/50…`;
    }
    status.textContent = 'experimento pronto';
    range.disabled = false;
    showGeneration(0);
  }

  async function showGeneration(generation) {
    const data = snapshots.get(generation);
    if (!data) return;
    const img = await loadImage(data);
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
    output.value = generation === 0 ? 'original' : `${generation}× salvo`;
  }

  range.addEventListener('input', () => {
    const generation = generations[Number(range.value)];
    showGeneration(generation);
  });

  range.disabled = true;
  buildSnapshots().catch(() => {
    status.textContent = 'não foi possível rodar o experimento neste navegador';
    drawSource();
  });
})();