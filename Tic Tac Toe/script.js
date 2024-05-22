let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgConatiner = document.querySelector(".msg-conatiner")
let msg = document.querySelector("#msg")

let turnO = true;
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let resetGame = () => {
    turnO = true;
    enableBoxes();
    msgConatiner.classList.add("hide")
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

let disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
let enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

let showWinnwer = (winner) =>{
    msg.innerHTML = `Congratulation , Winner is ${winner}`
    msgConatiner.classList.remove("hide");
    disableBoxes();
}

let checkWinner = () => {
  for (pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val  = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinnwer(pos1Val);
        }
    }
  }
};


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click",resetGame)