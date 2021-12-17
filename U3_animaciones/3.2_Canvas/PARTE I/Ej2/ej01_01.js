console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 300;
canvas.height = 100;

const ctx = canvas.getContext("2d");

let x = 0;
let y = 10;

let velx = 1;

function update() {
    console.log("test");
    x = x + velx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
    ctx.closePath();
    requestAnimationFrame(update);
}

update();
