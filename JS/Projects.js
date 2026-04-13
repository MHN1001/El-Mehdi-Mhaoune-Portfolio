const items = document.querySelectorAll(".projects .timeline-item");

if (items.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(
          "Observing:",
          entry.target,
          "isIntersecting:",
          entry.isIntersecting,
        ); // debug
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // stop watching after shown
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px 0px 0px",
    },
  );

  items.forEach((item) => observer.observe(item));
} else {
  // fallback — just show all items if observer fails
  document.querySelectorAll(".projects .timeline-item").forEach((item) => {
    item.classList.add("show");
  });
}

const BM_Btn = document.getElementById("BM_Btn");
BM_Btn.addEventListener("click", OpenBankManagementSourceCode);
const SPS_Btn = document.getElementById("SPS_Btn");
SPS_Btn.addEventListener("click", OpenStonePaperScissorGameSourceCode);
const TTT_Btn = document.getElementById("TTT_Btn");
TTT_Btn.addEventListener("click", OpenTicTacToeSourceCode);
const MQ_Btn = document.getElementById("MQ_Btn");
MQ_Btn.addEventListener("click", OpenMathQuizSourceCode);
const DVLD_Btn = document.getElementById("DVLD_Btn");
DVLD_Btn.addEventListener("click", OpenDVLDSourceCode);
const Aw_Btn = document.getElementById("Aw_Btn");
Aw_Btn.addEventListener("click", OpenAw_ourceCode);
const PSC_Btn = document.getElementById("PSC_Btn");
PSC_Btn.addEventListener("click", OpenMyPortfoliowebSiteSourceCode);

function OpenStonePaperScissorGameSourceCode() {
  window.open("https://github.com/MHN1001/stone-Paper-Scissor-Game", "_blank");
}

function OpenDVLDSourceCode() {
  window.open("https://github.com/MHN1001/DVLD-Project", "_blank");
}

function OpenAw_ourceCode() {
  window.open("https://github.com/MHN1001/Arena-Whistle-project", "_blank");
}

function OpenMathQuizSourceCode() {
  window.open("https://github.com/MHN1001/Math-Quiz-Game", "_blank");
}

function OpenTicTacToeSourceCode() {
  window.open("https://github.com/MHN1001/Tic-Tac-Toe-Game", "_blank");
}

function OpenBankManagementSourceCode() {
  window.open("https://github.com/MHN1001/Bank-Management", "_blank");
}

function OpenMyPortfoliowebSiteSourceCode() {
  window.open("https://github.com/MHN1001/Portfolio", "_blank");
}
