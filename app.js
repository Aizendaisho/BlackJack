// let firstCard= parseInt(prompt(`escoje un numero del 2-11`));
// let secondCard= parseInt(prompt(`escoje otro numero del 2-11`));
// let opcion1= document.getElementById(`primerOp`);
// let opcion2= document.getElementById(`segundaOp`);
// let opcion3= document.getElementById(`tercerOp`);



let cards = [];
sum = 0;
let hasBlackJack = false;
let isAlive = false;
let mensaje = ``;
let mensajeEl = document.getElementById(`mensaje-el`);
let sumEl = document.getElementById(`sum-el`);
let cardsEl = document.getElementById(`cards-el`);
let mJugador = document.querySelector(`#jugador`)
let jugador = {
    nombre: `Araldi`,
    dinero: 200

}


mJugador.textContent = jugador.nombre + `: $`+ jugador.dinero ;

function cartaRandom() {
   
    carta = Math.floor(Math.random()*13)+1

    if (carta === 1) {
        return 11
    }else if (carta > 10) {
        return 10
    }else  {
        return carta
    }
   
}

function startGame() {    
   
    isAlive= true;
    hasBlackJack= false;
    let firstCard=cartaRandom();
    let secondCard=cartaRandom();
    cards = [firstCard,secondCard]
    sum= firstCard+secondCard  
    renderGame()

    // pensando en los if
    // juegoNuevo = prompt(`Quieres empezar un juego nuevo? Si o No`)

    // if (juegoNuevo===`Si`) {
    //     isAlive= true;
    //     hasBlackJack= false;
    //     let firstCard=cartaRandom();
    //     let secondCard=cartaRandom();
    //     cards = [firstCard,secondCard]
    //     sum= firstCard+secondCard  
    //     renderGame()
    // }else if (juegoNuevo===`No`) {
    //     renderGame()
    // }else(
    //     alert(`Responda Si o No`)
    // )



  



}

function renderGame() {
        cardsEl.textContent = `Cartas: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '      
    }
    
        sumEl.textContent = `Sum: ${sum}`;

    if (sum<=20) {
        mensaje = `Quieres otra carta?`
      
      } else if ( sum===21){
        mensaje = `BlackJack!`
          hasBlackJack= true;
      } else {
        mensaje =`Perdiste`
          isAlive = false
      }

      mensajeEl.textContent = mensaje
}

function otraCarta() {
    if (isAlive===true && hasBlackJack===false) {
        
        let cartaNueva = cartaRandom();
        sum += cartaNueva;
        cards.push(cartaNueva)
        renderGame()
    }


}







// let problema1 = false
// let problema2 = false

// if (problema1===false && problema2===false) {
//     solucion()
// }

// function solucion() {
//     console.log(`Mostrar solucion...`)
// }


// let documentales = true
// let nuevosInicios = false

// if (documentales===true || nuevosInicios===true) {
//     recomendaciones()
// }

// function recomendaciones() {
//     console.log(`Deberias ver esta peli, podria ser de tu agrado`)
// }


// function rollDice() {
//     let dadoRandom = Math.floor(Math.random()* 6 + 1)
//     return dadoRandom
// }

// console.log(rollDice())


// let player1Time = 102
// let player2Time = 107

// function elMasrapido() {
//     if (player1Time < player2Time) {
//         return player1Time
//     }    else if (player2Time < player1Time){
//         return player2Time
//     }   else{
//         return player1Time
//     }


// }

// function tiempoCarrera() {
//     return player1Time + player2Time
// }

// let tiempoFinal = tiempoCarrera()

// console.log(tiempoFinal)

// let bienvenida = document.querySelector(`#mensaje-Bienvenida`)

// let mensajeje = [
//     `Buenos`,
//     `Dias`,
//     `como`,
//     `Estas?`
// ]

// console.log(mensajeje)
// mensajeje.push(`Muy Bien`)
// mensajeje.push(`Gracias`)
// mensajeje.push(`Espero usted tambien lo este`)
// bienvenida.textContent=`Araldi: `

// function bienvenidas() {
    
//     for (let i = 0; i < mensajeje.length; i++) {
//         bienvenida.textContent+= mensajeje[i]+ ` `
        
//     }

    



// }





// for (let cuenta = 10; cuenta < 101; cuenta+=10) {
//     console.log(cuenta)
    
// }









// let cartass = [7,3,9]
// for (let i = 0; i < cartass.length; i++) {
//     console.log(cartass[i])
    
// }

// let sentencia = [
//     `hola`,
//     `mi`,
//     `nombre`,
//     `es`,
//     `Araldi`
// ];

// let mensajeBienvenida = document.getElementById(`mensaje-Bienvenida`)

// console.log(mensajeBienvenida)

// for (let i = 0; i < sentencia.length; i++) {
    
//     console.log(sentencia[i])
//     mensajeBienvenida.textContent += sentencia[i]+` `;
    
// }



// let mensajes = [
//     `hola como estas?`,
//     `Estoy muy bien y tu?`,
//     `Todo bien, he estado trabajando en mi portafolio`
// ]

// mensajes.push(`Yo tambien mmg`)
// mensajes.push(`Yo tambien msgfsedmg`)
// mensajes.push(`Yo tambien mfmg`)
// mensajes.push(`Yo tambi`)


// for (let i = 0; i < mensajes.length; i+=1) {
//     console.log(mensajes[i])
    
// }




// console.log(mensajes[0])
// console.log(mensajes[1])
// console.log(mensajes[2])
// console.log(mensajes[3])


// if (hasBlackJack==true) {
    
//     opcion2.textContent=`Usted gano, tu si ere duro mio`

// }else {
//     opcion2.textContent=`Uste peldio, diablo que mierda`
// }

// if (isAlive == false) {
//     opcion3.textContent =`te llevo el diablo`
// }




 











// let age = parseInt(prompt(`Inserte edad`));

// if (age<100) {
//     console.log(`Tienes menos de 100 años, no hay corona`)
// } else if (age===100) {
//     console.log(`Tienes ${age}! felicidades tenga su corona`)
// } else {
//     console.log(`tu tiene ma de 100 tigueron`)
// }