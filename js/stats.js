const wpmEl=document.getElementById("wpm");
const accEl=document.getElementById("acc");
const mistakesEl=document.getElementById("mistakes");

function updateStats(){
const chars=input.value.length;
if(totalTime===0)return;

const wpm=Math.round((chars/5)/(totalTime/60));
const acc=Math.max(0,Math.round((correctChars/chars)*100)||0);

wpmEl.textContent=wpm;
accEl.textContent=acc;
mistakesEl.textContent=mistakes;
}