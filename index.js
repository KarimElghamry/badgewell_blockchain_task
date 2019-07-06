const express = require('express'); //requires express package
const ethereum = require('./ethereum'); //requires the ethereum file that contains the function that runs the smart contract (written by me)
const eos = require('./eos');//requires the eosio file that contains the function that runs the smart contract (written by me)

const app = express(); //init express
const port = 3000; //local host  port 3000


app.get('/', (req, res) => {
    res.send("make a POST request to <b>http://localhost:3000/eth</b> or <b>http://localhost:3000/eos</b> to begin.")
}); //changes the root page of local host 3000 

app.post('/eth', async (req, res) => {
    res.send(await ethereum.runEthereumContract());
    console.log("Ethereum post request done!");
}); //setups the post request for ethereum

app.post('/eos', async (req, res) => {
    res.send(await eos.runEosContract());
    console.log("eos post request done!");
}); //setups the post request for eos

app.listen(port, () => console.log('listening on port 3000')); //starts server in port 3000