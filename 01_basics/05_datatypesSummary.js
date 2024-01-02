//https://tc39.es/ecma262/ : Important Link
//primitive data types
// call by value 
/* 7 types : string , number , boolean , null , undefined , symbol , bigint */
// refernce data types : non-primitive
// array ,objects , functions
//Is Js a statically typed or dynamically typed?
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
/* ************************Stack and Heap*********************** */
//primitive data type uses stack memory and reference data type uses heap memory.

let userOne="shubham@gmail.com";
let userTwo=userOne;
userTwo="hitesh@gmail.com";
console.log(userOne);
console.log(userTwo);
//userOne and userOne variables are stored in stack and are passed by value.
let One={
    name: "shubham",
    age:20

}
let Two=One;
Two.name="hitesh";
console.log(One.name);
console.log(Two.name);

// here in object example the value are stored in heap and are passed by reference
