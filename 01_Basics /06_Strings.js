const name = "Hello World !"
const repcount = 50 

//Modern way to print (Interpolation)
// console.log(`The name is ${name} and the count is ${repcount}`);

// //Another way to declaring the String 
const gameName = new String("Hello World")
// console.log(gameName[3])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(4))
console.log(gameName.indexOf("d"))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   mac    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://macplayz.com/macplayz%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));