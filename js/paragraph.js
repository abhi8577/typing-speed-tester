const paragraphEl = document.getElementById("paragraph");
const diffSel = document.getElementById("difficulty");

let originalText = "";

const data = {
    easy: ["JavaScript is fun.", "Practice daily."],
    medium: ["Typing speed improves with practice and patience."],
    hard: ["Consistency and deliberate practice are the keys to mastering typing efficiency."]
};

function loadParagraph() {
    const arr = data[diffSel.value];
    originalText = arr[Math.floor(Math.random() * arr.length)];
    paragraphEl.innerHTML = originalText
        .split("")
        .map(c => `<span>${c}</span>`)
        .join("");
}

// Page load pe
loadParagraph();

// Difficulty change pe
diffSel.addEventListener("change", loadParagraph);
