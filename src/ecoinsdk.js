const abi = require('./abi.js');
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
      currency: '',
      password: ''
    };
    keyStoreData = Object.assign(defaultData, keyStoreData || {});

    if (this.isEmpty(keyStoreData.currency))
      return this.result(false, null, 2002);

    if (!defaultData.keyStoreJSON || this.isEmpty(defaultData.keyStoreJSON))
      return this.result(false, false, 2019);

    if (typeof (keyStoreData.keyStoreJSON) == 'string') {
      keyStoreData.keyStoreJSON = JSON.parse(keyStoreData.keyStoreJSON);
    };
    let account = web3.eth.accounts.decrypt(keyStoreData.keyStoreJSON, keyStoreData.password);
    return this.result(true, {
      address: account.address,
      privateKey: account.privateKey
    }, 0);
  }

  exportKeyStore(accountData) {
    let defaultData = {
      currency: '',
      privateKey: '',
      password: '',
    };
    accountData = Object.assign(defaultData, accountData || {});

    if (this.isEmpty(accountData.currency))
      return this.result(false, null, 2002);

    if (this.isEmpty(accountData.privateKey))
      return this.result(false, null, 2020);

    let keyStoreJSON = JSON.stringify(web3.eth.accounts.encrypt(accountData.privateKey, accountData.password));
    return this.result(true, keyStoreJSON, 0);
  }

  signTransaction(tranData) {
    let defaultData = {
      currency: '',
      from: '',
      to: '',
      value: '',
      contract: '',
      gas: 200000,
      chainId: 4,
      nonce: 0,
      privateKey: ''
    };
    tranData = Object.assign(defaultData, tranData || {});

    if (this.isEmpty(tranData.currency))
      return this.result(false, null, 2002);

    if (this.isEmpty(tranData.privateKey))
      return this.result(false, null, 2020);

    if (this.isEmpty(tranData.from))
      return this.result(false, false, 2016);

    if (this.isEmpty(tranData))
      return this.result(false, false, 2017);

    if (this.isEmpty(tranData.value))
      return this.result(false, false, 2018);

    let coinData = CoinData[tranData.currency];
    tranData.chainId = coinData.chainId;

    let account = web3.eth.accounts.privateKeyToAccount(tranData.privateKey);
    if (this.isEmpty(tranData.contract)) {
      tranData.value = web3.utils.toHex(web3.utils.toWei(tranData.value, "ether"));
    } else {
      var tokenContract = that.web3.eth.contract(abi.erc20).at(tranData.contract);
      var data = tokenContract.transfer.getData(tranData.to, tranData.value);
      tranData.data = data;
      tranData.value = '';
    };
    let result = account.signTransaction(tranData);
    return this.result(true, result, 0);
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