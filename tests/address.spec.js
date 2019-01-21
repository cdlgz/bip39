var assert = require('assert');
var HDWJS = require('../src/hdwsdk');
var ECOINJS = require('../src/ecoinsdk');

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

  describe('#generateAddressByWIF() btc ok', function () {
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

  describe('#generateAddressByWIF() eth ok', function () {
    it('can generate address', function () {
      var data = {
        wif: "0xb67d92b5d424fd429c4225e201c036a2b8869988c083958b9d14842a68bbc633",
        currency: 'eth',
      };
      var address = HDWJS.hdWallet.generateAddressByWIF(data);
      console.log(address);
      assert.equal(address.status, true);
      assert.equal(address.data, "0x65f2042284f55B1Fa8B2806f48d7C74CC3bf152b");
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

  describe('#decryptKeyStore() ok', function () {
    it('KeyStore should be decrypted', function () {
      let keyStoreJSON = {
        version: 3,
        id: '04e9bcbb-96fa-497b-94d1-14df4cd20af6',
        address: '2c7536e3605d9c16a7a3d7b1898e529396a65c23',
        crypto: {
            ciphertext: 'a1c25da3ecde4e6a24f3697251dd15d6208520efc84ad97397e906e6df24d251',
            cipherparams: { iv: '2885df2b63f7ef247d753c82fa20038a' },
            cipher: 'aes-128-ctr',
            kdf: 'scrypt',
            kdfparams: {
                dklen: 32,
                salt: '4531b3c174cc3ff32a6a7a85d6761b410db674807b2d216d022318ceee50be10',
                n: 262144,
                r: 8,
                p: 1
            },
            mac: 'b8b010fff37f9ae5559a352a185e86f9b9c1d7f7a9f1bd4e82a5dd35468fc7f6'
        }
      };
      let password = 'test!';

      let account = ECOINJS.ecoin.decryptKeyStore(keyStoreJSON, password);

      console.log(account);
      assert.equal(account.status, true);
      assert.equal(account.data.address, '0x2c7536E3605D9C16a7a3D7b1898e529396a65c23');
      assert.equal(account.data.privateKey, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318');
    });

    it('KeyStore 2 should be decrypted', function () {
      let keyStoreJSON = {
        "address":"97c222a1798084033ec71da0ee4d367a66d5a68c",
        "crypto":{
          "cipher":"aes-128-ctr",
          "ciphertext":"95eae15076989a6cd9cff559d71a031ecb3688b3e4d32ceb6097987128104167",
          "cipherparams":{
            "iv":"5bc0b0cb3430b487667b838a23dd61d5"
          },
          "kdf":"scrypt",
          "kdfparams":{
            "dklen":32,
            "n":262144,
            "p":1,
            "r":8,
            "salt":"607c33335744b547ce7e43eb197d431bfe899ce0938a7519d2696c86343c0595"
          },
          "mac":"ffa2587baf82204f21ae96ac3adc521035ec7ac038aee52ea9af10bfe5d27102"
        },
        "id":"51732248-f8e7-4e6b-82fc-dd60a753cbf5",
        "version":3
      };
      let password = '';

      let account = ECOINJS.ecoin.decryptKeyStore(keyStoreJSON, password);

      console.log(account);
      assert.equal(account.status, true);
      assert.equal(account.data.address, '0x97c222a1798084033EC71dA0eE4d367a66D5a68c');
      assert.equal(account.data.privateKey, '0x80f5153f0cef08002a11eba35cc87db1fa4eac1f803fcbdaacd8b4dc77adaf16');
    });
  });

});