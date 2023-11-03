const marvel=["Captain","Tony","Thor"]
const dc=["Bruce","Henry"]
//marvel.push(dc)
//console.log(marvel);
//it pushes array as a data
//[ 'Captain', 'Tony', 'Thor', [ 'Bruce', 'Henry' ] ] will be the output
//same problem with concat if we print marvel
//but if we store it in another array and print that then problem will be resolve
const allHeros=marvel.concat(dc)
//console.log("using concat ",allHeros);

//spread operator
const allNewHeros=[...marvel, ...dc]
//console.log("using spread operator",allNewHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherArray=anotherArray.flat(Infinity)
console.log(anotherArray);
console.log(real_anotherArray);

console.log("It give an empty array ",Array.from({name :"Shubham"}))