const character = document.getElementById("character");
const paper = document.getElementById("paper");
const page = document.getElementById("page");

window.addEventListener("load", () => {
  // Start character fall automatically
  setTimeout(() => {
    character.classList.add("reveal-character", "power");
  }, 300);

  // After character finishes sliding, show paper and background
  setTimeout(() => {
    // Show background image
    page.classList.add("bg-visible");

    // Reveal paper in center
    paper.classList.add("show-paper");
  }, 3800); // match with transition duration of character
});
