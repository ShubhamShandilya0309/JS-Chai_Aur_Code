let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

let myCreatedDate= new Date("2023-11-02")
console.log(myCreatedDate.toLocaleDateString());
let myTimeStamp=Date.now()
console.log(Math.floor(myTimeStamp/1000));