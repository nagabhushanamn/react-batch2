
// #1
//-----------------------------------------------

// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42

//----------------------------------------------- 

//  #2
//----------------------------------------------- 

//  function foo(){}
//  function bar(){foo()}
//  function baz(){bar()}
//  baz()


//  #3
//----------------------------------------------- 

// function foo() { throw new Error('oops') }
// function bar() { foo() }
// function baz() { bar() }
// baz()


//  #4
//----------------------------------------------- 

// function foo(){
//     foo();
// }
// foo();




//  #5
//----------------------------------------------- 


// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long...');
//         i++;
//     }
// }

// function shortRunning(){
//     console.log('short..')
// }

// longRunning();
// shortRunning();



//  #6
//----------------------------------------------- 

/*

<button class="veg">veg</button>
<button class="non-veg">non-veg</button>


*/

// console.log('init...')

// $.on('.veg','click',function vegEventHandler(e){
//     console.log('handling event on .veg elements');  
// });
// $.on('.non-veg','click',function nonVegEventHandler(e){
//     console.log('handling event on .non-veg elements');  
// });

// console.log('cont with other work..');
// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long...');
//         i++;
//     }
// }
// longRunning();





//  #7  - Non Blocking IO
//----------------------------------------------- 


// console.log('Init...');

// // IO ==> http-call, read/writing local-storage...

// setTimeout(function afterIO(){
//     console.log('consume/process IO result..');
// },1000); // e.g IO

// console.log('cont with other work..');

// console.log('cont with other work..');
// function longRunning(){
//     var i=0;
//     while(i<1000){
//         console.log('long...');
//         i++;
//     }
// }
// longRunning();


// ------------------------------------------


// console.log('init...');

// alert('respond to me') // deperecated..

// setTimeout(function afterIO(){
//     console.log('consume/process IO result..');
// },1000); // e.g IO

