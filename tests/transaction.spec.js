var assert = require('assert');
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
        changeAddress: '1BTGVwzCPjhuGSKNJrDwJKzYVAc2UNjzbW'
      };
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0100000001ce4fad06e7ed8c60751579f78c7d439af2c6c598ef9db1777a8ea1d00646ac07010000006a47304402205d3a7984631aaed8b856709883cc528b2a1df847d585b481e1ae6c5cf20a41630220113764e90e48a1bea3e0f7ded4ff0badff97cd9773c75790c5d8528c98071d8e012103f957ce50b4bc2b7ae5313a0aa77d2cc95a9625f8dd5ae73ab869c0267a6dcb05ffffffff0288130000000000001976a91491b24bf9f5288532960ac687abb035127b1d28a588ac21e93001000000001976a91472a902c6ba239b7353e30ab5265636daf77da9bb88ac00000000');
    });
    
  });

});