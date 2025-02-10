//singleton 
//literal - no singleton
//constructor - singleton


//Objects are like dictionarys of python 
//object literals

//create SYmbols

const sym=Symbol("Key1")

const objuser  = {
    name : "Hello",
    [sym]:"key1",//change into symbol
    roll_no : 14,
    city : "Mumbai",
    email : "hello12@gmail.com",
    islogged : false,
    logged : ["Monday","Saturday"]
}

console.log(objuser.email)
console.log(objuser["email"])
console.log(typeof sym)
console.log(objuser[sym]);

objuser.roll_no = 23;

console.log(objuser)
Object.freeze(objuser)//Dont change the values
objuser.roll_no=13

objuser.greeting = function(){
    console.log("Hello World");
}
