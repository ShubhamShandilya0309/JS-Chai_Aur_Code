//global scope
let a=300
if(true){//block scope
    let a=10
    const b=20;
    var c=30;
    //console.log(`Inner : ${a}`);
}
//console.log(a);
//console.log(b);
//console.log(c);// this the issue with var it prints the value without looking the scope 
/*Closures*/
// function one(){
//     const userName="hitesh"
//     function two(){
//         const website ="youtube"
//         console.log(userName);
//     }
//     console.log(website);
//     two()
// }
// one()

//*****************interesting example**********************/

addone(5)
function addone(num) {
    return num+1;
}


//expression
//addTwo(5) this will throw error: hoisting
const addTwo=function(num){
    return num+2
}
