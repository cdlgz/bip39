var assert = require('assert');
var HDWJS = require('../src/hdwsdk');

describe('Transaction', function () {

  describe('#buildTransaction() success', function () {

    it('should build transaction', function () {
      var coinData = {
        currency: 'btctest',
        utxos: [{
          txId: '...',
          vout: 0,
          value: 10000,
          key: ''
        }],
        targets: [{
          address: '1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm',
          value: 5000
        }],
        feeRate: 55,
        changeAddress: ''
      };
      var txHex = HDWJS.bcoin.buildTransaction(coinData);
      //TODO:
    });
    
  });

});