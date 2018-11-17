




//---------------------------------------------
// - Higher-Order-Programming / Function
//---------------------------------------------

/*
   
A function that does at least one of the following is a Higher Order Function.
  
    1. Takes one or more functions as arguments.
    2. Returns a function as result.

*/

// function f1() {
//     console.log('before LOG')
//     console.log('f1()');
//     console.log('after LOG')
// }
// function f2() {
//     console.log('before LOG')
//     console.log('f2()');
//     console.log('after LOG')
// }


//View component 1
function f1() {
    console.log('f1()');
}
//View component 2
function f2() {
    console.log('f2()');
}

// common logic..
function logWrapper(f) {
    return function () {
        console.log('before Log')
        f();
        console.log('after Log')
    }
}

let f1WithLog = logWrapper(f1);
let f2WithLog = logWrapper(f2);

f1WithLog();
f1WithLog();
