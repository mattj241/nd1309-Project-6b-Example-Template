# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, Processed, Packed, and similarly a Buyer can mark an item as Received, Purchased.

### Truffle Version
v5.4.15

### Solidity Version
v0.5.16

### Node Version
v14.17.0

### Web3 version
v1.5.3 : However, custom web3.min.js was brought into src/js using Udacity Knowledge as reference: https://knowledge.udacity.com/questions/51037

### Requirement write-ups : UML
Please see internal files within:

     root/UML

### Requirement write-ups : Libraries
Only usuage of libraries throughout this project came through the provided ROLES library. It simplified the approach in which what user level was allowed to interact with the main smart contract (SupplyChain) to carry-out precise supply chain tracking.

### Requirement write-ups : IPFS
IPFS was not used.

### Smart Contract Info (RINKEBY TESTNET):

   Deploying 'SupplyChain'
   
   - transaction hash:    0x41d360c88b44562dbd51eaf10b4874c5bf6bf091aa933c334bfddeaf98f45c72
   - contract address:    0xaE0BFF40e98F9b5510987301De2e418221133aD9
   - block number:        9604880
   - block timestamp:     1636354471
   - account:             0x1EAC401061445432635DB2Ff7dfCD6DAcFC2E63d

Clone this repository:

```
git clone https://github.com/mattj241/nd1309-Project-6b-Example-Template/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

In a separate terminal window, Compile smart contracts:

```
truffle compile
```


This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Test smart contracts:

```
truffle test
```

All 10 tests should pass.


In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
