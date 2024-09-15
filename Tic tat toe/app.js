let box = document.querySelectorAll(".btn")
let reset_btn = document.querySelector(".btn1")
let winner = document.querySelector(".msg_container")
let msg = document.querySelector(".msg_container .para")
let reset = document.querySelector(".reset-div")
let new_game = document.querySelector(".msg_container .btn2")
let turnO = true;
let gameOver = false;
let count = 0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

box.forEach((boxes) =>{
    boxes.addEventListener("click",()=>{
        if(gameOver) return;
        if(turnO){
            boxes.innerText = "O";
            turnO = false;
        }else{
            boxes.innerText = "X";
            turnO = true;
        }
        boxes.disabled = true;
        count++
        checkWinner()
        if(count === 9 && !checkWinner()){
            gameDraw()
        }
    })
})

const Winning = (winneris)=>{
    msg.innerText = `Congratulation, the winner is ${winneris}`
    winner.style.visibility = "visible"
}

const checkWinner = ()=>{
    for(let win of winPattern){
        let pos1Val = box[win[0]].innerText;
        let pos2Val = box[win[1]].innerText;
        let pos3Val = box[win[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                gameOver = true;
                disableAllBoxes();
                Winning(pos1Val)
                return;
            }
        }
    }
}

const disableAllBoxes = () =>{
    for(let boxes of box){
        boxes.disabled = true;
    }
}

const enableAllBoxes = () =>{
    for(let boxes of box){
        boxes.innerText = "";
        boxes.disabled = false;
        winner.classList.add("hide");
    }
    winner.style.visibility = "hidden";
}
const resetGame = ()=>{
    turnO = true;
    count = 0;
    gameOver = false;
    enableAllBoxes();
}

const gameDraw = ()=>{
    msg.innerText = "The game is Draw";
    winner.style.visibility = "visible";
    disableAllBoxes();
}

reset.addEventListener("click",resetGame)
new_game.addEventListener("click",resetGame)
