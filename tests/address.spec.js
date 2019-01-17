var assert = require('assert');
var HDWJS = require('../src/hdwsdk');

describe('Address', function () {

  describe('#generateAddress() success', function () {

    it('should generate btc mainnet BIP44 address 1', function () {
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

    it('should generate btc testnet BIP44 address 2', function () {
      var addressData = {
        mnemonic: "egg,sudden,advance,apple,salmon,mad,crowd,ginger,essence,fork,public,funny",
        passphrase: "",
        currency: "btctest",
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
      assert.equal(address.path, "m/44'/0'/0'/0/0");
      assert.equal(address.address, "1EfQ9a5FA1a8TLSFQL1p3cZ3w1rU2K3NsZ");
      assert.equal(address.pubkey, "02d699fac01c130d2b46c0dd6265f6abf369b6042e35415bc9f1c115ddcf04278c");
      assert.equal(address.privkey, "L2LfzCSr7ExCX93XZn9fAbiGJDsZ2TjgKo9yBWXapa9gPmd5DP8Y");
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

    it('should generate eth testnet BIP44 address', function () {
      var addressData = {
        mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
        passphrase: "123456",
        currency: "ethtest",
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
      let mnemonic =  "egg,sudden,advance,apple,salmon,mad,crowd,ginger,essence,fork,public,funny";
      let currency = 'btc';
      let xpubKey = 'xpub6BpoY5GQ4gYFowZBqXeAEp5GLGA7Cf1LDcngrjjCQKL858cvxEZAHwVMudGDZfmR4UjpfV4YXrFckD4KdBBedEBJppbBgjRKq9TSdmRtuLu';

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
      assert.equal(address1.path, "m/44'/0'/0'/0/0");
      assert.equal(address1.address, "1EfQ9a5FA1a8TLSFQL1p3cZ3w1rU2K3NsZ");
      assert.equal(address1.pubkey, "02d699fac01c130d2b46c0dd6265f6abf369b6042e35415bc9f1c115ddcf04278c");
      assert.equal(address1.privkey, "L2LfzCSr7ExCX93XZn9fAbiGJDsZ2TjgKo9yBWXapa9gPmd5DP8Y");

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
      assert.equal(address21, "1EfQ9a5FA1a8TLSFQL1p3cZ3w1rU2K3NsZ");
      var address22 = addresses2.data[1];
      assert.equal(address22, "1BndYBYqaWkyTrKJXEWXWnAgStDT2MgXcx");
    });

    it('should generate BIP32 Extended Public Key by mnemonic', function () {
      let mnemonic =  "egg,sudden,advance,apple,salmon,mad,crowd,ginger,essence,fork,public,funny";
      let currency = 'btctest';
      let xpubKey = 'xpub6BpoY5GQ4gYFowZBqXeAEp5GLGA7Cf1LDcngrjjCQKL858cvxEZAHwVMudGDZfmR4UjpfV4YXrFckD4KdBBedEBJppbBgjRKq9TSdmRtuLu';

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
      assert.equal(address1.path, "m/44'/0'/0'/0/0");
      assert.equal(address1.address, "1EfQ9a5FA1a8TLSFQL1p3cZ3w1rU2K3NsZ");
      assert.equal(address1.pubkey, "02d699fac01c130d2b46c0dd6265f6abf369b6042e35415bc9f1c115ddcf04278c");
      assert.equal(address1.privkey, "L2LfzCSr7ExCX93XZn9fAbiGJDsZ2TjgKo9yBWXapa9gPmd5DP8Y");

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
      assert.equal(address21, "1EfQ9a5FA1a8TLSFQL1p3cZ3w1rU2K3NsZ");
      var address22 = addresses2.data[1];
      assert.equal(address22, "1BndYBYqaWkyTrKJXEWXWnAgStDT2MgXcx");
    });

  });

  describe('#validateAddressByXpubKey() ok', function () {
    it('address should be valid', function () {
      var data = {
        xpubKey: "xpub6BpoY5GQ4gYFowZBqXeAEp5GLGA7Cf1LDcngrjjCQKL858cvxEZAHwVMudGDZfmR4UjpfV4YXrFckD4KdBBedEBJppbBgjRKq9TSdmRtuLu",
        currency: 'btc',
        change: 0,
        index: 0,
        address: '1EfQ9a5FA1a8TLSFQL1p3cZ3w1rU2K3NsZ'
      };
      var validate = HDWJS.hdWallet.validateAddressByXpubKey(data);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });  
  });

  describe('#generateAddressByWIF() ok', function () {
    it('can generate address', function () {
      var data = {
        wif: "KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z",
        currency: 'btc',
      };
      var address = HDWJS.hdWallet.generateAddressByWIF(data);
      console.log(address);
      assert.equal(address.status, true);
      assert.equal(address.data, "1pKuHs52FygYAFLuf5X3wREp6YKSjrGuV");
    });  
  });

  describe('#validateAddress() ok', function () {
    it('address should be valid', function () {
      var data = {
        currency: 'btc',
        address: '1LY3cuDYGuiEpMBELwRoJTQ6exfBu5atBo'
      };
      var validate = HDWJS.hdWallet.validateAddress(data);
      console.log(validate);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });  

    it('address should be invalid', function () {
      var data = {
        currency: 'btc',
        address: 'abctest'
      };
      var validate = HDWJS.hdWallet.validateAddress(data);
      console.log(validate);
      assert.equal(validate.status, true);
      assert.equal(validate.data, false);
    });  
  });

});