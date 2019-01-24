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

  decryptKeyStore(keyStoreData) {
    let defaultData = {
      //keyStoreJSON: '',
      password: ''
    };
    keyStoreData = Object.assign(defaultData, keyStoreData || {});
    if (typeof (keyStoreData.keyStoreJSON) == 'string') {
      keyStoreData.keyStoreJSON = JSON.parse(keyStoreData.keyStoreJSON);
    };
    let account = web3.eth.accounts.decrypt(keyStoreData.keyStoreJSON, keyStoreData.password);
    return this.result(true, {
      address: account.address,
      privateKey: account.privateKey
    }, 0);
  }

  signTransaction(tranData) {
    let defaultData = {
      from: '',
      to: '',
      value: '',
      contract: '',
      gas: 200000,
      chainId: 3,
    };
    tranData = Object.assign(defaultData, tranData || {});

    if (this.isEmpty(tranData.from))
      return this.result(false, false, 2016);

    if (this.isEmpty(tranData))
      return this.result(false, false, 2017);

    if (this.isEmpty(tranData.value))
      return this.result(false, false, 2018);

    if (this.isEmpty(tranData.contract)) {
      tranData.value = web3.utils.toHex(web3.utils.toWei(tranData.value, "ether"));
      let account = web3.eth.accounts.privateKeyToAccount(privateKey);
      let result = account.signTransaction(tranData);
      return result;  
    } else {
      //TODO:
    };
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