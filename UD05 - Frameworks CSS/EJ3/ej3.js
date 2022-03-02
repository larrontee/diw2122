let datosPoke;
let tabla;
window.onload = function () {
    hacerPeticion();
    tabla = document.getElementById("tabla");
};


function hacerPeticion() {
    fetch('https://pokeapi.co/api/v2/pokemon/25')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            datosPoke = data;
            procesarDatos(datosPoke)
        })
        .catch((err) => console.log(err));
}

function procesarDatos(datos) {

    let nuevosDatos = datos["sprites"]["versions"];
    let primeraGen = nuevosDatos["generation-i"]["red-blue"];
    let segundaGen = nuevosDatos["generation-ii"]["gold"];
    let terceraGen = nuevosDatos["generation-iii"]["emerald"];
    let cuartaGen = nuevosDatos["generation-iv"]["platinum"];
    let quintaGen = nuevosDatos["generation-v"]["black-white"];
    let sextaGen = nuevosDatos["generation-vi"]["x-y"];
    let septimaGen = nuevosDatos["generation-vii"]["ultra-sun-ultra-moon"];
    let generaciones = [primeraGen, segundaGen, terceraGen, cuartaGen, quintaGen, sextaGen, septimaGen];
    let generacionesNombres = ["primeraGen", "segundaGen", "terceraGen", "cuartaGen", "quintaGen", "sextaGen", "septimaGen"];
    let images = [];
    console.log(nuevosDatos);
    console.log(generaciones);


    for (let i = 0; i < generaciones.length; i++) {
        images.push(generaciones[i]["front_default"])
    }
    // console.log(images);
    // nuevosDatosdatos.forEach(element => urls.push(element.url));
    generarCollection(images, generacionesNombres);


}



function generarCollection(imagenes, nombres) {
    let UL = document.createElement("ul");
    UL.className = "collection";

    for (let i = 0; i < imagenes.length; i++) {
        let LI = document.createElement("li");
        LI.className = "collection-item avatar";
        let IMG = document.createElement("img");
        IMG.src = imagenes[i];
        let P = document.createElement("p");
        P.appendChild(document.createTextNode(nombres[i]));
        LI.appendChild(P);
        LI.appendChild(IMG);
        UL.appendChild(LI);
        console.log("hola")
    }
    tabla.appendChild(UL);
}