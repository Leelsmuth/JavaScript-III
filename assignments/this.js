/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// WIndow Binding happens in the global scope.
// code example for Window Binding
var myName = 'Oluwafemi';

// Principle 2
// Whenever a function is called by a preceding dot
// code example for Implicit Binding
function myName () {
    return this;
}

var a = {
    name: 'nnn',
}

// Principle 3
// Whenever a Constructor function is used.
// code example for New Binding
 function MyName (name) {
     this.name = name;
 }
 // Principle 4
 // Whenever JavaScript’s call or apply method is used
 // code example for Explicit Binding
function myRealName (name, address) {
    return `${name}, your address is ${address}`
}
var me = myRealName.call(null,'Oluwafemi', 'Gbagada, Lagos' );
var me = myRealName.bind(null,'Oluwafemi', 'Gbagada, Lagos' );
