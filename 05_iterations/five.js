//for each loop
const coding=["Js","ruby","java","python","cpp"]
// coding.forEach(function(val){
//     console.log(val);
// })
// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);


const myCoding=[
    {
        languageName:"Javascript",
        language :"Js"
    },
    {
        languageName:"C++",
        language :"Cpp"
    },
    {
        languageName:"Python",
        language :"Py"
    }
]
myCoding.forEach((item)=>{
    console.log(`${item.language} and ${item.languageName}`);
})