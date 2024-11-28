const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

content.appendChild(para);

const header = document.createElement("h3");
header.textContent = "Hey I'm blue h3!";
header.style.color = "blue";

content.appendChild(header);

const body = document.querySelector("body");
const divBlack = document.createElement("div");
divBlack.style["border"] = "black";
divBlack.style["background-color"] = "pink";

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div!";
divBlack.appendChild(header1);
const para1 = document.createElement("p");
para1.textContent = "Me too!";
divBlack.appendChild(para1);

body.appendChild(divBlack);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});


const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

