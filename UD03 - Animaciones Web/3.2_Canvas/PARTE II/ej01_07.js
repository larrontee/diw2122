console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

//-- Velocidades del objeto
let velx = 3;
let vely = 1;

//-- Funcion principal de animacion
function update() {
    console.log("test");
    let colorRelleno = cambiaColor();
    //-- Algoritmo de animacion:
    //-- 1) Actualizar posicion del  elemento
    //-- (física del movimiento rectilineo uniforme)

    //-- Condicion de rebote en extremos verticales del canvas
    if (x < 0 || x >= (canvas.width - 20)) {
        velx = -velx;
        ctx.fillStyle = colorRelleno;
        ctx.fill();
    }

    //-- Condición de rebote en extremos horizontales del canvas
    if (y <= 0 || y > canvas.height - 20) {
        vely = -vely;
        ctx.fillStyle = colorRelleno;
        ctx.fill();
    }

    //-- Actualizar la posición
    x = x + velx;
    y = y + vely;

    //-- 2) Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //-- 3) Dibujar los elementos visibles
    ctx.beginPath();
    ctx.rect(x, y, 20, 20);

    //-- Dibujar
    ctx.fillStyle = "";

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
    ctx.closePath();

    //-- 4) Volver a ejecutar update cuando toque
    requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
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
