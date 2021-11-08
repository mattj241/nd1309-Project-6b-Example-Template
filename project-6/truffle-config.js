const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "e4b38dc8454f40b9b768d158fde6e155";

const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
test_mnemonic = "region laugh shrug grape expand van aware master tiny during thank loyal";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      provider: function() {
        return new HDWalletProvider(test_mnemonic, "ws://127.0.0.1:8545/");
      },
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      websockets: true,
      provider: function() {
        return new HDWalletProvider(test_mnemonic, "ws://127.0.0.1:8545/");
      }
    },
    GanacheGUI: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "5777",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, `https://rinkeby.infura.io/v3/${infuraKey}`, 0),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    }
  }
};