let resultado = 0;
let resultadoDos = 0;
let valor = 0;
let valorDos = 0;
let valorTres = 0;
let valorCuatro = 0;
let valorCinco = 0;
let valorSeis = 0;


function userName() {
    //console.log("click");//
    let usuarioNombre = document.getElementById("inputName").value;
    console.log(usuarioNombre);
    // aca llamamos al usuarioNombre para q saliera despues del hola y el hola no cambie
    let hello = document.getElementById("saludo");
    hello.innerText = "Hola " + usuarioNombre;//la propiedad innerText inserta un valor a una variable
    document.getElementById("opciones").style.display = "block";
    document.getElementById("inicio").style.display = "none";
  }

//Categoría Harry Potter///////////////////////////////////////////////////////////////////////////////////

function catHarry() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("preguntaUno").style.display = "block";
    }

function nextQuestHp() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("preguntaUno").style.display = "none";
    document.getElementById("preguntaDos").style.display = "block";
    seleccionar();
    }

function nextQuestTwoHp() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("preguntaUno").style.display = "none";
    document.getElementById("preguntaDos").style.display = "none";
    document.getElementById("preguntaTres").style.display = "block";
    seleccionarDos();
    //document.getElementById("resultados").style.display = "block";//
    //document.getElementById("preguntaDosVol").style.display = "none";//
    }

function nextQuestThreeHp() {
    seleccionarTres();
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("preguntaUno").style.display = "none";
    document.getElementById("preguntaDos").style.display = "none";
    document.getElementById("preguntaTres").style.display = "none";
    document.getElementById("resultados").style.display = "block"; 
    
    fin();
    let resultadosPtos = document.getElementById('fin');
    resultadosPtos.innerText = "Respuestas correctas : " + resultado;   
    //document.getElementById("preguntaDosVol").style.display = "none";//
    }

//Fin Categoría Harry Potter///////////////////////////////////////////////////////////////////////////////////

  //aqui agregrar el contado, hacer la prueba del una si toma la respuesta que sume uno a la correcta
  // hacer un alert si da resultado

//Categoría Voldemort///////////////////////////////////////////////////////////////////////////////////

function catVoldemort() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("preguntaUno").style.display = "none";
    document.getElementById("preguntaDos").style.display = "none";
    document.getElementById("preguntaTres").style.display = "none";
    document.getElementById("preguntaUnoVol").style.display = "block";
    
    }

function nextQuestFour() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("preguntaUno").style.display = "none";
    document.getElementById("preguntaDos").style.display = "none";
    document.getElementById("preguntaTres").style.display = "none";
    document.getElementById("preguntaUnoVol").style.display = "none";
    document.getElementById("preguntaDosVol").style.display = "block";
    seleccionarCuatro();
    }

function nextQuestFive() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("preguntaUno").style.display = "none";
    document.getElementById("preguntaDos").style.display = "none";
    document.getElementById("preguntaTres").style.display = "none";
    document.getElementById("preguntaUnoVol").style.display = "none";
    document.getElementById("preguntaDosVol").style.display = "none";
    document.getElementById("preguntaTresVol").style.display = "block";
    seleccionarCinco();
    }

function nextQuestSix() {
    seleccionarSeis();
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("preguntaUno").style.display = "none";
    document.getElementById("preguntaDos").style.display = "none";
    document.getElementById("preguntaTres").style.display = "none";
    document.getElementById("preguntaUnoVol").style.display = "none";
    document.getElementById("preguntaDosVol").style.display = "none";
    document.getElementById("preguntaTresVol").style.display = "none";
    document.getElementById("resultados").style.display = "block";
    finDos();
    let resultadosPtosDos = document.getElementById('fin');
    resultadosPtosDos.innerText = "Respuestas correctas : " + resultadoDos;  
    }

//Fin Voldemort///////////////////////////////////////////////////////////////////////////////////

// hara volver a la seccion de categorias, ambas opciones lleguen a esta pagina de resultados donde esta este boton//
function playAgain() {
    resultado = 0;
    resultadoDos = 0;
  document.getElementById("resultados").style.display = "none";
  document.getElementById("opciones").style.display = "block";
}



function seleccionar(){
    if(document.preguntaUno.frente[1].checked){// usamos if porque es un condicionante que sigf si se cumple lo escrito funciona//
        alert("¡Haz acertado!"); 
        valor = 1;
        }
}

function seleccionarDos(){
    if(document.preguntaDos.quidditch[1].checked){
        alert("¡Haz acertado!"); 
        valorDos = 1;
        }
}

function seleccionarTres(){
    if(document.preguntaTres.sauco[2].checked){
        alert("¡Haz acertado!"); 
        valorTres = 1;
        }
}

function seleccionarCuatro(){
    if(document.preguntaUnoVol.hogwarts[2].checked){
        alert("¡Haz acertado!"); 
        valorCuatro = 1;
        }
}

function seleccionarCinco(){
    if(document.preguntaDosVol.nombrado[2].checked){
        alert("¡Haz acertado!"); 
        valorCinco = 1;
        }
}

function seleccionarSeis(){
    if(document.preguntaTresVol.tomryddle[1].checked){
        alert("¡Haz acertado!"); 
        valorSeis = 1;
        }
}



    function fin(){
        resultado = valor + valorDos + valorTres;// esto se visualiza en la ultima hoja, vemos cuantos puntos ganamos//
        alert(resultado);
    }

    function finDos(){
        resultadoDos = valorCuatro + valorCinco + valorSeis;
        alert(resultadoDos);
        }


        