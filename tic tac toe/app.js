let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbutton");
let newgamebtn=document.querySelector("#newbutton");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[3,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("box is clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();

    });
});
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
     
}
const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=> {
    for(let pattern of winpatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val!=""&& pos2val!="" && pos3val!="")
    {
        if(pos1val===pos2val && pos2val===pos3val)
        {
            console.log("winner",pos1val);
            showwinner(pos1val);
        }
    }
}

}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);