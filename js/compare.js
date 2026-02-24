const input=document.getElementById("input");
const bar=document.getElementById("bar");

let mistakes=0;
let correctChars=0;

input.addEventListener("input",()=>{
startTimer();
checkTyping();
updateStats();
});

function checkTyping(){
const spans=paragraphEl.querySelectorAll("span");
const typed=input.value;
mistakes=0;correctChars=0;

spans.forEach((span,i)=>{
const c=typed[i];
if(c==null) span.className="";
else if(c.toLowerCase()===span.textContent.toLowerCase()){
span.className="correct";correctChars++;
}else{
span.className="wrong";mistakes++;
}
});

bar.style.width=(typed.length/spans.length*100)+"%";
}