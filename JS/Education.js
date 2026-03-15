// REMOVE this if you have it — it fires on the whole tile
// document.querySelectorAll(".tile").forEach(tile => {
//   tile.addEventListener("click", ...

// REPLACE with — only fire on the img inside the tile
document.querySelectorAll(".tile .thumb").forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // ← stop click bubbling to tile/flip

    const tile = img.closest(".tile");
    const chip = tile.querySelector(".chip")?.textContent ?? "";
    const meta = tile.querySelector(".meta")?.textContent ?? "";

    openLightbox(img.src, img.alt, chip, meta);
  });
});
