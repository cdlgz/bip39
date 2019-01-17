const CoinData = require("./coindata");
const Web3 = require('web3');
const web3 = new Web3();

class ECoin {
  constructor() {}

  result(status, data, code) {
    return {
      status: status, //bool
      data: data, //any
      code: code //int
    };
  }

  isEmpty(value) {
    return value == undefined || value == '';
  }

  decryptKeyStore(keystoreJsonV3, password) {
    if(typeof(keystoreJsonV3) == 'string'){
      keystoreJsonV3 = JSON.parse(keystoreJsonV3);
    };
    let account = web3.eth.accounts.decrypt(keystoreJsonV3, password);
    return this.result(true, { address : account.address, privateKey : account.privateKey }, 0);
  }

}

class ECoinHolder {
  constructor(_ecoin) {
    this.ecoin = _ecoin;
  }
}

let ecoinHolder = new ECoinHolder(new ECoin());
if (typeof window !== 'undefined') {
  window.ecoin = ecoinHolder.ecoin;
}
module.exports = ecoinHolder;