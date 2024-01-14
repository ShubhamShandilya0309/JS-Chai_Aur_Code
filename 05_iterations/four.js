//forin loop
// const myObj={
//     js: 'Javascript',
//     cpp: 'C++',
//     rb: 'Ruby'
// }
// for (const key in myObj) {
//     // if (Object.hasOwnProperty.call(myObj, it)) {
//     //     const element = myObj[it];
//     //     console.log(element);
//     // }
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

const prog=["js","rb","py","cpp"];
for (const key in prog) {
    console.log(`${key} is ${prog[key]}`);
    
}