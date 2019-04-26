var assert = require('assert');
var BCOINJS = require('../src/bcoinsdk');

describe('BCH Transaction', function () {

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

    it('should build transaction ok', function () {
      var coinData = {
        currency: 'bchtest',
        utxos: [{
          txId: 'e1fb56972c0968a9ccddee8c5389b14868ff2e817b7431864142d1a8a9216650',
          vout: 1,
          value: 10000000,
          key: 'cQvZvKqGnEonzkoxTFmNwQHsSuQYNwarDNGV4VEF8rdeY1FTqkf9'
        }],
        targets: [{
          address: 'bchtest:qp5jvd06n6hra7phet8l3y5wwa7amry2e5a4clldfn',
          value: 9000000
        }],
        feeRate: 4,
        changeAddress: 'mhMJiCi8iL6xa8Sub2BMqkDC3ZfvP3yBDh'
      };
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0200000001506621a9a8d142418631747b812eff6848b189538ceeddcca968092c9756fbe1010000006a473044022000c5d2ab7d253b4e2ef263e25046efe65d3bd016d0c057cec894e12e52b1d6ea02207499affe2f6e681cbefa8293fbce9e279f63c67c0e7908ab469c177081c703b9412102e1572c55be1e3a3e1fd5e2b1a4b635bc7693ed244f4252a729e2e0282cec1e4cffffffff0240548900000000001976a914692635fa9eae3ef837cacff8928e777ddd8c8acd88acbc3e0f00000000001976a914141d22797590b7566ca29b1cd55d8c15543421bc88ac00000000');
    });
    
  });

});