const canvas=document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT= canvas.height= 600;

const PlayerImage=new Image();
PlayerImage.src='run.png';
const imagewidth = 111.12;
const imageheight= 145;

let gameframe=0;
const stagerframe=5;
const spriteFrame=18;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position=Math.floor(gameframe/stagerframe)%spriteFrame;
    let frameX=imagewidth*position;
    let frameY=0;
    ctx.drawImage(PlayerImage, 
    frameX, frameY*imageheight, imagewidth, imageheight,
     150, 0, 300, 500);
    gameframe++
    requestAnimationFrame(animate)
    
}
animate()
