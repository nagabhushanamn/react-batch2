
console.log('-data-types-');


/*
    2 types
    --------
    1. simple / primitives ==> values
        a.  undefined
        b.  string
        c.  number
        d.  boolean

    2. complex / reference ==> objects
    
*/




//-----------------------------------------------------------------
// 1. simple / primitives ==> values
//-----------------------------------------------------------------
// a. undefined
//-----------------------------------------------------------------

var v;

//-----------------------------------------------------------------
// b. string
//-----------------------------------------------------------------

var name = "Nag";
var selection = 'abc';
var dyanmicString = "the trainer is " + name;
// or
var dyanmicString2 = `the trainer is ${name}`
var sumString = `the sum od 1 & 2 is ${1 + 2}`
var multiLineString = `
    <div>
        <h1>react by ${name}</h1>
    </div>
`;

//-----------------------------------------------------------------
// c. number
//-----------------------------------------------------------------

var count = 12;
var cost = 12.12;

//-----------------------------------------------------------------
// d. boolean
//-----------------------------------------------------------------

var isFound = false;

// imp-note:

// falsy-values ==> false,"",0,undefined,null,NAN

// Ref : https://dorey.github.io/JavaScript-Equality-Table/




//-----------------------------------------------------------------
// 2. complex / reference ==> object
//-----------------------------------------------------------------


//  syntax:

/*
    var ref=new Constrcutor()
*/


// in ES-5,  function ==> class/construtor

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// or

//  from ES-6,  class-syntax

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var p1 = new Person('Nag', 35)
var p2 = new Person('Ria', 3)

/*
    imp-note: by default, 
    => objects are extensible & configurable
*/


p1.teachSkill = "java,js";
delete p1.teachSkill;



//-----------------------------------------------------------------
// 2. literal-style object
//-----------------------------------------------------------------

// A. Object

var config = new Object();
config.url = "http://"
config.httpMethod = "GET";
config.onSuccess = function () {
    console.log('im executing on success');
}

// or literal-style

var newConfig = {
    url: "http://",
    httpMethod: 'GET',
    onSuccess: function () {
        //..
    }
}

//-----------------------------------------------------------------

// B. Array/List

var arr = new Array();
arr.push("item1")
arr[1] = "item-2"

// or literal-style

var newArr = ["item1", "item-2"];


//-----------------------------------------------------------------

// C. RegExp

var re = new RegExp("\\d{10}");

// or literal-style

var newRe = /\d{10}/;
var adharPattern = /\d{4}-\d{4}-\d{4}/;

//-----------------------------------------------------------------

// D. Function

var add = new Function("n1", "n2", "var r=n1+n2;return r;");

// or literal-style

function add(n1, n2) {
    var r = n1 + n2; return r;
}


//-----------------------------------------------------------------


// How to access obj's properties ?

/*
    way-1 : '.' notation
    way-2 : '[]' notation , if property name has 'space' or 'dash' or 'digit'
*/

var person = {
    name: 'Nag',
    'home-address': 'chennai',
    1: 'one',
    100: 'hundred'
};

person.name = "Na N"
console.log(person.name);

person['home-address'] = "india";
console.log(person["home-address"]);

console.log(person[1])


//-----------------------------------------------------------------
