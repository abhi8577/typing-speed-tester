const finishBtn = document.getElementById("finish");
const result = document.getElementById("result");

finishBtn.onclick = ()=>{
    stopTimer();

    let totalTime = parseInt(timeEl.innerText);
    let typedChars = input.value.length;

    if(totalTime === 0 || typedChars === 0){
        result.innerText = "Type something first!";
        return;
    }

    let wpm = Math.round((typedChars/5)/(totalTime/60));
    let accuracy = Math.max(0,Math.round((correctChars/typedChars)*100));

    result.innerText =
    `WPM: ${wpm} | Accuracy: ${accuracy}% | Mistakes: ${mistakes}`;
};