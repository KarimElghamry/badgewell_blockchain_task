
const Web3 = require('web3');// requires web3 package

module.exports = {
    runEthereumContract: async function () {
        const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/81d0278b41734f1db376f3170eec1600"); //initializes the http provider
        const web3 = new Web3(provider);
        await web3.eth.net.isListening()
            .then(() => console.log('web3 is connected'))
            .catch(e => {
                console.log("error occurred")
                return;
            });
        var ethContractAbi = [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "x",
                        "type": "string"
                    }
                ],
                "name": "changeMessage",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "sayHello",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];
        var ethContractAddress = "0xebff2132ebc3e29202adf7e5d7fdd732b2759c60";
        const ethereumContract = new web3.eth.Contract(ethContractAbi, ethContractAddress);
        var result = await ethereumContract.methods.sayHello().call();
        return result;
    }
};