# Badgewell Blockchain Task

## Prerequisites

- NodeJs installed

- Clone the repo and navigate to the download folder through cmd and install the following libraries:

  ```
  npm install express --save
  npm install web3
  npm install eosjs
  ```
  
## Run Command

the entry point of the programs is the ``` index.js ``` file. to run the file, simply open cmd in the contained folder and run the following command:

```
node index.js
```

## Adittional Info

- the repo contains a folder named ``` contracts ```, which holds the smart contract codes for both networks

- ``` ethereum.js ``` and ``` eos.js ``` contains the functions that runs the smart contracts on the testnet blockchain

- to test endpoints, use ``` POSTman ``` or any alternative services to send POST requests to:
  ```
  http://localhost:3000/eth
  http://localhost:3000/eos
  ```
- the expected results for:
  
  ethereum =>  ``` Hello World! ``` String
  
  eos => a ``` JSON ``` containing the transaction info
