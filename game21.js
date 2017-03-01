
var onLoad = function(){
  var one = document.querySelector('.minusone');
  one.addEventListener('click',decrement1)
  var two = document.querySelector('.minustwo');
  two.addEventListener('click', decrement2);
  var three = document.querySelector('.minusthree');
  three.addEventListener('click', decrement3);
  var reseting = document.querySelector('.reseter');
  reseting.addEventListener('click', reset);
}

function decrement1(){
  var counter = getCounter();
  counter.innerHTML--;
  if(counter.innerHTML <= 0){
    alert("You lose");
  }
}

function decrement2(){
  var counter = getCounter();
  counter.innerHTML -= 2;
  if(getCounter().innerHTML <= 0){
    alert("You lose");
  }
}

function decrement3(){
  var counter = getCounter();
  counter.innerHTML -=3;
  if(counter.innerHTML <= 0){
    alert("You lose");
  }
}

function reset(){
  getCounter().innerHTML = 21;
}

function getCounter(){
  return document.querySelector('.counter');
}

window.addEventListener('load',onLoad);
