const bsv = require("bsv");

const privateKey = bsv.PrivateKey.fromRandom("mainnet");
const pubKey = bsv.PublicKey.fromPrivateKey(privateKey);
const address = bsv.Address.fromPrivateKey(privateKey);
console.log("Private Key", privateKey.toString());
console.log("Public Key", pubKey.toString());
console.log("Address", address.toString());
