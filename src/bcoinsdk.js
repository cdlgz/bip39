const CoinData = require("./coindata");
const bitcoinjs = require('./js/bitcoinjs-3.3.2')
let coinSelect = require('coinselect')

class BCoin {
  constructor() {}

  isEmpty(value) {
    return value == undefined || value == '';
  }

  buildTransaction(coinData) {
    let defaultData = {
      currency: '',
      utxos: [],
      targets: [],
      feeRate: 0,
      changeAddress: ''
    };

    coinData = Object.assign(defaultData, coinData || {});
    if (this.isEmpty(coinData.currency))
      return this.result(false, null, 2002);

    if (coinData.utxos.length == 0)
      return this.result(false, false, 2011);

    if (coinData.targets.length == 0)
      return this.result(false, false, 2012);

    if (coinData.feeRate == 0)
      return this.result(false, false, 2013);

    if (coinData.changeAddress == '')
      return this.result(false, false, 2014);

    let {
      inputs,
      outputs,
      fee
    } = coinSelect(coinData.utxos, coinData.targets, coinData.feeRate);

    console.log(fee);

    let coinDataX = CoinData[currency];
    let txb = new bitcoinjs.bitcoin.TransactionBuilder(coinDataX.network);
    inputs.forEach(input => txb.addInput(input.txId, input.vout));
    outputs.forEach(output => {
      if (!output.address) {
        output.address = coinData.changeAddress;
      };
      txb.addOutput(output.address, output.value)
    });
    inputs.forEach((input, index) => txb.sign(index, input.key));
    return tx.build().toHex();
  }
}

class BCoinHolder {
  constructor(_bcoin) {
    this.bcoin = _bcoin;
  }
}

let bcoinHolder = new BCoinHolder(new BCoin());
if (typeof window !== 'undefined') {
  window.bcoin = bcoinHolder.bcoin;
}
module.exports = bcoinHolder;