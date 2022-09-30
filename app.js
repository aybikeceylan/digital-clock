const myInterval = setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.querySelector(".time").innerHTML = date.toLocaleTimeString();
}