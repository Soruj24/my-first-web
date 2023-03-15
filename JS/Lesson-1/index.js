
function displayTime() {
    let clock = document.querySelector("#clock");
    let time = new Date();
    clock.textContent = time.toLocaleTimeString();
}


setInterval(displayTime, 1000)