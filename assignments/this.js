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

// code example for Window Binding
var myName = 'Oluwafemi';
// Principle 2

// code example for Implicit Binding
function myName () {
    return this;
}
// Principle 3

// code example for New Binding
 function MyName (name) {
     this.name = name;
 }
// Principle 4

// code example for Explicit Binding
function myRealName (name, address) {
    return `${name}, your address is ${address}`
}
var me = myRealName.bind(null,'Oluwafemi', 'Gbagada, Lagos' );
