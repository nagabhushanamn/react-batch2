
console.log('-index.js-');

//----------------------------------------------------
// var myApp = myApp || {}
// myApp.mod1.doWork();
//----------------------------------------------------

require('bootstrap/dist/css/bootstrap.css');

const mod1 = require('greet-batch2');
mod1.greet('en');
mod1.greet('es');
mod1.greet();



//----------------------------------------------------

import primaryItem, { softDrink as drink, pan } from './hotel/menu';
console.log(primaryItem)
console.log(drink)
console.log(pan)

// pan=null; // error
pan.name = "..."

import * as items from './hotel/menu';
console.log(items.default)
console.log(items.softDrink);



