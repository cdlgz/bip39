const CoinData = require("./coindata");
const bitcoin = require('bitcoinjs-lib')
let coinSelect = require('coinselect')
let utils = require('coinselect/utils')

class BCoin {
  constructor() {
    this.coinSelectlist = {};
    this.coinSelectlist['btc'] = coinSelect.coinSelect;
    this.coinSelectlist['btctest'] = coinSelect.coinSelect;
    this.coinSelectlist['vhkd'] = coinSelect.percentFeeCoinSelect;
    this.coinSelectlist['vhkdtest'] = coinSelect.percentFeeCoinSelect;
    this.coinSelectlist['btl'] = coinSelect.fixedFeeCoinSelect;
    this.coinSelectlist['btltest'] = coinSelect.fixedFeeCoinSelect;
  }

  getCoinSelect(currency) {
    if (!currency) {
      currency = 'btc';
    }

    if (this.coinSelectlist[currency]) {
      return this.coinSelectlist[currency];
    }

    return coinSelect.coinSelect;
  }

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

  calculateFee(coinData) {
    let defaultData = {
      utxos: [],
      targets: [],
      feeRate: 0,
      currency: 'btc',
      minFee: 0,
      maxFee: 0
    };

    coinData = Object.assign(defaultData, coinData || {});

    if (coinData.utxos.length == 0)
      return this.result(false, false, 2011);

    if (coinData.targets.length == 0)
      return this.result(false, false, 2012);

    if (coinData.feeRate == 0)
      return this.result(false, false, 2013);

    let {
      fee
    } = this.getCoinSelect(coinData.currency)(coinData.utxos, coinData.targets, coinData.feeRate, coinData.minFee, coinData.maxFee);
    return this.result(true, fee, 0);
  }

  buildTransaction(coinData) {
    let defaultData = {
      currency: '',
      utxos: [],
      targets: [],
      feeRate: 0,
      changeAddress: '',
      minFee: 0,
      maxFee: 0
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
    } = this.getCoinSelect(coinData.currency)(coinData.utxos, coinData.targets, coinData.feeRate, coinData.minFee, coinData.maxFee);

    if (inputs && inputs.length > 0) {
      let coinDataX = CoinData[coinData.currency];
      let txb = new bitcoin.TransactionBuilder(coinDataX.network);
      inputs.forEach(input => txb.addInput(input.txId, input.vout));
      outputs.forEach(output => {
        if (!output.address) {
          output.address = coinData.changeAddress;
        };
        txb.addOutput(output.address, output.value)
      });
      inputs.forEach((input, index) => {
        const keyPair = new bitcoin.ECPair.fromWIF(input.key, coinDataX.network);
        txb.sign(index, keyPair);
      });
      let txHex = txb.build().toHex();
      return this.result(true, txHex, 0);
    };

    return this.result(false, null, 2015);
  }
}

class BCoinHolder {
  constructor(_bcoin) {
    this.bcoin = _bcoin;
  }
}

bcoinHolder = new BCoinHolder(new BCoin());
if (typeof window !== 'undefined') {
  window.bcoin = bcoinHolder.bcoin;
}
module.exports = bcoinHolder;