


/*

    How to create function? 2 ways

    1. function declaration

        => Named function
        => function-object created at scope creation-phase
        => always get hoist with function-object

    2. function expression

        => anonymous function
        => function-object created at scope execution-phase
        => we can invoke after expression

*/

//---------------------------------------------
// 1. function declaration
//---------------------------------------------


// console.log(add(12,13))

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13))


//---------------------------------------------
// 2. function expression / Anonymous function 
//---------------------------------------------

// console.log(add(12,13)) // error

// var add = function (n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13))

//---------------------------------------------
// function parameters
//---------------------------------------------

/* 
function func(a, b, c, d, e) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[3])
    console.log(arguments[4])

}
func(10, 20, 30, 40, 50);
 */

//---------------------------------------------
// function with default parameters ( es6)
//---------------------------------------------

/* 
function func(a = 1, b = 2) {
    // if (!a) a = 1
    // if (!b) b = 2
    //or
    // a = a || 1;
    // b = b || 2;
    console.log(a)
    console.log(b)
}

func(undefined, 20); */

//---------------------------------------------


//---------------------------------------------
// function with rest parameter ( es6)
//---------------------------------------------

/* function func(a = 1, b = 2, ...rest) {
    console.log(a)
    console.log(b)
    console.log(rest)
}
func(10, 20, 30, 40, 50);
 */




//---------------------------------------------
// can we overload functions? No
//---------------------------------------------

function getFood() {
    return "No Food"
}
//  var getFood=new Function(/*...*/)

function getFood(pay) {
    if (arguments.length === 0) return "No Food"
    return "Biryani"
}
// getFood=new Function(/*...*/)

// console.log(getFood())

//---------------------------------------------

/* function sum() {
    let result = 0,
        len = arguments.length,
        i = 0;
    while (i < len) {
        result += arguments[i]
        i++;
    }
    return result;
}
 */

//---------------------------------------------
// FP Principles
//---------------------------------------------

/*

    // .js-language , 
    
     ==> functions are first-class values/citizens

    - A function can be stored in a variable or value/object
    - A parameter of a function can be a function
    - The return value of a function can be a function

*/

//---------------------------------------------
// - A function can be stored in a variable or value/object
//---------------------------------------------

/* 
function greet() {
    console.log('Hello')
}

let sayHello = greet;
sayHello(); */


//---------------------------------------------
// - A parameter of a function can be a function
//---------------------------------------------

/* 
function greet(f) {
    console.log("-------------------------")
    if (f)
        f();
    console.log("-------------------------")
}

greet();

let en = function () { console.log('hello..') }
let es = function () { console.log('ola..') }
greet(en)
greet(es)


// e.g


const nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
nums.sort(); //  sort ==> compare -->> swap
const asc = function (x, y) { return x - y; }
nums.sort(asc);
 */


//---------------------------------------------
// - The return value of a function can be a function
//---------------------------------------------

/* 

    function teach() {
        console.log('teaching .js');
        const learn = function () {
            console.log('learning .js');
        }
        // learn();
        console.log('teaching .js ends');
        return learn;
    }

    const learnFunc=teach();
    learnFunc()
    learnFunc();

 */



//---------------------------------------------
// - Higher-Order-Programming / Function
//---------------------------------------------

/*

   
A function that does at least one of the following is a Higher Order Function.

    1. Takes one or more functions as arguments.
    2. Returns a function as its result.

*/

/* 
function beforeLog() {
    console.log('BEFORE: log');
}
function afterLog() {
    console.log('AFTER: log');
}

function f1() {
    console.log('f1()');
}

function f2() {
    console.log('f2()');
}

// HOF ==> function composition
function logWrapper(f) {
    return function () {
        beforeLog();
        f();
        afterLog();
    }
}

const funcWithLog = logWrapper(f2);
funcWithLog();

 */

 
//---------------------------------------------
// Function 'closures'
//---------------------------------------------

/*

A closure is a function having access to the parent scope,
even after the parent function has closed.

*/

/* function teach(sub) {
    console.log('teaching ' + sub);
    const notes = sub + "-notes"
    const fun = "bla bla";
    // console.log(fun);
    function learn() {
        console.log('learning with ' + notes);
    }
    //learn();
    console.log('teaching ends');
    return learn;
}


let learnFunc = teach('.js')
learnFunc();
learnFunc();
learnFunc();


 */


// why / where we need closures ?

/*
   // ==> to abstract public behav of module
*/


/*
   e.g : counter-module

           - count
           - increment()
           - get()
*/



// module : counter.js
//---------------------------------------------

// module-design-pattern :  self-executable/IIFE ( Imme.. Invo.. Func.. Exp ..) function

const counter = (function () {
    let count = 0; // private
    function pri() { }
    function increment() {
        count++;
    }
    function get() {
        return count;
    }
    return {
        inc: increment,
        get: get
    };
})()
//---------------------------------------------

