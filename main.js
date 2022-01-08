const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000;
const request = require('request-promise');

app.listen(PORT, ()=>console.log (`Example app listening on port ${PORT}`))

request(`https://freecurrencyapi.net/api/v2/latest?apikey=3a04fe00-68de-11ec-b8a6-0bf8cfad6df8`)
.then(response => {
    data = JSON.parse(response).data
    console.log(data)
})
.catch(error => {
    console.log(error)
})
 