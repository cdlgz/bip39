var assert = require('assert');
var HDWJS = require('../src/hdwsdk');

describe('Address', function () {

   describe('#generateAddress() success', function () {

      it('should generate btc mainnet BIP44 address', function () {
         var monic = "total bubble almost soft alter throw wrap foil soap water exist mountain fossil hybrid young";
         var passphrase = "123456";
         var purpose = 44;
         var currency = "btc";
         var account = 0;
         var change = 0;
         var start = 0;
         var end = 0;
         var addresses = HDWJS.hdWallet.generateAddresses(monic, passphrase, purpose, currency, account, change, start, end);
         console.log(addresses);
         assert.equal(addresses.status, true);
         var address = addresses.data[0];
         assert.equal(address.path, "m/44'/0'/0'/0/0");
         assert.equal(address.address, "1pKuHs52FygYAFLuf5X3wREp6YKSjrGuV");
         assert.equal(address.pubkey, "02ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4");
         assert.equal(address.privkey, "KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z");
      });

      it('should generate btc mainnet BIP49 address', function () {
         var monic = "total bubble almost soft alter throw wrap foil soap water exist mountain fossil hybrid young";
         var passphrase = "123456";
         var purpose = 49;
         var currency = "btc";
         var account = 0;
         var change = 0;
         var start = 0;
         var end = 0;
         var addresses = HDWJS.hdWallet.generateAddresses(monic, passphrase, purpose, currency, account, change, start, end);
         assert.equal(addresses.status, true);
         var address = addresses.data[0];
         assert.equal(address.path, "m/49'/0'/0'/0/0");
         assert.equal(address.address, "36n2Yx7E73s9FpeLjhRAQvQTi6D9hAW5nK");
         assert.equal(address.pubkey, "03b854f39eb7bcfea85523a5fa9b8d42d3d0dc75c6bc645cd6cdc5a52a2c8600b8");
         assert.equal(address.privkey, "L48Rm8gPzf3RJTxR1mF78AbMi96SA16VHiQTL6AP3rZ7JwjUowTb");
      });

      it('should generate eth mainnet BIP44 address', function () {
         var monic = "total bubble almost soft alter throw wrap foil soap water exist mountain fossil hybrid young";
         var passphrase = "123456";
         var purpose = 44;
         var currency = "eth";
         var account = 0;
         var change = 0;
         var start = 0;
         var end = 0;
         var addresses = HDWJS.hdWallet.generateAddresses(monic, passphrase, purpose, currency, account, change, start, end);
         assert.equal(addresses.status, true);
         var address = addresses.data[0];
         assert.equal(address.path, "m/44'/60'/0'/0/0");
         assert.equal(address.address, "0x62d574C6970f52e83d97c06B3367b65b1650D16b");
         assert.equal(address.pubkey, "0x020dc93dc5a8d2d781992203be4c220e220ce58967b287611728c02f363f941555");
         assert.equal(address.privkey, "0xe5d1e3e7236c5d158485d296df140ce69f145fb8730398cb7f739c42e7dcd4ad");
      });

      it('should generate xrp mainnet BIP44 address', function () {
         var monic = "total bubble almost soft alter throw wrap foil soap water exist mountain fossil hybrid young";
         var passphrase = "123456";
         var purpose = 44;
         var currency = "xrp";
         var account = 0;
         var change = 0;
         var start = 0;
         var end = 0;
         var addresses = HDWJS.hdWallet.generateAddresses(monic, passphrase, purpose, currency, account, change, start, end);
         assert.equal(addresses.status, true);
         var address = addresses.data[0];
         assert.equal(address.path, "m/44'/144'/0'/0/0");
         assert.equal(address.address, "rJzisisDXWdCmMXgZNbpR7wDDYQAxw7S2m");
         assert.equal(address.pubkey, "038f9ecdfb5dce851d763e851880861aed2eac0e1c19a6c9f8180c5868f2396c07");
         assert.equal(address.privkey, "2395b60dc1381baa86b2862cd5917300ced63cf1d13f323c395c5bdfd0d694ec");
      });
   });

   describe('#generateAddress() fail', function () {

      it('should generate fail without monic 1', function () {
         var monic = "";
         var passphrase = "123456";
         var purpose = 44;
         var currency = "btc";
         var account = 0;
         var change = 0;
         var start = 0;
         var end = 0;
         var addresses = HDWJS.hdWallet.generateAddresses(monic, passphrase, purpose, currency, account, change, start, end);
         assert.equal(addresses.status, false);
         assert.equal(addresses.code, 2001);
      });

      it('should generate fail without monic 2', function () {
         var passphrase = "123456";
         var purpose = 44;
         var currency = "btc";
         var account = 0;
         var change = 0;
         var start = 0;
         var end = 0;
         var addresses = HDWJS.hdWallet.generateAddresses(null, passphrase, purpose, currency, account, change, start, end);
         assert.equal(addresses.status, false);
         assert.equal(addresses.code, 2001);
      });

      it('should generate fail without currency 1', function () {
         var monic = "total bubble almost soft alter throw wrap foil soap water exist mountain fossil hybrid young";
         var passphrase = "123456";
         var purpose = 44;
         var currency = "";
         var account = 0;
         var change = 0;
         var start = 0;
         var end = 0;
         var addresses = HDWJS.hdWallet.generateAddresses(monic, passphrase, purpose, currency, account, change, start, end);
         assert.equal(addresses.status, false);
         assert.equal(addresses.code, 2002);
      });

      it('should generate fail without currency 2', function () {
         var monic = "total bubble almost soft alter throw wrap foil soap water exist mountain fossil hybrid young";
         var passphrase = "123456";
         var purpose = 44;
         var account = 0;
         var change = 0;
         var start = 0;
         var end = 0;
         var addresses = HDWJS.hdWallet.generateAddresses(monic, passphrase, purpose, null, account, change, start, end);
         assert.equal(addresses.status, false);
         assert.equal(addresses.code, 2002);
      });

   });

});