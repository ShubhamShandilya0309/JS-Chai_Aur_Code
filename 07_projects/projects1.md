#Projected related to dom
##Prject link
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

#Solution Code

##Project1


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