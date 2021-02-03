let N=6;
let correct;
let score=0;
let count=0;
let round=0;
let tiles=[];

for (let i=0; i<N; i++) {
  tiles.push(document.getElementById(i));
}

function d2h(dec) {
  let ch="0123456789ABCDEF";
  return ch[Math.floor(dec/16)]+ch[dec%16];
}

function update() {
  document.getElementById("rounddiv").innerHTML="ROUND: "+round;
  document.getElementById("scorediv").innerHTML="SCORE: "+score;
  document.getElementById("countdiv").innerHTML="COUNT: "+count;
}

function newGame() {
  count=0;
  round++;
  update();

  tiles.forEach( t => {
    t.style.visibility="visible";
    t.r=Math.floor(Math.random()*256);
    t.g=Math.floor(Math.random()*256);
    t.b=Math.floor(Math.random()*256);
    t.style.background='#'+d2h(t.r)+d2h(t.g)+d2h(t.b);
  })

  correct=Math.floor(Math.random()*6);

  document.getElementById("rgb").innerHTML="RGB("+
    tiles[correct].r+','+
    tiles[correct].g+','+
    tiles[correct].b+')';
}

tiles.forEach( t=> t.addEventListener("click", () => {
  count++;
  if (t.style.background==tiles[correct].style.background) {
    score+=6-count;
    update();
    newGame();
  }
  else { 
    t.style.visibility="hidden";
    update();
  }
}));