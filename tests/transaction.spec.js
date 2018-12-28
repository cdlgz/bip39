var assert = require('assert');
var BCOINJS = require('../src/bcoinsdk');

describe('Transaction', function () {

  describe('#createTransaction()', function () {

    it('should calculate fee', function () {
      var coinData = {
        utxos: [{
          txId: '07ac4606d0a18e7a77b19def98c5c6f29a437d8cf7791575608cede706ad4fce',
          vout: 1,
          value: 20000000,
        }],
        targets: [{
          address: '1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm',
          value: 5000
        }],
        feeRate: 4
      };
      var fee = BCOINJS.bcoin.calculateFee(coinData);
      console.log(fee);
      assert.equal(fee.status, true);
      assert.equal(fee.data, 900);
    });

    it('should build transaction', function () {
      var coinData = {
        currency: 'btctest',
        utxos: [{
          txId: 'b433a0d378e3c8f417ef81504df8d8f33ed26248816668cf88cd3f3cdc754598',
          vout: 1,
          value: 49988200,
          key: 'Kzq86boTWjmCvha9Nz4SA3rcLFN3cqo4RB8UbrqzTvh2Vvoe86Wk'
        }],
        targets: [{
          address: '1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm',
          value: 5000
        }],
        feeRate: 4,
        changeAddress: '1BTGVwzCPjhuGSKNJrDwJKzYVAc2UNjzbW'
      };
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '01000000011dd55fd229a9019f0f94ee069e675781304a8753bb6ff84c7e3470f2efd2ce93010000006b483045022100fea3e645a597d65cbfd16317f9f5639d12b0d6cba8b39d9a74b1b70bfb655bba022006b67d78a4f51857e0ff96120379d4dd2939ffa1d7f3e1088a8afcbd13ad9902012103f957ce50b4bc2b7ae5313a0aa77d2cc95a9625f8dd5ae73ab869c0267a6dcb05ffffffff0288130000000000001976a91491b24bf9f5288532960ac687abb035127b1d28a588ac74d9fa02000000001976a91472a902c6ba239b7353e30ab5265636daf77da9bb88ac00000000');
    });
    
  });

});