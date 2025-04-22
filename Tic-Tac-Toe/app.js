let boxBtn=document.querySelectorAll(".box");
let turn0=true;

const winning=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

boxBtn.forEach((box23)=>{
    box23.addEventListener("click",()=>{
        console.log("box is click")
        
        if(turn0==true){
            box23.innerHTML="0"
            turn0=false;
        }else{
            box23.innerHTML="X"
            turn0=true;
        }
        box23.disabled=true;
        winning_check();
    })
})

const winning_check=()=>{
    for(let win of winning){
        console.log(boxBtn[win[0]].innerHTML,boxBtn[win[1]].innerHTML,boxBtn[win[2]].innerHTML);
    }

}
