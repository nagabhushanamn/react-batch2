"use strict"


// console.log(this);

// global-scope ==> global-object  
/* 
var regFunc = function () {
    console.log(this)
}
var arrFunc = () => {
    console.log(this);
}

regFunc();
arrFunc();


let o1 = {
    name: 'One',
    regFunc: regFunc,
    arrFunc: arrFunc
}
o1.regFunc();
o1.arrFunc();
 */



//------------------------------------------




// let inv = {
//     num: 123,
//     process: function () {
//         console.log('inv-' + this.num + " processed");
//     }
// }

// let inv = {
//     num: 123,
//     process: () => {
//         console.log('inv-' + this.num + " processed");
//     }
// }


// let inv = {
//     num: 123,
//     process: function () {
//         console.log('inv-' + this.num + " processed partially ");
//         return function () {
//             console.log('inv-' + this.num + " processed completly ");
//         }
//     }
// }


// let inv = {
//     num: 123,
//     process: function () {
//         console.log('inv-' + this.num + " processed partially ");
//         return () => {
//             console.log('inv-' + this.num + " processed completly ");
//         }
//     }
// }

// let complete = inv.process();
// complete();



//----------------------------------------


function Person(name, age) {
    this.name = name;
    this.age = age;

    // let self=this;
    // let incAge = function () {
    //     self.age++;
    //     console.log(`${self.name} : ${self.age}`);
    // }

    let incAge = () => {
        this.age++;
        console.log(`${this.name} : ${this.age}`);
    };

    setInterval(incAge, 1000); // Event emitted by Window


}

let p = new Person('Ria', 3)

//-----------------------------------------


