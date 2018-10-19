var assert = require('assert');
var HDWJS = require('../src/hdwsdk');

describe('Address', function () {

  describe('#generateAddress() success', function () {

    it('should generate btc mainnet BIP44 address', function () {
      var addressData = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
        passphrase: "123456",
        currency: "btc",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      assert.equal(address.path, "m/44'/0'/0'/0/0");
      assert.equal(address.address, "1pKuHs52FygYAFLuf5X3wREp6YKSjrGuV");
      assert.equal(address.pubkey, "02ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4");
      assert.equal(address.privkey, "KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z");
    });

    it('should generate btc mainnet BIP49 address', function () {
      var addressData = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
        passphrase: "123456",
        currency: "btc",
        purpose: 49,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      assert.equal(address.path, "m/49'/0'/0'/0/0");
      assert.equal(address.address, "36n2Yx7E73s9FpeLjhRAQvQTi6D9hAW5nK");
      assert.equal(address.pubkey, "03b854f39eb7bcfea85523a5fa9b8d42d3d0dc75c6bc645cd6cdc5a52a2c8600b8");
      assert.equal(address.privkey, "L48Rm8gPzf3RJTxR1mF78AbMi96SA16VHiQTL6AP3rZ7JwjUowTb");
    });

    it('should generate eth mainnet BIP44 address', function () {
      var addressData = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
        passphrase: "123456",
        currency: "eth",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      assert.equal(address.path, "m/44'/60'/0'/0/0");
      assert.equal(address.address, "0x62d574C6970f52e83d97c06B3367b65b1650D16b");
      assert.equal(address.pubkey, "0x020dc93dc5a8d2d781992203be4c220e220ce58967b287611728c02f363f941555");
      assert.equal(address.privkey, "0xe5d1e3e7236c5d158485d296df140ce69f145fb8730398cb7f739c42e7dcd4ad");
    });

    it('should generate xrp mainnet BIP44 address', function () {
      var addressData = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
        passphrase: "123456",
        currency: "xrp",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
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
      var addressData = {
        mnemonic: "",
        passphrase: "123456",
        currency: "btc",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, false);
      assert.equal(addresses.code, 2001);
    });

    it('should generate fail without monic 2', function () {
      var addressData = {
        mnemonic: null,
        passphrase: "123456",
        currency: "btc",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, false);
      assert.equal(addresses.code, 2001);
    });

    it('should generate fail without currency 1', function () {
      var addressData = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
        passphrase: "123456",
        currency: "",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, false);
      assert.equal(addresses.code, 2002);
    });

    it('should generate fail without currency 2', function () {
      var addressData = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
        passphrase: "123456",
        currency: null,
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, false);
      assert.equal(addresses.code, 2002);
    });

  });

  describe('#getWalletIdByMnemonic() ok', function () {
    it('walletId should use first mnemonic', function () {
      var data = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
      };
      var walletIdObj = HDWJS.hdWallet.getWalletIdByMnemonic(data);
      assert.equal(walletIdObj.status, true);
      //console.log(walletIdObj);

      var addressData = {
        mnemonic: data.mnemonic,
        passphrase: "WalletId",
        currency: "btc",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      assert.equal(address.path, "m/44'/0'/0'/0/0");

      assert.equal(address.address, walletIdObj.data);
    });  
  });

  describe('#getXpubKeyByMnemonic() ok', function () {
    it('should generate BIP32 Extended Public Key by mnemonic', function () {
      var data = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
        currency: 'btc',
        purpose: 44,
        account: 0,
      };
      var xpubKey = HDWJS.hdWallet.getXpubKeyByMnemonic(data);
      assert.equal(xpubKey.status, true);
      //console.log(xpubKey);
      assert.equal('xpub6CGK5N5r3w8i6JtFPgCtnMo9Q7NbgvgFqCF3NLULnmagtecbvxpHF7w14gW4nPJrAVbfWZuxnprz1XLSLtS9vudjEbxzMTj1GnvsQWEyLm4', xpubKey.data);
    });  

    it('BIP32 Extended Public Key could generate sub address', function () {
      var data = {
        xpubKey: "xpub6CGK5N5r3w8i6JtFPgCtnMo9Q7NbgvgFqCF3NLULnmagtecbvxpHF7w14gW4nPJrAVbfWZuxnprz1XLSLtS9vudjEbxzMTj1GnvsQWEyLm4",
        currency: 'btc',
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddressesByXpubKey(data);
      //console.log(addresses);
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      assert.equal(address, "1LY3cuDYGuiEpMBELwRoJTQ6exfBu5atBo");
    });
  });

  describe('#validateAddressByXpubKey() ok', function () {
    it('address should be valid', function () {
      var data = {
        xpubKey: "xpub6CGK5N5r3w8i6JtFPgCtnMo9Q7NbgvgFqCF3NLULnmagtecbvxpHF7w14gW4nPJrAVbfWZuxnprz1XLSLtS9vudjEbxzMTj1GnvsQWEyLm4",
        currency: 'btc',
        change: 0,
        index: 0,
        address: '1LY3cuDYGuiEpMBELwRoJTQ6exfBu5atBo'
      };
      var validate = HDWJS.hdWallet.validateAddressByXpubKey(data);
      console.log(validate);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });  
  });

});