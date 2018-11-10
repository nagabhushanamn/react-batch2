"use strict"

/**
 * 
 *   ES6
 *   -------
 * 
 *   New syntax
 *   -----------
 * 
 *    1. string interpolation
 *    2. let & const keywords with block-scope
 *    3. function with default & rest params
 *    4. New OO coding with class-syntax
 *    5. obj-literal enhancements
 *    6. de-structuring
 *    7. spread operator
 *    8. symbol type , iterable objects , for-of loop
 *    9. arrow-function
 *    10. generator function
 * 
 * 
 */

//-----------------------------------------------
// 9.arrow-function 
//-----------------------------------------------


// let getPrice = function () {
//     return 100 + 200;
// }

// or

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = (count) => {
//     return count * (100 + 200);
// }

// or

// let getPrice = count => {
//     return count * (100 + 200);
// }


// let getPrice = (count,tax) => {
//     return count * (100 + 200) + tax;
// }
// or

// let getPrice = (count, tax) => count * (100 + 200) + tax



// why/where we need arrow-function , How it differet from normal-function ?


// use-1 : in Higher-Order-Programming, to make compact function-arguement


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (x, y) { return x - y });
//or
// nums.sort((x, y) => { return x - y });
//or
// nums.sort((x, y) => x - y); // compact syntax



// use-2 : to capture 'this'

/*

    normal-function

        => we can bind statically / dynamically to any object

    arrow-function :

        => we cannot bind statically / dynamically to any object, which always bound to creator
    

*/

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");

        // let askQues = function (q) {
        //     console.log(this.name + " answering " + q);
        // };

        // or

        let askQues = q => console.log(this.name + " answering " + q);

        console.log('teaching ends');
        return askQues;
    }
};

let askQues = tnr.doTeach();
askQues("Q1")

let otherTnr = { name: "kishore" } // enemy
askQues("Q2")







//-----------------------------------------------
// 8. symbol type , iterable objects , for-of loop
//-----------------------------------------------


// symbol
/*
    Unique & immutable value , used as obj's identifier property
*/

// e.g

// let menu = ['idly', 'vada', 'poori']

// for (let item of menu) {
//     console.log(item)
// }
// let newMenu = [...menu, 'biryani']
// let [m1, m2, m3] = menu


// how to create custom iterable objects?

let idGenerator = {
    [Symbol.iterator]: function () {
        let id = 0;
        return {
            next: function () {
                id++;
                return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
            }
        }
    }
};
/* 
for (let id of idGenerator) {
    console.log(id);
}

let ids = [...idGenerator];
let [id1, id2] = idGenerator */


// can we  create custom-symbol?

let javaSymbol = Symbol.for('java')
let jsSymbol = Symbol.for('js')


let e1 = { name: 'E1', [javaSymbol]: 'java,spring' }
let e2 = { name: 'E2', [jsSymbol]: 'js,react,NG' }
let e3 = { name: 'E3' }

/* 
if (e1[javaSymbol]) {
    console.log('get in');
}

if (e1[jsSymbol]) {
    console.log('get out');
}
 */


//-----------------------------------------------
//  7. spread operator
//-----------------------------------------------


/*

 function display(n1, n2, n3) {
    console.log(n1);
    console.log(n2);
    console.log(n3);
}

let nums = [10, 20, 30];
// display(nums[0], nums[1], nums[2])
// or
display(...nums); 

*/

// e.g

// let nums = [10, 20, 30, 70, 40, 20, 5];
// let max = Math.max(...nums);



// let arr1 = [1, 2, 3]
// let arr2 = [7, 8, 9]
// let arr3 = [...arr1, 4, 5, 6, ...arr2];


// let o1 = { x: 1, y: 2 }
// let o2 = { z: 3, x: 10 }

// let o3 = { ...o1, ...o2 }





//-----------------------------------------------
//  6. de-structuring
//-----------------------------------------------

//#1

// let person = {
//     name: 'Nag',
//     age: 35
// };

// let myName = person.name;
// let myAge = person.age;

// or

// let { name: myName, age: myAge } = person;
// let { name: name, age: age } = person;
//or
// let { name, age } = person;

// let name, age;
// ({ name, age } = person);

// e.g

// function displayPerson1(person) {
//     let template = `
//         <h1>${person.name} - <small>${person.age}</small></h1>
//     `
//     console.log(template)
// }
// function displayPerson2({ name, age }) {
//     let template = `
//         <h1>${name} - <small>${age}</small></h1>
//     `
//     console.log(template)
// }


// #2


// let nums = [10, 20, 30, 40, 50, 60, [70, 80]]

// let n1 = nums[0]
// let n2 = nums[1]
// let n3 = nums[2]

// or

// let [n1, n2, n3, n4 = 0, , n6, [n7, n8]] = nums




//-----------------------------------------------
// 5. obj-literal enhancements
//-----------------------------------------------

/* 

let name = "Nag";
let age = 32;

// es5
let person1 = {
    name: name,
    age: age,
    address: 'chennai',
    3: 'three',
    sayName: function () {
        //..
    }
}

//es6
let addressType = "office"; // home | office | vacation
let person2 = {
    name,
    age,
    [addressType + "-address"]: 'chennai',
    [1 + 2]: 'three',
    sayName() {

    }
}
 */