let myTime;
const displayTime = [ "*","*","*","*","*","*","*","*","*","*" ];

function countDown() {
    for (s = 9; s >= 0; s--) {
    myTime = setInterval(startTimer, 1000);
    console.log(displayTime.join(""))
}
}

function startTimer() {
    displayTime.pop()
      }; 

countDown()