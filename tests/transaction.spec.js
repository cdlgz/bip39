var assert = require('assert');
var HDWJS = require('../src/hdwsdk');
var BCOINJS = require('../src/bcoinsdk');

describe('Transaction', function () {

  describe('#createTransaction()', function () {

    it('should build transaction', function () {
      var coinData = {
        currency: 'btctest',
        utxos: [{
          txId: '07ac4606d0a18e7a77b19def98c5c6f29a437d8cf7791575608cede706ad4fce',
          vout: 1,
          value: 20000000,
          key: 'Kx6z56id2Josg7U2XnWd6u6dPUWtkk3W9NL2sh8sX4JP6ok8Dceo'
        }],
        targets: [{
          address: '1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm',
          value: 5000
        }],
        feeRate: 55,
        changeAddress: ''
      };
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      //TODO:
    });
    
  });

});