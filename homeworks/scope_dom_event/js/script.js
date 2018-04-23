window.onload = function() {

// Create an HTML page with two buttons that argue with each other. 
//When one button is clicked, the text "I'm right" should be placed next to it. 
const buttonRight = document.getElementById('buttonRight');
buttonRight.addEventListener('click', function() {
    document.getElementById('text').innerHTML = "I'm right";
});
// document.getElementById("buttonRight").addEventListener("click", function() {
//     document.getElementById("text").innerHTML = "I'm right";
// });




//When the other button is clicked, the text is replaced with, "No, I'm right!"
const buttonNo = document.getElementById('buttonNo');
buttonNo.addEventListener('click', function() {
    document.getElementById('text').innerHTML = "No, I'm right!";
});
// document.getElementById('buttonNo').addEventListener('click', function() {
//     document.getElementById('text').innerHTML = "No, I'm right!";
// });




// Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. 
// When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
const eleLarge = document.getElementById('eleLarge')
eleLarge.addEventListener('mouseover', function() {
    alert("Hey, I told you not to hover over me!")
})
// document.getElementById('eleLarge').addEventListener('mouseover', function() {
//     alert("Hey, I told you not to hover over me!");
// })




// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".
const keyPress = document.getElementById('keyPress');
document.addEventListener('keypress', function(event) { 
    let keyCode = event.keyCode;
    let res = String.fromCharCode(keyCode);
    keyPress.innerHTML = res;
})




// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
const submit = document.getElementById('submitButton');
submit.addEventListener('click', function() {
    validate();
})

function validate() {
    const userName = document.getElementById('userName');
    const passWord = document.getElementById('passWord');
    if (userName.value.includes ([0-9])) {
        alert(userName);
        alert(typeof userName.value);
        alert("Username must contain a number!");
    } else {
    if (parseInt(passWord.value) !== 12345678) {
        alert("Error! Wrong password.");
    } else {
        alert("You are logged in!");
    };
    };
};

// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1. 
}