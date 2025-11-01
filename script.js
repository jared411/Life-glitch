// Life•Glitch Studio — Script
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".app").classList.add("show");
  }, 2500);
});

function generateIdea() {
  const ideas = [
    "A dream recorder that turns thoughts into art.",
    "An AI that learns your mood and writes music for it.",
    "A virtual partner that evolves with your personality.",
    "A glitch world where emotions become colors.",
    "A holographic journal that rewinds your day in light."
  ];
  const random = ideas[Math.floor(Math.random() * ideas.length)];
  document.getElementById("ideaOutput").innerText = random;
}
