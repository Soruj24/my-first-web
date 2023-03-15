function btn() {
    document.querySelector("h1").style.color = "red"
    document.querySelector("p").style.color = "green"
    document.querySelector(".btn2").style.color = "red"
}

let heading3 = document.createElement("h2");
let text = document.createTextNode("This is a Herading h2");

heading3.appendChild(text);

let myDiv = document.querySelector(".my-div");
myDiv.appendChild(heading3);

let heading2 = document.getElementsByTagName("h1")[1];

myDiv.removeChild(heading2)



let heading0 = document.createElement('h1');
let text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);

let mydiv = document.querySelector(".my-div");
let heading01 = document.getElementsByTagName("h1")[1];
mydiv.insertBefore(heading0, heading01)

