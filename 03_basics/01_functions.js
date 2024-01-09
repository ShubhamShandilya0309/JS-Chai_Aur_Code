function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
// addTwoNumbers(3,5);
// addTwoNumbers(3,'a');
// addTwoNumbers(3,null);
// addTwoNumbers(3,false);
// addTwoNumbers(3,true);
function addNumbers(num1,num2){
    let result =(num1+num2);
    return result;
}
//console.log(addNumbers(3,5));
function loginUserMessage(userName){
    return `${userName} just LoggedIn !`;
}
//console.log(loginUserMessage("Shubham"));

function calculateCartPrice(...num){//rest operator
    return num;
}
// console.log(calculateCartPrice(20));
// console.log(calculateCartPrice(200,300,400));

const user={
    userName:"shubham",price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
// console.log(handleObject(user));
myNewArr=[1,2,3,4];
function get2ndValue(anyArray){
    return anyArray[1];
}
console.log(get2ndValue(myNewArr));