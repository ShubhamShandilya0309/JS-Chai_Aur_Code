// for (let index = 1; index <=10; index++) {
//     const element = index;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} Table`);
//     for (let j = 1; j <=10 ; j++) {
//         console.log(`${i}*${j}=${i*j}`);
//     }
//     console.log("");
// }

// let myArray=["Shubham","Mamta","Satish","Anupriya"];
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

//break and continue
for (let i = 1; i <= 20; i++) {
    if(i%3==0)continue;
    if(i==19)break;
    console.log(`Value is: ${i}`);
    //it will print till 17 and ignores 3,6,9,12,15 and 18 and stops at 19
}