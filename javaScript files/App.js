// (function () {
//   "use strict";
//   /* Start of your code */
//   function greetMe(yourName) {
//     alert(`Hello ${yourName}`);
//   }

//   greetMe("Pamel a");
//   /* End of your code */
// }
// )(); 
 function wordBlank( myNoun, myAdjective, myVerb, myAdverb){

  var Result ="";

Result += "The "+ myAdjective+" "+ myNoun+" "+ myVerb+" to the store"+" "+ myAdverb;


  return Result;

 }

 console.log(wordBlank("dog", "big", "ran", "quickly"))

 var ourArray = ["stimpson", "j",  ["cat"]]
  console.log(ourArray)

 ourArray.push(["pamela", 2.5,66])
  console.log(ourArray)
 
 ourArray.pop()
  console.log(ourArray)

 ourArray.shift()
  console.log(ourArray)

 ourArray.unshift(["Be Perfect", 16, 77])
 console.log(ourArray)


 //Functions helps us reuse codes
 function myFunction (){
  console.log("Heyya, world")
 }

 myFunction()

 function myCalculation(a,b){
console.log(a-b)
 }
myCalculation(10, 5)


/*Precedence in Functions
function variables have high Precedence over global variables*/

var oterWear = "T-shirt"

function outfit(){
var oterWear= "Huddie"

  return oterWear
}
console.log(outfit()) 

//Crack the foolowing code
function nextInLine( arr, item){
  arr.push(item)
  return arr.shift()

}


var TestArray = [1,2,3,4,5,6,7]
console.log("Before: " +JSON.stringify(TestArray) )
console.log(nextInLine(TestArray, 8))
console.log("After: "+ JSON.stringify(TestArray))



console.log("Before: " +JSON.stringify(TestArray) )
console.log(nextInLine(TestArray, 9))