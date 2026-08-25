(() => {
  const range = document.querySelector("#distance-range");
  const output = document.querySelector("#distance-output");
  const face = document.querySelector(".demo-face");
  const line = document.querySelector(".demo-distance-line");

  if (!range || !output || !face || !line) return;

  const update = () => {
    const distance = Number(range.value);
    const proximity = 1 - (distance - 30) / 90;
    const noseScale = 1 + proximity * 0.72;
    const faceScale = 1 + proximity * 0.08;
    const label = `${distance} cm`;

    face.style.setProperty("--nose-scale", noseScale.toFixed(2));
    face.style.transform = `scale(${faceScale.toFixed(2)})`;
    line.dataset.distance = label;
    output.value = label;
    output.textContent = label;
  };

  range.addEventListener("input", update);
  update();
})();
