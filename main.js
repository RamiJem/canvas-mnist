import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `

    <canvas id="canvas"> </canvas>

`

// setupCounter(document.querySelector('#counter'))

var canvas = document.getElementById('canvas');


// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };
let button = document.getElementById("clear")
window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);
button.addEventListener("click", clear)

function clear(e) {
  console.log("hey")
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX - window.innerWidth/4;
  pos.y = e.clientY - window.innerHeight/4;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.innerWidth/2;
  ctx.canvas.height = window.innerHeight/2;
}

function draw(e) {

  if (e.buttons !== 1) return;
  // window.innerWidth-canvas.wi

  ctx.beginPath();

  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

