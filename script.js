let respuestas = []
const botones = document.getElementsByClassName("btn-option");
var respuesta;

for (let i = 0; i < botones.length; i++) {
    console.log(botones[i])
    botones[i].onclick = function() {
       console.log(this.value);
       respuesta = this.value;
    }
}


const botonEnviar = document.getElementById("enviar")
console.log(botonEnviar)
botonEnviar.onclick = function() {
    respuestas.push(respuesta)
    console.log(respuestas);
}