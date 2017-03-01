
var onLoad = function(){
  var one = document.querySelector('.minusone');
  one.addEventListener('click',decrement1)
  var two = document.querySelector('.minustwo');
  two.addEventListener('click', decrement2);
  var three = document.querySelector('.minusthree');
  three.addEventListener('click', decrement3);
}

function decrement1(){
  var count = document.querySelector('.counter');
  count.innerHTML--;
  if(count.innerHTML <= 0){
    alert("You lose");
  }
}

function decrement2(){
  var count = document.querySelector('.counter');
  count.innerHTML -= 2;
  if(count.innerHTML <= 0){
    alert("You lose");
  }
}

function decrement3(){
  var count = document.querySelector('.counter');
  count.innerHTML -=3;
  if(count.innerHTML <= 0){
    alert("You lose");
  }
}

window.addEventListener('load',onLoad);
