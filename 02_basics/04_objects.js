const tinderUser = new Object();
tinderUser.id="123abc"
tinderUser.name="Shubhi"
tinderUser.isLoggedIn=false
//console.log(tinderUser);
const regularUser={
    email:"shubhi@google.com",
    fullname:{
        userFullname:{
            firstName:"Shubham",
            midName:"Kumar",
            lastName:"Shandilya"
        }
    }
}
//console.log(regularUser);
//console.log(regularUser.fullname?.userFullname.firstName);
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={obj1,obj2};
//console.log(obj3);
const obj4= Object.assign({},obj1,obj2,obj3);
//console.log(obj4);
//object assign mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(typeof(Object.keys(tinderUser)));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));
const course={
    courseName:"Chai aur Code",
    courseInstructor:"Hitesh Chaudhary",
    coursePrice:999
}
const{courseInstructor : instructor}=course
console.log(instructor);

//json api call
// {
//     "course":"JS chai aur code",
//     "instructor":"hitesh",
//     "price":999
// }