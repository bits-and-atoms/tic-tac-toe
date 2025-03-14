let buttons = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turn0 = true; // true = o, false = x
const winpattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log("clicked");
        if (turn0) {
            button.innerHTML = 'O';
            turn0 = false;
        }
        else {
            button.innerHTML = 'X';
            turn0 = true;
        }
        button.disabled = true;
    })

})