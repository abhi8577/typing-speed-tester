document.getElementById("finish").onclick=finishTest;
document.getElementById("restart").onclick=()=>location.reload();

input.addEventListener("paste",e=>e.preventDefault());

function finishTest(){
stopTimer();
saveScore(document.getElementById("wpm").textContent);
}

// diffSel.onchange=()=>location.reload();

// diffSel.onchange = () => {
//     loadParagraph();

//     input.value =""
// };

function resetTest() {
    stopTimer();
    input.value = "";
    loadParagraph();
}


diffSel.addEventListener("change", resetTest);