const mySym=Symbol("k1");
const jsUser={
    name : "Shubham",
    "full name" : "Shubham Shandilya",
    age : 20,
    [mySym] : "symbl1",
    year : "3rd",
    branch : "CSE"
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(typeof(jsUser.mySym));
//Object.freeze(jsUser);
// jsUser.age=23;
// console.log(jsUser.age);
jsUser.greeting=function(){
    console.log("Hello JS user!");
}
jsUser.greetingTwo=function(){
    console.log(`Hello ${this["full name"]} , Good Day !`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());