/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito. */

/* BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInArray(elemento, array) {
    for (var i = 0; i< array.length; i++) {
        if (elemento == array[i]) {
            return true;
        }
    }
    return false
}

var bombe = [];
var tentativi = [];
var tentativiMax = 84;
var punteggio = 0;

while (bombe.length < 16) {
    var bombaSingola = randomNumber(1, 100);
    if (!isInArray(bombaSingola, bombe)) {
        bombe.push(bombaSingola);
    }
}

//bombe.sort(function(a, b){return a-b});
console.log(bombe);

var gameover = false;
while (tentativi.length < tentativiMax && gameover == false) {

    do {
        var tentativoUtente = parseInt(prompt("inserisci un numero da 1 a 100"));
    } while (tentativoUtente < 1 || tentativoUtente > 100 || isNaN(tentativoUtente) || isInArray(tentativoUtente, tentativi));

    if (isInArray(tentativoUtente, bombe)) {
        gameover = true
        console.log("Punteggio:",punteggio);
        alert("HAI PERSO!\nIl tuo punteggio è " + punteggio);
    } else {
        // console.log(tentativoUtente);
        tentativi.push(tentativoUtente);
        punteggio++;
    }
}

if (gameover == false) {
    console.log("Punteggio:",punteggio);
    alert("HAI VINTO!\nIl tuo punteggio è " + punteggio);
}
console.log(tentativi);