const usd_input = document.querySelector(".usd > input");
const jpy_input = document.querySelector(".jpy > input");
const cad_input = document.querySelector(".cad > input");
const mxn_input = document.querySelector(".mxn > input");
const eur_input = document.querySelector(".eur > input");


function usdBase(){
    const usdTemp = 1 
    const jpyTemp = 0
    const cadTemp = 0
    const mxnTemp = 0
    const eurTemp = 0

    /*
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    farenheitInput.value = fTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);*/
}
 
function jpyBase(){
    const usdTemp = 0 
    const jpyTemp = 1
    const cadTemp = 0
    const mxnTemp = 0
    const eurTemp = 0
}
function cadBase(){
  
}
function mxnBase(){
  
}
function eurBase(){
  
}
function main(){
    usd_input.addEventListener("input",usdBase); 
    jpy_input.addEventListener("input",jpyBase); 
    cad_input.addEventListener("input",cadBase);
    mxn_input.addEventListener("input",mxnBase);
    eur_input.addEventListener("input",eurBase);
}

 main();