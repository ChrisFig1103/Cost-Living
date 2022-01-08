const usd_input = document.querySelector("#usd");
const jpy_input = document.querySelector("#jpy");
const cad_input = document.querySelector("#cad");
const mxn_input = document.querySelector("#mxn");
const eur_input = document.querySelector("#eur");

const dollar = 1
const jpy = 115.53276
const cad = 1.2644
const  mxn = 20.36604
const eur = 0.88022

function usdBase(){
    const usdTemp = parseFloat(usd_input.value)
    const jpyTemp = usdTemp * jpy
    const cadTemp = usdTemp * cad
    const mxnTemp = usdTemp * mxn
    const eurTemp = usdTemp * eur

    //fTemp.toFixed(2);
    jpy_input.value = jpyTemp
    cad_input.value = cadTemp
    mxn_input.value = mxnTemp
    eur_input.value = eurTemp
}

function jpyBase(){
    const jpyTemp = parseFloat(jpy_input.value)
    const usdTemp = jpyTemp / jpy 
    const cadTemp = usdTemp * cad
    const mxnTemp = usdTemp * mxn
    const eurTemp = usdTemp * eur

    usd_input.value = usdTemp
    cad_input.value = cadTemp
    mxn_input.value = mxnTemp
    eur_input.value = eurTemp
}

function cadBase(){
    const cadTemp = parseFloat(cad_input.value)
    const usdTemp = cadTemp / cad
    const jpyTemp = usdTemp * jpy
    const mxnTemp = usdTemp * mxn
    const eurTemp = usdTemp * eur

    jpy_input.value = jpyTemp
    usd_input.value = usdTemp
    mxn_input.value = mxnTemp
    eur_input.value = eurTemp
}

function mxnBase(){
    const mxnTemp = parseFloat(mxn_input.value)
    const usdTemp = mxnTemp / mxn
    const jpyTemp = usdTemp * jpy
    const cadTemp = usdTemp * cad
    const eurTemp = usdTemp * eur

    jpy_input.value = jpyTemp
    usd_input.value = usdTemp
    cad_input.value = cadTemp
    eur_input.value = eurTemp
}
 
function eurBase(){
    const eurTemp = parseFloat(eur_input.value)
    const usdTemp = eurTemp / eur
    const jpyTemp = usdTemp * jpy
    const cadTemp = usdTemp * cad
    const mxnTemp = usdTemp * mxn

    jpy_input.value = jpyTemp
    usd_input.value = usdTemp
    cad_input.value = cadTemp
    mxn_input.value = mxnTemp
}

function main(){
    usd_input.addEventListener("input",usdBase); 
    jpy_input.addEventListener("input",jpyBase); 
    cad_input.addEventListener("input",cadBase);
    mxn_input.addEventListener("input",mxnBase);
    eur_input.addEventListener("input",eurBase);
}

 main();