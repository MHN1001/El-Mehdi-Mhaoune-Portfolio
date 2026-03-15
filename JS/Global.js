// ── Scroll To Top Button ─────────────────────────────────────

const scrollTopBtn = document.getElementById("scrollTopBtn");
const educationSec = document.getElementById("education");
const topSkillsSec = document.getElementById("TopSkills");

function handleScrollTopVisibility() {
  const educationTop = educationSec.getBoundingClientRect().top;
  const topSkillsBottom = topSkillsSec.getBoundingClientRect().bottom;

  // Show once TopSkills section is scrolled past
  const pastTopSkills = topSkillsBottom <= window.innerHeight;

  // Hide once we scroll back above education
  const aboveEducation = educationTop > window.innerHeight;

  if (pastTopSkills && !aboveEducation) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
}

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", handleScrollTopVisibility, { passive: true });

handleScrollTopVisibility();

//navigation bar
// ── Active nav link on scroll ─────────────────────────────────

const sectionIds = [
  "general",
  "TopSkills",
  "education",
  "certifications",
  "projects",
  "contacts",
];

const navLinks = document.querySelectorAll("nav ul a");

const observerOptions = {
  root: null,
  rootMargin: "-40% 0px -40% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

// Observe only the exact section IDs
sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

//section titles :
const observertitles = new IntersectionObserver(
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
  .forEach((el) => observertitles.observe(el));

(function () {
  const STORAGE_KEY = "theme"; // localStorage key
  const root = document.documentElement; // <html>
  const btn = document.getElementById("themeToggle"); // toggle button

  // Load saved preference and apply token set if present
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  // Apply + persist + sync accessible state/label
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    btn.setAttribute("aria-pressed", String(theme === "dark")); // reflect state
    btn.querySelector("span").textContent =
      theme === "dark" ? "Light Mode" : "Dark Mode"; // user-friendly label
  }

  // Initialize UI from current attribute or default to light
  applyTheme(root.getAttribute("data-theme") || "light");

  // Click handler flips theme
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
})();
