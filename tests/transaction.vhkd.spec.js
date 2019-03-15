var assert = require('assert');
var BCOINJS = require('../src/bcoinsdk');

describe('VHKD Transaction', function () {

  describe('#createTransaction()', function () {

    it('should calculate fee', function () {
      var coinData = {
        utxos: [{
          txId: '74a4d839f2197587f21285b058ca2aebfaa0b8f0b49a5655652a7a2ec3ab8ed7',
          vout: 1,
          value: 1000000000000,
        }],
        targets: [{
          address: 'VTD8CCwwtzMLdVVa7oJdHXgqf1bewbpBh3',
          value: 100000000
        }],
        feeRate: 0.0003,
        currency: 'vhkd'
      };
      var fee = BCOINJS.bcoin.calculateFee(coinData);
      console.log(fee);
      assert.equal(fee.status, true);
      assert.equal(fee.data, 30000);
    });

    it('should calculate fee2', function () {
      var coinData = {
        utxos: [{
          txId: '965c404cb388b11760871cb63299d7673cf651762a422ba6107412afac988fd8',
          vout: 1,
          value: 12000000000,
        }],
        targets: [{
          address: '1EFHGs7PMGpdzLxn56o6oUV4K9z9YBZc6Y',
          value: 100000000
        }],
        feeRate: 0.0003,
        currency: 'vhkd'
      };
      var fee = BCOINJS.bcoin.calculateFee(coinData);
      console.log(fee);
      assert.equal(fee.status, true);
      assert.equal(fee.data, 30000);
    });

    it('should calculate fee3', function () {
      var coinData = {
        utxos: [{
          txId: '7771733bfc837f279e4f0e0ef4440afd075d56e30814443672403248596a2209',
          vout: 0,
          value: 10000000000,
        }],
        targets: [{
          address: '1Q4uNEvLTqxQEAbbpEDVBvF6hH7VTkxFht',
          value: 10000000000
        }],
        feeRate: 0.0003,
        currency: 'vhkd'
      };
      var fee = BCOINJS.bcoin.calculateFee(coinData);
      console.log(fee);
      assert.equal(fee.status, true);
      assert.equal(fee.data, 3000000);
    });

    it('should build transaction ok', function () {
      var coinData = {
        currency: 'vhkd',
        utxos: [{
          txId: 'cfc5f830a3443ebd85cfc8a004d74be70cb45b5fc8dd781a7933f7a54c6133e7',
          vout: 0,
          value: 1000000000,
          key: 'L3qj73DQzaWnBy2RmnvXDUkq3tUjAWJ2mM3XZzPdbN7UXW444fGS'
        }],
        targets: [{
          address: 'VRzqUHk3dStSrk49DA22tH4bJfkGYR5dHC',
          value: 100000000
        }],
        feeRate: 0.0003,
        changeAddress: 'VTD8CCwwtzMLdVVa7oJdHXgqf1bewbpBh3'
      };
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0100000001e733614ca5f733791a78ddc85f5bb40ce74bd704a0c8cf85bd3e44a330f8c5cf000000006a47304402207c9863d395e5c68ff768d76ef9cacd1f65655b05c0450608410b5c6ac8fa333c02205c1a83da0f2094b3344a2f677c4cda7851304f60ede51e3d405208987c6dd12e0121039409b25aeda4686f8e94c0eacb90bd6c516ca0967f737d2b7b773bc53075e784ffffffff0200e1f505000000001976a914a83f766e285dd3494b03361a7a358e01df7972b288acd073a435000000001976a914b58a8a1391d9c4fd7b74e800541477eb0021d19788ac00000000');
    });

    it('should build transaction ok with fully transfer', function () {
      var coinData = {
        currency: 'vhkd',
        utxos: [{
          txId: 'fa9cfb59b10e24b2bc339f2e67fd125f76d1695ad5ec2f994ccee34fdb631af6',
          vout: 1,
          value: 899970000,
          key: 'L3qj73DQzaWnBy2RmnvXDUkq3tUjAWJ2mM3XZzPdbN7UXW444fGS'
        }],
        targets: [{
          address: 'VRzqUHk3dStSrk49DA22tH4bJfkGYR5dHC',
          value: 899970000
        }],
        feeRate: 0.0003,
        changeAddress: 'VTD8CCwwtzMLdVVa7oJdHXgqf1bewbpBh3'
      };
      let fee = BCOINJS.bcoin.calculateFee(coinData);
      assert.equal(fee.status, true);
      coinData.targets[0].value = coinData.targets[0].value - fee.data;
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0100000001f61a63db4fe3ce4c992fecd55a69d1765f12fd672e9f33bcb2240eb159fb9cfa010000006a47304402202925b48abf930c3c31b72232f31713b5339c86fad7ca883fba0a0028a02de6a60220364cdea9512bb082ad27f5819ea1e94bfe952339e728af22ca6b15037fac6dcc0121039409b25aeda4686f8e94c0eacb90bd6c516ca0967f737d2b7b773bc53075e784ffffffff012955a035000000001976a914a83f766e285dd3494b03361a7a358e01df7972b288ac00000000');
    });

    it('should build transaction fail', function () {
      var coinData = {
        currency: 'vhkd',
        utxos: [{
          txId: '7771733bfc837f279e4f0e0ef4440afd075d56e30814443672403248596a2209',
          vout: 0,
          value: 10000000000,
          key: 'L4pCfRBpZYn3eozHsdn6NQR2Jc2bU4jVXwoLAfbTnjvZakumqgZg'
        }],
        targets: [{
          address: '1Q4uNEvLTqxQEAbbpEDVBvF6hH7VTkxFht',
          value: 10000000000
        }],
        feeRate: 10,
        changeAddress: '1BTGVwzCPjhuGSKNJrDwJKzYVAc2UNjzbW'
      };
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      assert.equal(txHex.status, false);
      assert.equal(txHex.code, 2015);
    });

  });



});