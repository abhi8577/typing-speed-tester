const board=document.getElementById("leaderboard");

function saveScore(score){
let list=JSON.parse(localStorage.getItem("scores")||"[]");
list.push(score);
list=list.sort((a,b)=>b-a).slice(0,5);
localStorage.setItem("scores",JSON.stringify(list));
renderBoard();
}

function renderBoard(){
board.innerHTML="";
(JSON.parse(localStorage.getItem("scores")||"[]"))
.forEach(s=>board.innerHTML+=`<li>${s} WPM</li>`);
}
renderBoard();