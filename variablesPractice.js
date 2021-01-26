console.log("********************************************");
console.log("*********** variables and scopes ***********");
console.log("********************************************");

function myFunction1() {
    var firstName = "John";
    console.log(firstName);  
    // code here can use firstName, here firstName is a function scope and only is used within the function  
  }
myFunction1();
// code here can NOT use firstName
//console.log(firstName) shows error as it is only defined inside a function

var lastName = "Johnson";
console.log(lastName)

function myFunction2() {
  console.log(lastName);

}

myFunction3();
 console.log('my height is '+ height)
function myFunction3() {
   height = 180;
  }


console.log("*********** let ***********");
var x = 3; //Global scope variable
let y = 7; // block scope variable
// inside a function both var and let have function scope

function myFunction4() {
    var firstName = "Joonas";   // Function Scope
  }
function myFunction5() {
    let firstName = "Joonas";   // Function Scope
    console.log(firstName);
}
myFunction5();

console.log("*********** const ***********");
// In block scope x defined inside the block is not as same as the one defined outside the block
var x = 10;
// Here x is 10
console.log('Here x is '+ x);
{
  const x = 2;
  // Here x is 2
  console.log('Here x is '+ x);
}
// Here x is 10
console.log('Here x is '+ x);

// You can create a const object:
const userInfo = { name:"Mike", height:175, dob:new Date(1989, 0, 31), 
                       maxBpm: 188, weightGoal:85.0, waistGoal:95.5, dateGoal:new Date(2021,6,1) };
// You can change a property:
userInfo.name = "Michael";

// You can add a property:
userInfo.lastName = "Johnson";

console.log(userInfo);






