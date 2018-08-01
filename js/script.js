console.log("Hey, welcome to my world. A world of trial and error. But this is what defines me!")
console.log("I was born in Cologne, Germany. I am a \"Kölsche Jung\"")
var age = 40;
var name = "Mike";
var height = 1.71;
console.log(age);
console.log(name);
console.log(height);
var text1 = "My parents are orginally from Seoul, South Korea.";
var text2 = "They moved to germany in the year 1968.";
console.log (text1,text2);
var shortArray = [1,2,3];
var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];
console.log(shortArray[0]); // Outputs "1", the first value
console.log(mixedArray[3][0]); // Outputs "nested array"

shortArray[0] = 100; // Overwrites the prior value, 1, with 100
var myArray = [
  1,
  "Mike",
  2,
  "40",
  3,
  "Gaming, Travelling and eating",
];
console.log(myArray); // Will output: [1,2,3, "Test"]


$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings(".project-details").slideToggle();
    });
});

var element = $(this).siblings(".project-details");
// .is(":visible") will return true if the element is currently invisible
if (element.is(":visible")) {
  element.slideUp();
} else {
  element.slideDown();
}
