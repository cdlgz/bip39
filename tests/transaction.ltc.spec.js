var assert = require('assert');
var BCOINJS = require('../src/bcoinsdk');

describe('LTC Transaction', function () {

  describe('#createTransaction()', function () {

    it('should calculate fee', function () {
      var coinData = {
        currency: 'ltctest',
        utxos: [{
          txId: '0f4c59c1646fc443a53bf5324974932a02985679914bd8145baa66117851c829',
          vout: 0,
          value: 50000000,
        }],
        targets: [{
          address: 'moL3iHbR7qhfWfFeKLpYqYh7dsLrgFoVe9',
          value: 500000
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
        currency: 'ltctest',
        utxos: [{
          txId: '0f4c59c1646fc443a53bf5324974932a02985679914bd8145baa66117851c829',
          vout: 0,
          value: 50000000,
          key: 'TAhYmLd3STdid68HFCMe9aTVtqH4iZEAcGZDPTfjq3Asf6E7VnAp'
        }],
        targets: [{
          address: 'moL3iHbR7qhfWfFeKLpYqYh7dsLrgFoVe9',
          value: 500000
        }],
        feeRate: 4,
        changeAddress: 'n1fB4PDrLZr2WcFf4Kxes9FURFsmFmyQjt'
      };
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '010000000129c851781166aa5b14d84b91795698022a93744932f53ba543c46f64c1594c0f000000006a47304402207591cdeb82586c215dfa562ed0be4d98ee63b7346652bc8bc20e71c5790c3e0c02200fa0673178f93c27537f0b555553fb98cd3bd23082b568491f957468573c64d201210349daf045ae5134a0bfc3adb3b3c882ce4d94a2c8c6773422ab213980d12312b8ffffffff0220a10700000000001976a91455b0f408249ed83ae8d4922b753825fb6e0b968188acdc4bf302000000001976a914dcf07f9c494cfd97792707b9724950049210abaf88ac00000000');
    });

    it('should build transaction ok with fully transfer', function () {
      var coinData = {
        currency: 'ltctest',
        utxos: [{
          txId: '0f4c59c1646fc443a53bf5324974932a02985679914bd8145baa66117851c829',
          vout: 0,
          value: 50000000,
          key: 'TAhYmLd3STdid68HFCMe9aTVtqH4iZEAcGZDPTfjq3Asf6E7VnAp'
        }],
        targets: [{
          address: 'moL3iHbR7qhfWfFeKLpYqYh7dsLrgFoVe9',
          value: 50000000
        }],
        feeRate: 18,
        changeAddress: 'n1fB4PDrLZr2WcFf4Kxes9FURFsmFmyQjt'
      };
      var fee = BCOINJS.bcoin.calculateFee(coinData);
      console.log(fee);
      coinData.targets[0].value = coinData.targets[0].value - Math.round(fee.data * 1.1 + 0.5);
      console.log(coinData.targets[0]);
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      //assert.equal(txHex.data, '0100000001bfd5160d552025f2f5372469c2b11dfb9c0d5a1bf069e497d447e5fccb9c38d9010000006a473044022018a4cb4f133ccdd1c54bc2dc48f4c993818894b9799c77c9b4289bb8e9680f220220285f07e71ffe79d177f7dd0a8417dbd67f909d6405da694e959d3981d83ca6d501210310eb22bc7c00ae8844b2789f53821a5b4e8bf09841b81a888fc45677d442ff96ffffffff0288130000000000001976a91491b24bf9f5288532960ac687abb035127b1d28a588ac447dfa02000000001976a91472a902c6ba239b7353e30ab5265636daf77da9bb88ac00000000');
    });

    it('should build transaction fail', function () {
      var coinData = {
        currency: 'btctest',
        utxos: [{
          txId: '0f4c59c1646fc443a53bf5324974932a02985679914bd8145baa66117851c829',
          vout: 0,
          value: 50000000,
          key: 'TAhYmLd3STdid68HFCMe9aTVtqH4iZEAcGZDPTfjq3Asf6E7VnAp'
        }],
        targets: [{
          address: 'moL3iHbR7qhfWfFeKLpYqYh7dsLrgFoVe9',
          value: 10000000000
        }],
        feeRate: 10,
        changeAddress: 'n1fB4PDrLZr2WcFf4Kxes9FURFsmFmyQjt'
      };
      var txHex = BCOINJS.bcoin.buildTransaction(coinData);
      assert.equal(txHex.status, false);
      assert.equal(txHex.code, 2015);
    });

  });



});