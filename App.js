let timeout;
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let stopwatch = document.getElementById("stopwatch");
let button = document.getElementById("buttonStart");

function start() {
    button.disabled = true;
    timeout = setTimeout(function() {
        milisegundos = parseInt(milisegundos);
        segundos = parseInt(segundos);
        minutos = parseInt(minutos);
        milisegundos++;
 
        if (milisegundos == 100) {
            segundos = segundos + 1;
            milisegundos = 0;
        }
        if (segundos == 60) {
            minutos = minutos + 1;
            segundos = 0;
        }
        
        if(milisegundos<10 && segundos<10){
            stopwatch.innerHTML = '0'+ minutos + ' : 0' + segundos + ' , 0' + milisegundos;
        } else if(milisegundos<10){
            stopwatch.innerHTML = '0'+ minutos + ' : ' + segundos + ' , 0' + milisegundos;
        }else if (segundos < 10){
            stopwatch.innerHTML = '0'+ minutos + ' : 0' + segundos + ' , ' + milisegundos;
        } else {
            stopwatch.innerHTML = '0'+ minutos + ' : ' + segundos + ' , ' + milisegundos;

        }
        start();
    },);
}
 
function stop() {
    clearTimeout(timeout);
    button.disabled=false;
}
 
function reset() {
    clearTimeout(timeout);
    stopwatch.innerHTML = '00 : 00 , 00';
    button.disabled=false;
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
}
