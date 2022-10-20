//////////////////////////////////////VARIABLES Y CONSTANTES PARA OBTENER VALORES Y ASIGNAR VALORES
const tryShow = document.getElementById('try');
let revealCards = 0;
let result = 0;
///////////////////////////////////////////////////
let buttons = [1,1,
               2,2,
               3,3,
               4,4,  
               5,5,  ////ARRAY PARA NUMERACION DE BOTONES POR PAR
               6,6,
               7,7,
               8,8];
///////////////////////////////////////////////////
buttons = buttons.sort(function(){return Math.random() - 0.3}) ///FUNCION PARA ORDENAR Y OBTENER RANDOM

/////////////////////////////////////FUNCION PARA CONDICIONES PARA VOLTEAR CATA IMAGEN UNA A LA VEZ
function showButton(id){

  if (revealCards == 0){
    let buttonOne = document.getElementById(id);   
    b1 = buttons[id]; 
    buttonOne.innerHTML = `<img src="/img/${b1}.jpg" alt="">`;
    buttonOne.disabled = true;
    revealCards++;

    idOne = id;

  }else if (revealCards == 1){
    let buttonSecond = document.getElementById(id);
    b2 = buttons[id];
    buttonSecond.innerHTML = `<img src="/img/${b2}.jpg" alt="">`;
    buttonSecond.disabled = true;
    revealCards++;

    idSecond = id;


    if(b1 == b2){
      revealCards = 0;
      result++;
    }else{
      setTimeout(()=>{
        buttonOne = document.getElementById(idOne);
        buttonOne.innerHTML = ' ';
        buttonOne.disabled = false;
        buttonSecond = document.getElementById(idSecond);
        buttonSecond.innerHTML = ' ';
        buttonSecond.disabled = false; 
        revealCards = 0;
      },1000)
      
    }
  }

  ///////////////////////////CONDICION PARA GAME OVER CUANDO SE ENCUENTREN LOS 8 PARES
  
  if (result == 8){
    tryShow.innerHTML = "Game Over";
  }
}

