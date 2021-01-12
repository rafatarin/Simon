var boton1 = document.getElementById("boton1")
var boton2 = document.getElementById("boton2")
var boton3 = document.getElementById("boton3")
var boton4 = document.getElementById("boton4")

var boton = [boton1, boton2, boton3, boton4];
var sumador = 0;
var aleatorio = [];
var combinacionJugador = [];



function turnoOrdenador() {
  var aleatorioBotones = parseInt(Math.random() * (3 + 1));
  

  aleatorio.push(aleatorioBotones)
  combinacionPartida.push(aleatorioBotones);
  sumador++;
  for (let c = 0; c < combinacionPartida.length; c++) {
    setTimeout(()=> {
      animacionColor() },1000*(c));
      function animacionColor() {
        boton[combinacionPartida[c]].classList.add("animacion");
          setTimeout(()=>{
            boton[combinacionPartida[c]].classList.remove("animacion");
          }, 500);
      }
      }
      
  console.log(aleatorioBotones)
  combinacionJugador = [];
 
}

var combinacionPartida = [];


document.getElementById("jugar").addEventListener("click", turnoOrdenador)




function turnoJugador() {
  var numConvertido = parseInt(this.name);
  combinacionJugador.push(numConvertido);
  console.log(combinacionPartida)
  console.log(combinacionJugador)
  

  for (let h = 0; h < combinacionJugador.length; h++) {
    boton[combinacionJugador[h]].classList.remove("animacion")
    
    if (combinacionJugador[h] != combinacionPartida[h]) {
      
      document.getElementById("recordNumero").textContent = combinacionPartida.length-1;      
      combinacionPartida = [];
        combinacionJugador = [];
        alert("HAS PERDIDO")
      break;

    }
  }
}

var contadorPartida = 0;
var botones = document.getElementsByClassName("botones");

for (let i = 0; i <= 3; i++) {
  botones[i].addEventListener("click", turnoJugador);
}