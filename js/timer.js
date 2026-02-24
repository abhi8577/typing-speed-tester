const timeEl=document.getElementById("time");
const modeSel=document.getElementById("mode");

let start=null;
let timer=null;
let totalTime=0;

function startTimer(){
if(!start){
start=new Date();
timer=setInterval(updateTime,1000);
}
}

function updateTime(){
if(modeSel.value==="time"){
totalTime++;
if(totalTime>=60) finishTest();
}else{
totalTime=Math.floor((new Date()-start)/1000);
}
timeEl.textContent=totalTime;
}

function stopTimer(){
clearInterval(timer);

   timer = null;
    start = null;     // 🔥 IMPORTANT
    totalTime = 0;    // 🔥 IMPORTANT
}