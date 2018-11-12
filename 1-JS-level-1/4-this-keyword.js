"use strict"

/*

    function-binding
    --------------------

    ==> executing function on object

    types

    - static 
    - dynamic

*/

//------------------------------------------------
// static function-binding
//------------------------------------------------

function sayNameForAll() {
    // console.log(this);
    console.log('im ' + this.name);
}

// sayNameForAll(); // error , this ==> undefined

let p1 = {
    name: 'Nag',
    // sayName: function () {
    //     console.log("im " + this.name);
    // }
    //or
    sayName: sayNameForAll
};
let p2 = {
    name: 'Ria',
    // sayName: function () {
    //     console.log("im " + this.name);
    // }
    //or
    sayName: sayNameForAll
};
// p1.sayName();
// p2.sayName();




//------------------------------------------------
// dynamic function-binding
//------------------------------------------------

function ctsJavaTraining(topic, duration) {
    console.log("The tnr - " + this.name + " teaching java-topic - " + topic + " : " + duration);
}

function ctsJsTraining(topic, duration) {
    console.log("The tnr - " + this.name + " teaching js-topic - " + topic + " : " + duration);
}


const tnr = { name: 'Nag' }
Object.preventExtensions(tnr);


//------------------------------------------------
//way-1: call()
//------------------------------------------------
// ctsJavaTraining.call(tnr, "spring", 3)
// ctsJsTraining.call(tnr, 'react', 10)
//------------------------------------------------
//way-2: apply()
//------------------------------------------------
// ctsJavaTraining.apply(tnr, ['spring', 3])
// ctsJsTraining.apply(tnr, ['react', 10])
//------------------------------------------------
//way-3: bind()
//------------------------------------------------
// const ctsJavaTngByNag = ctsJavaTraining.bind(tnr, "spring", 3)
// ctsJavaTngByNag();
// ctsJavaTngByNag();

// const ctsJsTngByNag = ctsJsTraining.bind(tnr, 'react');
// ctsJsTngByNag(10)
// ctsJsTngByNag(4)
//------------------------------------------------



//-------------------------------------------------
// static function-binding
/* 
tnr.ctsJavaTraining = ctsJavaTraining; 
tnr.ctsJavaTraining('spring', 3)

tnr.ctsJsTraining = ctsJsTraining;
tnr.ctsJsTraining('react', 10) */

//-------------------------------------------------
// summary
//-------------------------------------------------
/* function func() {
    console.log(this);
}
func();

let o1 = { name: 'One', f: func } // static 
o1.f();
let o2 = { name: 'Two' }
func.call(o2) // dynamic 
*/

//-------------------------------------------------
// Quiz-1
//-------------------------------------------------
/* 
let pName = "Global";
let person = {
    pName: 'Nag',
    sayName: function () {
        let pName = "Local";
        console.log('im ' + pName); // scope hierarchy's data
        console.log('im ' + person.pName); // referenced obj's property
        console.log('im ' + this.pName); // owner of current scope  
    }
}
// person.sayName();
let oldPerson = person;
person = { pName: 'Ria' }
oldPerson.sayName();
 */

//-------------------------------------------------
// Quiz-2
//-------------------------------------------------


/* 
const tnr1 = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let self = this;
        let doLearn = function () {
            console.log(this.name + " learning .js from " + self.name);
        }
        console.log(" teaching .js ends");
        return doLearn;
    }
};

//today
let learnFunc = tnr1.doTeach();
let emp = { name: 'cts' }
learnFunc.call(emp)

//tomorrow
let tempTnr = {
    name: 'Kishore'
}
learnFunc = tnr1.doTeach.call(tempTnr);
learnFunc.call(emp)



 */

//-------------------------------------------------


// summary



function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function (sub) {
            console.log(this.name + " teaching " + sub);
            let that = this;
            let notes = ".js-notes"
            let doLearn = function () {
                console.log(this.name + " learning " + sub + " with " + notes + " from " + that.name);
            }
            console.log('teaching ends');
            return doLearn
        }
    }
    function Employee(name) {
        this.name = name;
    }
    const tnr = new Trainer('Nag')
    const e1 = new Employee('E1')
    const e2 = new Employee('E2')
    const doLearn = tnr.doTeach('.js');
    doLearn.call(e1)
    const e2LearnFunc = doLearn.bind(e2)
    e2LearnFunc()
    e2LearnFunc();
}
sessionStart();


//---------------------------------------------------------------------------


const service = {
    doTeach: function () {
        // console.log(this)
        console.log(this.name + " teaching .js");
    }
}
const tnr2 = { name: 'Nag' }

const teachBtn = document.getElementById('teachBtn')

teachBtn.addEventListener('click',service.doTeach)

// teachBtn.addEventListener('click', function () {
//     console.log(this)
//     service.doTeach.call(tnr2)
// })

teachBtn.addEventListener('click', service.doTeach.bind(tnr2))
