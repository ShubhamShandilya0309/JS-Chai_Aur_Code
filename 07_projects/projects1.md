# Projects related to dom
## Project link
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

# Solution Code

## Project1


```javascript
const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function (button){
  button.addEventListener('click',function(e){
    switch (e.target.id){
      case "grey":
      body.style.backgroundColor=e.target.id;
      break;
      case "white":
      body.style.backgroundColor=e.target.id;
      break;
      case "blue":
      body.style.backgroundColor=e.target.id;
      break;
      case "yellow":
      body.style.backgroundColor=e.target.id;
      break;
      default:
      break;
    }
  })
});
```

## Project 2
```javascript
const body=document.querySelector("body");
const form=document.querySelector("form");
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height =parseInt(document.querySelector('#height').value);
  const weight =parseInt(document.querySelector('#weight').value);
  const results =document.querySelector('#results');
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Give Valid Height!`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Give Valid Weight!`;
  }
  else{
    results.innerHTML=`<span>${(weight/((height*height)/10000)).toFixed(2)}</span>`;
  }
});
```

## Project 3
```javascript
const body=document.querySelector("body");
const clock =document.getElementById('clock');

setInterval(function(){
  let date=new Date();
  clock.innerHTML=`${date.toLocaleTimeString()}`;
},1000)
```

## Project 4
```javascript
let randomNumber=parseInt(Math.random()*100 +1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");
const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number");
  }
  else if(guess<0 || guess>100){
    alert("Please enter an inside range value");
  }
  else{
    prevGuess.push(guess);
    if(numGuess===11){
      displayGuess(guess);
      displayMessage(`Game Over ! Random Number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You Guessed It Right !`);
    endGame();
  }
  else if(guess>randomNumber){
    displayMessage(`You Guessed a Bigger Value`);
  }
  else{
    displayMessage(`You Guessed a Smaller Value`);
  }
}
function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML+=`${guess} `;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`;
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
  const newGameButton= document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100 +1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  })
}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start New Game </h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}
```

# Project 5


```javascript
const insert=document.getElementById('insert');
window.addEventListener('keydown',(e) =>{
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});
```

# Project 6

```javascript
const randomColor=function(){
  const hex= '0123456789ABCDEF';
  let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalId
const startChangingColor= function(){
  if(!intervalId){
    intervalId=setInterval(changeBgColor,1000);
  }
  function changeBgColor(){
    document.body.style.backgroundColor=randomColor();
  }
}
const stopChangingColor= function(){
  clearInterval(intervalId);
  intervalId=null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
```