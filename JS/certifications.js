// ── Section titles animation ──
const observerTitles = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 },
);
document
  .querySelectorAll(".section-title")
  .forEach((el) => observerTitles.observe(el));

// ── Lightbox ──
const overlay = document.getElementById("lightboxOverlay");
const closeBtn = document.getElementById("lightboxClose");

document.querySelectorAll(".tile a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const tile = link.closest(".tile");
    const img = tile.querySelector(".thumb");
    const chip = tile.querySelector(".chip").textContent;
    const title = tile
      .querySelector(".meta")
      .textContent.replace(chip, "")
      .trim();
    const descDiv = tile.querySelector(".tile-description");
    const descTitle = descDiv?.querySelector("h3")?.textContent || "";
    const descText = descDiv?.querySelector("p")?.textContent || "";

    document.getElementById("lightboxImg").src = img.src;
    document.getElementById("lightboxImg").alt = img.alt;
    document.getElementById("lightboxChip").textContent = chip;
    document.getElementById("lightboxTitle").textContent = title;
    document.getElementById("lightboxDescTitle").textContent = descTitle;
    document.getElementById("lightboxDescText").textContent = descText;

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

// ── Close lightbox ──
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
});
