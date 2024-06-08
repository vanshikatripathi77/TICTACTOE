console.log("Welcome to Tic-Tac-Toe Game");
let audioturn=new Audio("music.wav");
let gameover=new Audio("gameovermusic.wav");
let turn="X";
let isgameover=false;
const changeturn=()=>{
    return turn === "X"? "0": "X"
}
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxitem');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[[e[2]]].innerText) && boxtexts[e[0]].innerText!==''){
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" Wins"
            isgameover=true;
            document.querySelector(".imginfo").getElementsByTagName("img")[0].style.width="250px";
            gameover.play();
        }
    })
}
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxitem=element.querySelector('.boxitem');
    element.addEventListener('click',()=>{
        if(boxitem.innerText===''){
            boxitem.innerText=turn;
            turn=changeturn();
            audioturn.play();
            checkwin()
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})
reset.addEventListener('click',()=>{
    let boxitem=document.querySelectorAll('.boxitem');
    Array.from(boxitem).forEach(element=>{
        element.innerText=" ";
    })
    turn="X";
    isgameover=false;
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector(".imginfo").getElementsByTagName("img")[0].style.width="0px";
})
