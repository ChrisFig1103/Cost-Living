const celciusInput = document.querySelector(".celcius > input");
const farenheitInput = document.querySelector(".farenheit > input");
const kelvinInput = document.querySelector(".kelvin > input");

function celciusBase(){
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    
    farenheitInput.value = fTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);
}
function farenheitBase(){
    const fTemp = parseFloat(farenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    
    celciusInput.value = cTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);
}
function kelvinBase(){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp =  9/5 * (kTemp - 273)+32;
    
    celciusInput.value = cTemp.toFixed(2);
    farenheitInput.value = fTemp.toFixed(2);
}
function main(){
    celciusInput.addEventListener("input",celciusBase);
    farenheitInput.addEventListener("input",farenheitBase);
    kelvinInput.addEventListener("input",kelvinBase);
}

 main();