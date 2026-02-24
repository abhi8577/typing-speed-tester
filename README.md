# ⌨ Typing Speed Tester

A modular web application built using **HTML, CSS, and Vanilla JavaScript** to measure typing speed, accuracy, and mistakes in real time.

This project was developed as a team exercise to practice modular JavaScript architecture, DOM manipulation, and integration workflow.

---

## 🚀 Features

* Real-time WPM calculation
* Live accuracy & mistake counter
* Character-by-character highlighting
* Progress bar
* Paragraph Mode & 60-second Timer Mode
* Difficulty Levels (Easy / Medium / Hard)
* Leaderboard using LocalStorage
* Paste disabled (anti-cheat)
* Restart & Finish controls

---

## 🧩 Project Structure

```
typing-speed-tester/
│
├── index.html
├── css/
│   └── style.css
│
└── js/
    ├── paragraph.js
    ├── timer.js
    ├── compare.js
    ├── stats.js
    ├── leaderboard.js
    └── controls.js
```

---

## 🛠 How to Run

1. Clone the repository
2. Open `index.html` in your browser
3. Start typing — timer begins automatically

No installation or server setup required.

---

## 📊 Calculation Logic

* **WPM** = (Total Characters ÷ 5) ÷ Time (in minutes)
* **Accuracy** = (Correct Characters ÷ Typed Characters) × 100
* Extra spaces and wrong characters are counted as mistakes

---

## 🎯 Learning Objectives

* DOM Manipulation
* Event Handling
* Modular JavaScript Design
* LocalStorage Usage
* Team Integration & Collaboration

---

## 👨‍💻 Author

Developed as a frontend practice and team coordination project.

---

## 📄 License

This project is for educational and practice purposes.
