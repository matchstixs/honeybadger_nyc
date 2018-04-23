// Create a script with two variables, each assigned to a number.
// Add them together and output the result to the console. Now do the same with two strings.
let num1 = 1;
let num2 = 2;
console.log (num1 + num2);

// Create a multidimensional array related to a subject that interests you.
// Output two of the items in sub-arrays to the console.
const music = [['Classical', 'Bach'], ['RocknRoll', 'Elvis'], ['Blues', 'Sinatra'], ['Edm', 'Deorro'], ['Pop', 'Sheeran']];
console.log (music[0][0] + " " + music[2][1]);

// Write a script that checks if a variable is less than 100.
// If it is, alert the user that their variable is less than 100.
// If it is not alert the user of what the value was and that it was greater than 100.
let x=99
let num1 = x;
if (x<100) {
  alert ("The variable is less than 100");
}
 else if (x==100) {
   alert ("The variable is 100!")
 } else alert ("The variable is 100 or greater")

// Declare a function that takes a name as an argument and tells the user what name they've entered.
// Try running it after it has been declared.
function name() {
  var x = prompt("Please enter a name")
  alert("You have entered: " + x);
}
// Declare a function that depending upon which virtual 'door' was entered tells
// the user they've received a different 'prize' in an alert. After declaring the
//  function, try running it with different options. There must be at least 3 doors

// Declare a function that depending upon which virtual 'door' was entered tells
// the user they've received a different 'prize' in an alert. After declaring the
//  function, try running it with different options. There must be at least 3 doors
function virtualDoor(){
  let userInput = prompt("Choose a door to enter. A, B, or C").toUpperCase;
  const reward = "Congratulations! Your prize hidden behind door";
  const A = "A is Cherry Pie";
  const B = "B is Pumpkin Pie";
  const C = "C is Red Velvet Cake";
  if (userInput === A) {
    alert (reward + " " + A);
    return;
  }
  else if (userInput === B) {
    alert (reward + " " + B);
    return;
  }
  else if (userInput === C) {
    alert (reward + " " + C);
    return;
  }
  else{
    alert ("Please select a one of the following doors A, B, or C");
  }
}
