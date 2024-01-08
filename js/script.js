const input = document.querySelector(".var1")
const output = document.querySelector(".var2")
const convert = document.querySelector(".action")
const currency = document.querySelector(".select1")
const outputCurrency = document.querySelector(".select2")

const euroK = 41.5730;
const usdK = 38.0775;

convert.addEventListener("click", function(){
    let res;
    const valueI = input.value
    if(currency.value==="uah"&&outputCurrency.value==="euro"){
        res = input.value/euroK;
    }else if(currency.value==="uah"&&outputCurrency.value==="usd"){
        res = input.value/usdK;
    }else if(currency.value==="euro"&&outputCurrency.value==="uah"){
        res = input.value*euroK
    }else if(currency.value==="usd"&&outputCurrency.value==="uah"){
        res = input.value*usdK
    }else if((currency.value==="uah"&&outputCurrency.value==="uah")||(currency.value==="euro"&&outputCurrency.value==="euro")||(currency.value==="usd"&&outputCurrency.value==="usd")){
        res = 0
    }
    output.value = res.toFixed(2)
})