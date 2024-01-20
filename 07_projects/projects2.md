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
});```