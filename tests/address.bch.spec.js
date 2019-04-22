var assert = require('assert');
var HDWJS = require('../src/hdwsdk');

describe('BCH Address', function () {

  describe('#generateAddress() bch success', function () {

    it('should generate bch mainnet BIP44 address 1', function () {
      var addressData = {
        mnemonic: "grocery penalty actual chapter state law mention apple jar any artwork burger leopard dry artist",
        passphrase: "",
        currency: "bch",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      console.log(address);
      assert.equal(address.path, "m/44'/145'/0'/0/0");
      assert.equal(address.address, "1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb");
      assert.equal(address.cashAddress, "bitcoincash:qp5jvd06n6hra7phet8l3y5wwa7amry2e5e8uca6w0");
      assert.equal(address.bitpayAddress, "CS3sJ7vjE49rpzVX9sBkkRGhEA4Vu7KBtQ");
      assert.equal(address.pubkey, "0296fb88425e1fc06456bddb5db9af0639b46ecea4a7ace655164a7128dd546b26");
      assert.equal(address.privkey, "L4NSNY5BwWhoCy3FRkqmZRSuZWiKKDkfn5wLEHM7zgAUmicDS5bh");
    });

    it('should generate bch testnet BIP44 address 1', function () {
      var addressData = {
        mnemonic: "grocery penalty actual chapter state law mention apple jar any artwork burger leopard dry artist",
        passphrase: "",
        currency: "bchtest",
        purpose: 44,
        account: 0,
        change: 0,
        start: 0,
        end: 0
      };
      var addresses = HDWJS.hdWallet.generateAddresses(addressData);
      assert.equal(addresses.status, true);
      var address = addresses.data[0];
      console.log(address);
      assert.equal(address.path, "m/44'/145'/0'/0/0");
      assert.equal(address.address, "1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb");
      assert.equal(address.cashAddress, "bitcoincash:qp5jvd06n6hra7phet8l3y5wwa7amry2e5e8uca6w0");
      assert.equal(address.bitpayAddress, "CS3sJ7vjE49rpzVX9sBkkRGhEA4Vu7KBtQ");
      assert.equal(address.pubkey, "0296fb88425e1fc06456bddb5db9af0639b46ecea4a7ace655164a7128dd546b26");
      assert.equal(address.privkey, "L4NSNY5BwWhoCy3FRkqmZRSuZWiKKDkfn5wLEHM7zgAUmicDS5bh");
    });

  });

  describe('#getXpubKeyByMnemonic() ok bch', function () {

    it('should generate bch BIP32 Extended Public Key by mnemonic for mainnet', function () {
      let mnemonic = "grocery penalty actual chapter state law mention apple jar any artwork burger leopard dry artist";
      let currency = 'bch';
      let xpubKey = 'xpub6Bm3wFt45Br5ix3FRHZbzg6Ux3MZYyMdCajSwUg3sDEvJo8zCHouuuMCxi4tAerzzmmTFpfi9GA7PbvY8jFhMPpjBTN6wauHiTNWcvowHH6';

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
      assert.equal(address1.path, "m/44'/145'/0'/0/0");
      assert.equal(address1.address, "1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb");
      assert.equal(address1.pubkey, "0296fb88425e1fc06456bddb5db9af0639b46ecea4a7ace655164a7128dd546b26");
      assert.equal(address1.privkey, "L4NSNY5BwWhoCy3FRkqmZRSuZWiKKDkfn5wLEHM7zgAUmicDS5bh");

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
      assert.equal(address21, "1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb");
      var address22 = addresses2.data[1];
      assert.equal(address22, "1CFaTRnFb5r21S555Juhatc9kJFssNVdcF");
    });

    it('should generate bch BIP32 Extended Public Key by mnemonic for testnet', function () {
      let mnemonic = "grocery penalty actual chapter state law mention apple jar any artwork burger leopard dry artist";
      let currency = 'bchtest';
      let xpubKey = 'xpub6Bm3wFt45Br5ix3FRHZbzg6Ux3MZYyMdCajSwUg3sDEvJo8zCHouuuMCxi4tAerzzmmTFpfi9GA7PbvY8jFhMPpjBTN6wauHiTNWcvowHH6';

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
      assert.equal(address1.path, "m/44'/145'/0'/0/0");
      assert.equal(address1.address, "1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb");
      assert.equal(address1.pubkey, "0296fb88425e1fc06456bddb5db9af0639b46ecea4a7ace655164a7128dd546b26");
      assert.equal(address1.privkey, "L4NSNY5BwWhoCy3FRkqmZRSuZWiKKDkfn5wLEHM7zgAUmicDS5bh");

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
      assert.equal(address21, "1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb");
      var address22 = addresses2.data[1];
      assert.equal(address22, "1CFaTRnFb5r21S555Juhatc9kJFssNVdcF");
    });

  });

  describe('#validateAddressByXpubKey() bch ok', function () {

    it('bch address should be valid', function () {
      var data = {
        xpubKey: "xpub6Bm3wFt45Br5ix3FRHZbzg6Ux3MZYyMdCajSwUg3sDEvJo8zCHouuuMCxi4tAerzzmmTFpfi9GA7PbvY8jFhMPpjBTN6wauHiTNWcvowHH6",
        currency: 'bch',
        change: 0,
        index: 0,
        address: '1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb'
      };
      var validate = HDWJS.hdWallet.validateAddressByXpubKey(data);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });

    it('bch address should be valid', function () {
      var data = {
        xpubKey: "xpub6Bm3wFt45Br5ix3FRHZbzg6Ux3MZYyMdCajSwUg3sDEvJo8zCHouuuMCxi4tAerzzmmTFpfi9GA7PbvY8jFhMPpjBTN6wauHiTNWcvowHH6",
        currency: 'bchtest',
        change: 0,
        index: 0,
        address: '1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb'
      };
      var validate = HDWJS.hdWallet.validateAddressByXpubKey(data);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });

  });

  describe('#generateAddressByWIF() bch ok', function () {

    it('can generate bch address', function () {
      var data = {
        wif: "L4NSNY5BwWhoCy3FRkqmZRSuZWiKKDkfn5wLEHM7zgAUmicDS5bh",
        currency: 'bch',
      };
      var address = HDWJS.hdWallet.generateAddressByWIF(data);
      console.log(address);
      assert.equal(address.status, true);
      assert.equal(address.data, "1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb");
    });

    it('can generate bch address', function () {
      var data = {
        wif: "L4NSNY5BwWhoCy3FRkqmZRSuZWiKKDkfn5wLEHM7zgAUmicDS5bh",
        currency: 'bchtest',
      };
      var address = HDWJS.hdWallet.generateAddressByWIF(data);
      console.log(address);
      assert.equal(address.status, true);
      assert.equal(address.data, "1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb");
    });

  });

  describe('#validateAddress() bch ok', function () {

    it('bch address should be valid', function () {
      var data = {
        currency: 'bch',
        address: '1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb'
      };
      var validate = HDWJS.hdWallet.validateAddress(data);
      console.log(validate);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });

    it('bch address should be valid', function () {
      var data = {
        currency: 'bchtest',
        address: '1Aayj5afM1BKvrb6U7rqAuefc2r5wFq5sb'
      };
      var validate = HDWJS.hdWallet.validateAddress(data);
      console.log(validate);
      assert.equal(validate.status, true);
      assert.equal(validate.data, true);
    });

  });

});