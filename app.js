let buttons = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
// console.log(buttons);
let newgamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let turn0 = true; // true = o, false = x
const winpattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

resetbtn.addEventListener("click",(e)=>{
    buttons.forEach((button) => {
        button.innerHTML = "";
        button.disabled = false;
    })
    msgcontainer.classList.add("hide");
})

newgamebtn.addEventListener("click",(e)=>{
    buttons.forEach((button) => {
        button.innerHTML = "";
        button.disabled = false;
    })
    msgcontainer.classList.add("hide");
})

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log("clicked");
        if (turn0) {
            button.innerHTML = 'O';
            turn0 = false;
        }
        else {
            button.innerHTML = 'X';
            turn0 = true;
        }
        button.disabled = true;
        for(let ind of winpattern){
            let x = buttons[ind[0]].innerText;
            let y = buttons[ind[1]].innerText;
            let z = buttons[ind[2]].innerText;
            if(x === y && y === z && x !== ""){
                // console.log("win");
                msg.innerHTML = `${x} is the winner`;
                msgcontainer.classList.remove("hide");
                buttons.forEach((button) => {
                    button.disabled = true;
                })
            }
        }
    })

})