document.addEventListener("DOMContentLoaded", function () {
    const menuLateral = document.querySelector(".menu-lateral");
    const barraLateral = document.querySelector(".barra-lateral");
    const botonAbrirCerrar = menuLateral.querySelector("#abrir-cerrar");
    const botonAvirtual = document.getElementById("avirtual");
    barraLateral.style.display = "none";
    botonAbrirCerrar.style.display= "none";
    let barraLateralAbierta = false;

    function guardarBarraLateral() {
        barraLateralAbierta = !barraLateralAbierta;

        if (barraLateralAbierta) {
           
            barraLateral.style.display = "flex";
            botonAbrirCerrar.style.display = "flex";
        } else {
            
            barraLateral.style.display = "none";
            botonAbrirCerrar.style.display = "none";
        }
    }
    

    botonAbrirCerrar.addEventListener("click", guardarBarraLateral);
    botonAvirtual.addEventListener("click", guardarBarraLateral);
});

/*document.addEventListener("DOMContentLoaded", function () {

const inputPregunta = document.getElementById("pregunta");
const areaTexto = document.querySelector(".info-chatbot");
const botonEnviar = document.getElementById("boton-enviar"); 

botonEnviar.addEventListener("click", function () {

  const pregunta = inputPregunta.value;


  areaTexto.innerText = pregunta;


  inputPregunta.value = "";
})

});*/

document.addEventListener("DOMContentLoaded", function () {
    const inputPregunta = document.getElementById("pregunta");
    const areaTexto = document.querySelector(".info-chatbot");
    const botonEnviar = document.getElementById("boton-enviar");
  
    function enviarPregunta() {
      const pregunta = inputPregunta.value;
      areaTexto.innerText = pregunta;
      inputPregunta.value = "";
    }
  
    // Agrega el evento clic al botón
    botonEnviar.addEventListener("click", enviarPregunta);
  
    // Agrega el evento keydown al campo de entrada
    inputPregunta.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        enviarPregunta();
      }
    });
  });
  


