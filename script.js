// YOUR CODE HERE
console.log("Script Running.");

// Connecting the first switch to lightbulbs 3 & 8
const switch1 = document.querySelector("#switch1");

const change38 = () => {
    const light3 = document.querySelector("#lightbulb3");
    const light8 = document.querySelector("#lightbulb8");
    light3.classList.toggle("active");
    light8.classList.toggle("active");
}

switch1.addEventListener('change', change38);


// Connecting the second switch to lightbulbs 1 & 7
const switch2 = document.querySelector("#switch2");

const change17 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light7 = document.querySelector("#lightbulb7");
    light1.classList.toggle("active");
    light7.classList.toggle("active");
}

switch2.addEventListener('change', change17);


// Connecting the third switch to lightbulbs 4, 6 & 8
const switch3 = document.querySelector("#switch3");

const change468 = () => {
    const light4 = document.querySelector("#lightbulb4");
    const light6 = document.querySelector("#lightbulb6");
    const light8 = document.querySelector("#lightbulb8");
    light4.classList.toggle("active");
    light6.classList.toggle("active");
    light8.classList.toggle("active");
}

switch3.addEventListener('change', change468);


// Connecting the fourth switch to lightbulbs 2 & 9
const switch4 = document.querySelector("#switch4");

const change29 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light9 = document.querySelector("#lightbulb9");
    light2.classList.toggle("active");
    light9.classList.toggle("active");
}

switch4.addEventListener('change', change29);

// Connecting the fifth switch to lightbulbs 5 & 7
const switch5 = document.querySelector("#switch5");

const change57 = () => {
    const light5 = document.querySelector("#lightbulb5");
    light5.classList.toggle("active");
    const light7 = document.querySelector("#lightbulb7");
    light7.classList.toggle("active");
}

switch5.addEventListener('change', change57);


// Connecting the sixth switch to lightbulbs 1 & 4
const switch6 = document.querySelector("#switch6");

const change14 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light4 = document.querySelector("#lightbulb4");
    light1.classList.toggle("active");
    light4.classList.toggle("active");
}

switch6.addEventListener('change', change14);


// Connecting the seventh switch to lightbulbs 2 & 3
const switch7 = document.querySelector("#switch4");

const change23 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
}

switch7.addEventListener('change', change23);


// Connecting the eighth switch to lightbulbs 5 & 9
const switch8 = document.querySelector("#switch8");

const change59 = () => {
    const light5 = document.querySelector("#lightbulb5");
    const light9 = document.querySelector("#lightbulb9");
    light5.classList.toggle("active");
    light9.classList.toggle("active");
}

switch8.addEventListener('change', change59);


// Connecting the ninth switch to lightbulbs 6 & 7
const switch9 = document.querySelector("#switch9");

const change67 = () => {
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
}

switch9.addEventListener('change', change67);


// Master Switch: toggles all lights and leaves switches in their current state
const masterSwitch = document.querySelector("#master-switch")

const changeAll = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    const light4 = document.querySelector("#lightbulb4");
    const light5 = document.querySelector("#lightbulb5");
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    const light8 = document.querySelector("#lightbulb8");
    const light9 = document.querySelector("#lightbulb9");
    light1.classList.toggle("active");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
    light4.classList.toggle("active");
    light5.classList.toggle("active");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
    light8.classList.toggle("active");
    light9.classList.toggle("active");
}

masterSwitch.addEventListener('change', changeAll);


// Restarting the switches
const restartButton = document.querySelector("#restart-button");

const restartSwitches = () => {
    // query selectors for lightbulbs
    const light1 = document.querySelector("#lightbulb1");
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    const light4 = document.querySelector("#lightbulb4");
    const light5 = document.querySelector("#lightbulb5");
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    const light8 = document.querySelector("#lightbulb8");
    const light9 = document.querySelector("#lightbulb9");

    // removing the active class from the lightbulbs
    light1.classList.remove("active");
    light2.classList.remove("active");
    light3.classList.remove("active");
    light4.classList.remove("active");
    light5.classList.remove("active");
    light6.classList.remove("active");
    light7.classList.remove("active");
    light8.classList.remove("active");
    light9.classList.remove("active");

    // switches back to original position
}

restartButton.addEventListener("click", restartSwitches);


// randomizing the lights
const randomizeButton = document.querySelector("#randomize-button");

const randomizingLights = () => {
}