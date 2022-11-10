//////////////////////////////////////VARIABLES Y CONSTANTES PARA OBTENER VALORES Y ASIGNAR VALORES
const tryShow = document.getElementById('try');
let revealCards = 0;
let result = 0;
let buttonOne = [];
let buttonSecond = [];
let buttonsAll = [];
let counterOne = 0;
let counterAll = 0;

///////////////////////////////////////////////////
let buttons = [1,1,2,2,3,3,4,4,  
               5,5,6,6,7,7,8,8,
               9,9,10,10,11,11,12,12,
               13,13,14,14,15,15,16,16,
               17,17,18,18,19,19,20,20,  /////ARRAY PARA POSICIONES DE IMAGENES Y NOMBRES PARA IDENTIFICACION
               21,21,22,22,23,23,24,24,
               25,25,26,26,27,27,28,28,
               29,29,30,30,31,31,32,32];
///////////////////////////////////////////////////
buttons = buttons.sort(function(){return Math.random() - 0.5}) ///FUNCION PARA DESORDENAR Y OBTENER RANDOM EN CADA JUEGO
buttons = buttons.slice(0,8); /////OBTENCION DE LOS PRIMERAS 8 POSICIONES DEL ARRAY DESORDENADO PARA EL PRIMER PAR DE IMAGENES
buttonsAll = buttons.slice(); /////COPIAMOS EL ARRAY buttons a uno nuevo buttonsAll PARA QUE CONTENGA LOS MISMO PARES DE IMAGENES Y CONCUERDEN
console.log('PrimerPar',buttons);
console.log('SegundoPar',buttonsAll);
buttonsAll = buttonsAll.concat(buttons);
console.log('ArrayAll',buttonsAll); //////CONCATENAMOS O FUSIONAMOS LOS DOS ARRAYS PARA MANEJARLO EN LA VARIABLE DE LAS CONDICIONES
buttonsAll = buttonsAll.sort(function(){return Math.random() - 0.5})//////VOLVEMOS A DESORDENAR LA LISTA PARA OBETENER RANDOM Y LAS IMAGENES SE MUESTRE EN DIFERENTES PSOSICIOONES


/////////////////////////////////////FUNCION PARA CONDICIONES PARA VOLTEAR CATA IMAGEN UNA A LA VEZ
function showButton(id){

  if (revealCards == 0){
    buttonOne = document.getElementById(id);   
    b1 = buttonsAll[id]; 
    buttonOne.innerHTML = `<img src="/img/${b1}.jpg" alt="">`;
    // buttonOne.classList.remove("btn","btn-dark","btn-md")
    buttonOne.disabled = true;
    revealCards++;

    idOne = id; 

  }else if (revealCards == 1){ 
    buttonSecond = document.getElementById(id);
    b2 = buttonsAll[id];
    buttonSecond.innerHTML = `<img src="/img/${b2}.jpg" alt="">`;
    // buttonSecond.classList.remove("btn","btn-dark","btn-md")
    buttonSecond.disabled = true;
    revealCards++; 

    idSecond = id; 


    if(b1 == b2){
      buttonOne.classList.remove("btn","btn-dark","btn-md")
      buttonSecond.classList.remove("btn","btn-dark","btn-md")
   
      buttonOne.classList.remove("btn", "btn-danger", "btn-md");
      buttonSecond.classList.remove("btn", "btn-danger", "btn-md");

      buttonOne.classList.add("btn","btn-success","btn-md")
      buttonSecond.classList.add("btn","btn-success","btn-md")
      console.log(buttonOne)
      revealCards = 0;
      result++;
    }else{
      buttonOne.classList.remove("btn","btn-dark","btn-md")
      buttonSecond.classList.remove("btn","btn-dark","btn-md")

      buttonOne.classList.add("btn", "btn-danger", "btn-md");
      buttonSecond.classList.add("btn", "btn-danger", "btn-md");
   
      setTimeout(()=>{
        buttonOne = document.getElementById(idOne);
        buttonSecond = document.getElementById(idSecond);

        buttonOne = document.getElementById(idOne);
        buttonOne.innerHTML = ' ';
        buttonOne.disabled = false;
        buttonSecond = document.getElementById(idSecond);
        buttonSecond.innerHTML = ' ';
        buttonSecond.disabled = false; 
        revealCards = 0;

        buttonOne.classList.remove("btn", "btn-danger", "btn-md");
        buttonSecond.classList.remove("btn", "btn-danger", "btn-md");
        buttonOne.classList.add("btn", "btn-dark", "btn-md");
        buttonSecond.classList.add("btn", "btn-dark", "btn-md");
      },1000)
        // buttonOne.classList.add("btn","btn-danger","btn-md")
        // buttonSecond.classList.add("btn","btn-danger","btn-md")
    }
  }

  ///////////////////////////CONDICION PARA GAME OVER CUANDO SE ENCUENTREN LOS 8 PARES
  
  if (result == 8){
    tryShow.innerHTML = "Game Over";
  }
}
/////////////////////////////FUNCION PARA EL CONTADOR DE INTENTOS
function counter(){
  counterOne ++;
  if(counterOne % 2 == 0){
    counterAll ++;
  }
  tryShow.innerHTML = `Intentos: ${counterAll}`;
}


