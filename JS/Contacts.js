// ── Lightbox ─────────────────────────────────────────────────

const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxChip = document.getElementById("lightboxChip");
const lightboxTitle = document.getElementById("lightboxTitle");

/**
 * Opens the lightbox and populates it with the clicked tile's data.
 * @param {string} src   - Image source path
 * @param {string} alt   - Image alt text
 * @param {string} chip  - Chip label text (e.g. "Feature")
 * @param {string} title - Caption title text (e.g. "A1 · Coastal Path")
 */
function openLightbox(src, alt, chip, title) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxChip.textContent = chip;
  lightboxTitle.textContent = title;
  lightboxOverlay.classList.add("open");
}

/** Closes the lightbox and clears the image src */
function closeLightbox() {
  lightboxOverlay.classList.remove("open");
  setTimeout(() => {
    lightboxImg.src = "";
  }, 300); // clear after fade
}

// Close on ✕ button
lightboxClose.addEventListener("click", closeLightbox);

// Close on backdrop click
lightboxOverlay.addEventListener("click", (e) => {
  if (e.target === lightboxOverlay) closeLightbox();
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// Attach click listener to every tile
document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("click", (e) => {
    e.preventDefault(); // stop the <a href="#"> from jumping

    const img = tile.querySelector(".thumb");
    const chip = tile.querySelector(".chip")?.textContent ?? "";
    const code = tile.querySelector(".code")?.textContent ?? "";
    const meta = tile.querySelector(".meta")?.textContent ?? "";

    // Build a clean title from code + label (e.g. "A1 · Coastal Path")
    const title = meta.replace(chip, "").trim();

    openLightbox(img.src, img.alt, chip, title);
  });
});
