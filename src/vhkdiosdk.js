const CoinData = require("./coindata");

const {
  Api,
  JsonRpc
} = require('eosjs');
const {
  JsSignatureProvider
} = require('eosjs/dist/eosjs-jssig');
const fetch = require('node-fetch');
const {
  TextDecoder,
  TextEncoder
} = require('util');

class VHKDIOCoin {
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

  formatHex(hex) {
    if (hex.substr(0, 2) == '0x') {
      hex = hex.substr(2);
    };
    return hex;
  }

  getAPI(host, key) {
    const signatureProvider = new JsSignatureProvider([key]);
    const rpc = new JsonRpc(host, {
      fetch
    });
    const api = new Api({
      rpc,
      signatureProvider,
      textDecoder: new TextDecoder(),
      textEncoder: new TextEncoder()
    });
    return api;
  };

  //https://colintalkscrypto.com/eosio_offline_active_key_changer/1_get_blockchain_data_eos.html

  transfer(data) {
    let that = this;

    let defaultData = {
      currency: '',
      from: '',
      to: '',
      quantity: 0,
      fee: 0,
      memo: '',
      key: '',
      blockNum: '',
      refBlockPrefix: '',
      chainId: '',
      transactionExpiry: 20
    };

    data = Object.assign(defaultData, data || {});

    if (this.isEmpty(data.currency))
      return this.result(false, null, 2002);

    if (this.isEmpty(data.from))
      return this.result(false, null, 2016);

    if (this.isEmpty(data.to))
      return this.result(false, null, 2017);

    if (data.quantity <= 0)
      return this.result(false, null, 2026);

    if (data.fee <= 0)
      return this.result(false, null, 2027);

    let actions = [{
      account: 'eosio.token',
      name: 'transferex',
      authorization: [{
        actor: from,
        permission: 'active'
      }],
      data: {
        from: from,
        to: to,
        quantity: new Number(quantity).toFixed(4).concat(' VHKD'),
        fee: new Number(fee).toFixed(4).concat(' VHKD'),
        memo: memo
      }
    }];

    //TODO:
  }

  randomAccountName(data) {
    let defaultData = {
      prefix: '',
      t: 12
    };
    data = Object.assign(defaultData, data || {});
    for (var n = 'abcdefghijklmnpqrstuvwxyz12345', e = '', o = 0; o < data.t; o++)
      e += n.charAt(Math.floor(Math.random() * n.length));
    return this.result(true, data.prefix.concat(e), 0);
  };
}

function VHKDIOCoinHolder(_vhkdiocoin) {
  this.vhkdiocoin = _vhkdiocoin;
};

vhkdioCoinHolder = new VHKDIOCoinHolder(new VHKDIOCoin());
if (typeof window !== 'undefined') {
  window.vhkdiocoin = vhkdioCoinHolder.vhkdiocoin;
}
module.exports = vhkdioCoinHolder;