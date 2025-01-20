//#Primitive DataTypes - 
//7 Types - 
//String,Number,Boolean,Null,Undefined,Symbol(Make it Unique),Bigint

const counter = 100
const scoreValue = 100.4

const isloggedin = false
const isoutin = null

let cityname;

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid)

const bigNumber = 34456768686n

//Reference Type - 
//Non-Primtitive Datatypes - 
//Objects,Browser Events to master JavaScript 
//Array,Objects,Functions

const cars = ["Bmw","Audi","Buggati","Benz"]

// Objects - 

let myobj = {

    name:"Mac",
    age:19,
    hobby:"Nothing",

}

// const myfunction = function(){
//     console.log("Hello World!");
// }

//To check the DataTypes -
// console.log(typeof(cars))

// console.log(typeof myfunction);

// console.log(typeof myobj)
//Return Types of the Datatypes
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//Memory
//Stack(Primitve)and Heap Memory(Non-Primitive) -

let name = "Macplayz"

let anothername = name 

console.log(anothername);

let Myobj = {
    email:"abc@123",
    pay:"24fjs"
}

let myobj1 = myobj 

myobj1.email="qaz@";

console.log(Myobj.email);
console.log(myobj1.email);
