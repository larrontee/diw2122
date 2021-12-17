console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 100;

const ctx = canvas.getContext("2d");

let x = 0;
let y = 10;
let velx = 3;
let vely = 1;
let contador = 0;
let n = 2;

function update() {
    let colorRelleno = cambiaColor();
    console.log(contador);

    if (x < 0 || x >= (canvas.width - 20)) {
        velx = -velx;
        ctx.fillStyle = colorRelleno;
        ctx.fill();
        contador += 1;
        console.log("velocidadx  " + velx);
        console.log("contador" + contador);
    }

    if (y <= 0 || y > canvas.height - 20) {
        vely = -vely;
        ctx.fillStyle = colorRelleno;
        ctx.fill();
        contador += 1;
        console.log("velocidady  " + vely);
        console.log("contador" + contador);
    }

    if (contador == n) {
        if (vely >= 0.2) {
            vely = vely * -1;
            vely += -0.2;
            vely = vely * -1;
        } else if (vely <= -0.2) {
            vely += -0.2;
        } else if (vely < 0.2 && vely > -0.2) {
            vely = 0;
        }
        if (velx >= 0.2) {
            velx = velx * -1;
            velx += -0.2;
            velx = velx * -1;
        } else if (velx <= -0.2) {
            velx += -0.2;
        } else if (velx < 0.2 && velx > -0.2) {
            velx = 0;
        }



        contador = 0;
        console.log("contador" + contador);

    }

    x = x + velx;
    y = y + vely;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(x, y, 20, 20);

    ctx.fillStyle = "";

    ctx.fill();

    ctx.stroke()
    ctx.closePath();

    requestAnimationFrame(update);
}

update();


function cambiaColor() {
    let num = Math.floor(Math.random() * (7 - 1) + 1)
    let color = ""
    switch (num) {
        case 1:
            color = "red";
            break;
        case 2:
            color = "green";
            break;
        case 3:
            color = "yellow";
            break;
        case 4:
            color = "blue";
            break;
        case 5:
            color = "purple";
            break;
        case 6:
            color = "white";
            break;
    }
    return color;
}
