var turn =0;
var player1 =[];
var player2 =[];
var winArray =[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var cell = document.querySelector('#container');
var div1 = document.querySelector("#winner");
var button= document.querySelector("#winner .button");
cell.addEventListener('click',function(e){

draw(e.target);

if(isWin(winArray,player1)){
button.innerHTML="player 1 wins";
div1.style.display="block";}
else if (isWin(winArray,player2)){
button.innerHTML="player 2 wins"
div1.style.display="block";
}
else if(turn == 9){
button.innerHTML=" no wins"
div1.style.display="block";
}


})


function draw(rectangle){
  while (rectangle.getAttribute("data-stored") == "nothing") {
  if(turn%2 == 0 ){

   rectangle.style.backgroundImage= "url(img/xImg.ico)";
   rectangle.style.backgroundRepeat="no-repeat";
   rectangle.style.backgroundPosition="center center";
   rectangle.style.backgroundSize="90%";
   rectangle.setAttribute("data-stored","x");
   player1.push(rectangle.getAttribute("data-rank"));
   turn++;

 }else{
   rectangle.style.backgroundImage="url(img/oImg.ico)";
   rectangle.style.backgroundRepeat="no-repeat";
   rectangle.style.backgroundPosition="center center";
   rectangle.style.backgroundSize="90%";
   rectangle.setAttribute("data-stored","o");
   player2.push(rectangle.getAttribute("data-rank"));
   turn++;

 }
}
}

function isWin(winArray,player){
  var flag ,wins=false;
  winArray.forEach((winItem) => {
    flag=0;
    winItem.forEach((item) => {
     if(player.includes(item.toString())){
       flag++;
       if(flag == 3){wins=true;}}
  });
});
return wins;
}
