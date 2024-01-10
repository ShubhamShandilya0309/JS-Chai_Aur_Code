const user={
    userName:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.userName="Shubham";
// user.welcomeMessage()
//console.log(this);

// function chai() {
//     let userName="Shubham"
//     console.log(this.userName);//not works inside a function but works in object
// }

// const chai= function () {
//     let userName="Shubham"
//     console.log(this.userName);// this also gives undefined
// }

// const chai= () =>{//arrow function
//         let userName="Shubham"
//         console.log(this.userName);
//     }
// chai();

//()=> syntax of arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
const addTwo=(num1,num2)=>(num1+num2) //impilcit function
console.log(addTwo(3,4))