var assert = require('assert');
var HDWJS = require('../src/hdwsdk');
var ECOINJS = require('../src/ecoinsdk');

describe('LTC Address', function () {

  describe('#generateAddress() ltc success', function () {

    it('should generate ltc mainnet BIP44 address 1', function () {
      var addressData = {
        mnemonic: "grocery penalty actual chapter state law mention apple jar any artwork burger leopard dry artist",
        passphrase: "",
        currency: "ltc",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      assert.equal(address.path, "m/44'/2'/0'/0/0");
      assert.equal(address.address, "Lf5j58JPTtKb6dJ94gVSmBr7GrjXhraaqG");
      assert.equal(address.pubkey, "0349daf045ae5134a0bfc3adb3b3c882ce4d94a2c8c6773422ab213980d12312b8");
      assert.equal(address.privkey, "TAhYmLd3STdid68HFCMe9aTVtqH4iZEAcGZDPTfjq3Asf6E7VnAp");
    });

    it('should generate ltc testnet BIP44 address 2', function () {
      var addressData = {
        mnemonic: "egg,sudden,advance,apple,salmon,mad,crowd,ginger,essence,fork,public,funny",
        passphrase: "",
        currency: "ltc",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      console.log(addresses)
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      assert.equal(address.path, "m/44'/2'/0'/0/0");
      assert.equal(address.address, "LPmyRMdS8JtDLopPPnxWkD2VZiTwQRaDwP");
      assert.equal(address.pubkey, "0330188ccdc6b8a37b15ee8b06150aa7761fa598ced353522f73258986c2e90d72");
      assert.equal(address.privkey, "T7Ddzu684pujHewZ1vRfLmex6Rg6ZE8WSfCYKdHRQooWv5kRFUmA");
    });

  });

  describe('#getXpubKeyByMnemonic() ok ltc', function () {

    it('should generate ltc BIP32 Extended Public Key by mnemonic', function () {
      let mnemonic = "grocery penalty actual chapter state law mention apple jar any artwork burger leopard dry artist";
      let currency = 'ltc';
      let xpubKey = 'Ltub2ZBzLR9yAtqMwiVEVBsUeJyA4AJqzKbNhRzoXhNNtdFRHRuaKsSrxkYmb4QNJyGpZEupDF2KZU2TNUKhjDcnbcMhoxfLFiUZKzhbV1gPSGk';

      var addressData = {
        mnemonic: mnemonic,
        passphrase: "",
        currency: currency,
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses1 = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses1.status, true);
      var address1 = addresses1.data[0];
      assert.equal(address1.path, "m/44'/2'/0'/0/0");
      assert.equal(address1.address, "Lf5j58JPTtKb6dJ94gVSmBr7GrjXhraaqG");
      assert.equal(address1.pubkey, "0349daf045ae5134a0bfc3adb3b3c882ce4d94a2c8c6773422ab213980d12312b8");
      assert.equal(address1.privkey, "TAhYmLd3STdid68HFCMe9aTVtqH4iZEAcGZDPTfjq3Asf6E7VnAp");

      var mnemonicData = {
        mnemonic: mnemonic,
        currency: currency,
        purpose: 44,
        account: 0,
      };
      var xpubKeyResult = HDWJS.hdWallet.getXpubKeyByMnemonic(mnemonicData);
      assert.equal(xpubKeyResult.status, true);
      assert.equal(xpubKeyResult.data, xpubKey);

      var xpubKeyData = {
        xpubKey: xpubKey,
        currency: currency,
        change: 0,
        start: 0,
        end: 1
      };
      var addresses2 = HDWJS.hdWallet.generateAddressesByXpubKey(xpubKeyData);
      assert.equal(addresses2.status, true);
      var address21 = addresses2.data[0];
      assert.equal(address21, "Lf5j58JPTtKb6dJ94gVSmBr7GrjXhraaqG");
      var address22 = addresses2.data[1];
      assert.equal(address22, "LT33gSpGPUWTzMUBmuqUHeYYz67RrdngPi");
    });

  });

  describe('#validateAddressByXpubKey() ltc ok', function () {

    it('ltc address should be valid', function () {
      var data = {
        xpubKey: "Ltub2ZBzLR9yAtqMwiVEVBsUeJyA4AJqzKbNhRzoXhNNtdFRHRuaKsSrxkYmb4QNJyGpZEupDF2KZU2TNUKhjDcnbcMhoxfLFiUZKzhbV1gPSGk",
        currency: 'ltc',
        change: 0,
        index: 0,
        address: 'Lf5j58JPTtKb6dJ94gVSmBr7GrjXhraaqG'
      };
      var validate = HDWJS.hdWallet.validateAddressByXpubKey(data);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });

  });

  describe('#generateAddressByWIF() ltc ok', function () {

    it('can generate ltc address', function () {
      var data = {
        wif: "TAhYmLd3STdid68HFCMe9aTVtqH4iZEAcGZDPTfjq3Asf6E7VnAp",
        currency: 'ltc',
      };
      var address = HDWJS.hdWallet.generateAddressByWIF(data);
      console.log(address);
      assert.equal(address.status, true);
      assert.equal(address.data, "Lf5j58JPTtKb6dJ94gVSmBr7GrjXhraaqG");
    });

  });

  describe('#validateAddress() ltc ok', function () {

    it('ltc address should be valid', function () {
      var data = {
        currency: 'ltc',
        address: 'Lf5j58JPTtKb6dJ94gVSmBr7GrjXhraaqG'
      };
      var validate = HDWJS.hdWallet.validateAddress(data);
      console.log(validate);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });

  });

  describe('#validateAddress() ltc ok', function () {

    it('ltc address should be valid', function () {
      let mnemonic = "grocery penalty actual chapter state law mention apple jar any artwork burger leopard dry artist";
      let currency1 = 'ltc';
      let xpubKey1 = 'Ltub2ZBzLR9yAtqMwiVEVBsUeJyA4AJqzKbNhRzoXhNNtdFRHRuaKsSrxkYmb4QNJyGpZEupDF2KZU2TNUKhjDcnbcMhoxfLFiUZKzhbV1gPSGk';
      var mnemonicData1 = {
        mnemonic: mnemonic,
        currency: currency1,
        purpose: 44,
        account: 0,
      };
      var xpubKeyResult1 = HDWJS.hdWallet.getXpubKeyByMnemonic(mnemonicData1);
      assert.equal(xpubKeyResult1.status, true);
      assert.equal(xpubKeyResult1.data, xpubKey1);
      let currency2 = 'ltc';
      let xpubKey2 = 'Ltub2ZBzLR9yAtqMwiVEVBsUeJyA4AJqzKbNhRzoXhNNtdFRHRuaKsSrxkYmb4QNJyGpZEupDF2KZU2TNUKhjDcnbcMhoxfLFiUZKzhbV1gPSGk';
      let mnemonicData2 = {
        mnemonic: mnemonic,
        currency: currency2,
        purpose: 44,
        account: 0,
      };
      let xpubKeyResult2 = HDWJS.hdWallet.getXpubKeyByMnemonic(mnemonicData2);
      assert.equal(xpubKeyResult2.status, true);
      assert.equal(xpubKeyResult2.data, xpubKey2);

    });

  });

});