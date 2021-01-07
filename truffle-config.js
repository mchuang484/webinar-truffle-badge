module.exports = {

  networks: {
    local: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    sandbox: {
      url: `https://sandbox.truffleteams.com/e634e9ca-9e85-4dee-a00d-0b8fe8d3ed68`,
      network_id: "*",
      gas: 5500000
    }
  },

  compilers: {
    solc: {
      version: "0.6.2"
    },
  },
};
