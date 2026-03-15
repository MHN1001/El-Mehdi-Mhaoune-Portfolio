// ══════════════════════════════════════
//  TOP SKILLS — Flip Only
// ══════════════════════════════════════

/**
 * Toggles the flip state of a tile.
 * @param {string} tileId - The id of the tile to flip
 */
function flipTile(tileId) {
  const tile = document.getElementById(tileId);
  if (!tile) return;
  const flipEl = tile.querySelector(".flip");
  flipEl.classList.toggle("is-flipped");
}

// Attach to all Flip buttons
document.querySelectorAll(".flip-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const tileId = btn.getAttribute("data-tile");
    flipTile(tileId);
  });
});

// Attach to all Back buttons
document.querySelectorAll(".actions .btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const tileId = btn.getAttribute("data-tile");
    flipTile(tileId);
  });
});
