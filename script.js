const orbit = document.getElementById("orbit");
const icons = document.querySelectorAll(".icon-wrap");

let isOpen = false;
let selectedIcon = null;

/* Center Image Toggle */
function toggleOrbit() {
  if (!isOpen) {
    orbit.classList.add("active", "rotating");
    isOpen = true;
    return;
  }

  orbit.classList.remove("active");
  orbit.classList.add("rotating");
  clearSelection();
  isOpen = false;
}

/* Icon Click Logic */
icons.forEach(icon => {
  icon.addEventListener("click", (e) => {
    e.stopPropagation();

    // First click → select & pause
    if (selectedIcon !== icon) {
      clearSelection();
      selectedIcon = icon;
      icon.classList.add("selected");
      orbit.classList.remove("rotating");
      return;
    }

    // Second click → navigate
    const link = icon.dataset.link;
    if (link) {
      window.location.href = link;
    }
  });
});

/* Reset Selection */
function clearSelection() {
  icons.forEach(icon => icon.classList.remove("selected"));
  selectedIcon = null;

  if (isOpen) {
    orbit.classList.add("rotating");
  }
}
const popup = document.getElementById("instructionPopup");
const icon = document.getElementById("instructionIcon");

// Auto open on first load
window.addEventListener("load", () => {
  popup.classList.add("active");
});

// Close popup → show icon
function closeInstructions() {
  popup.classList.remove("active");
  icon.classList.add("visible");
}

// Open popup again
function openInstructions() {
  popup.classList.add("active");
}
