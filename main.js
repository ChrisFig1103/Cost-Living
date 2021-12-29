const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000;
const request = require('request-promise');

app.listen(PORT, ()=>console.log (`Example app listening on port ${PORT}`))


request(`https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.currencyapi_key}`)
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error)
})
request(`https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.currencyapi_key}&base_currency=USD`)
.then(response => {
console.log(response)
})
.catch(error => {
console.log(error)
})