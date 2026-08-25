(() => {
  const r = document.getElementById("r-range");
  const g = document.getElementById("g-range");
  const b = document.getElementById("b-range");
  const preview = document.getElementById("color-preview");

  if (!r || !g || !b || !preview) return;

  const toHex = (n) => Number(n).toString(16).padStart(2, "0");

  const update = () => {
    const rv = Number(r.value);
    const gv = Number(g.value);
    const bv = Number(b.value);
    const rgb = `rgb(${rv}, ${gv}, ${bv})`;
    const hex = `#${toHex(rv)}${toHex(gv)}${toHex(bv)}`;

    preview.style.background = rgb;
    document.getElementById("rgb-label").textContent = rgb;
    document.getElementById("hex-label").textContent = hex;
    document.getElementById("r-value").textContent = rv;
    document.getElementById("g-value").textContent = gv;
    document.getElementById("b-value").textContent = bv;

    const luminance = 0.2126 * rv + 0.7152 * gv + 0.0722 * bv;
    preview.style.color = luminance > 150 ? "#070a12" : "#ffffff";
    preview.style.textShadow = luminance > 150 ? "none" : "0 1px 4px rgba(0,0,0,.5)";
  };

  [r, g, b].forEach((input) => input.addEventListener("input", update));
  update();
})();
