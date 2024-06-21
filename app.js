let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector(".new-btn");

turnO = true;


let winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let count = 0 ;

boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
            count++;
        }else{
            box.innerText = "X";
            turnO = true;
            count++;
        }   
        box.disabled = true;    // only for one box
        cheackWinner();
    })
    
})


let cheackWinner = () => {

    for(pattern of winPattern){
       
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
                disableBox();   // for all boxes
            }else if(count == 9){
                    
                    showDraw();
                  
            }
        }

    }

}

let showWinner = (winner) =>{
    msgContainer.classList.remove("hide");
    msg.innerText = `winner is ${winner}`;
}

let showDraw = () =>{
    msgContainer.classList.remove("hide");
    msg.innerText = `Match is draw , try again`;
    count = 0;
}

let disableBox = () =>{
    boxes.forEach((box)=>{
        box.disabled = true;
    })
    
}

let enableBox = () =>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "" ;
    })
}

let resetGame = () =>{
   turnO = true;
    enableBox();
    msgContainer.classList.add("hide")
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);