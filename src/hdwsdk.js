var bip39 = require('bip39')
var hdwext = require('./hdwext')

class HdWallet {
  constructor() { }

  result(status, data, code) {
    return {
      status: status, //bool
      data: data, //any
      code: code //int
    };
  }

  isEmpty(value) {
    return value == undefined || value == '';
  }

  generateMnemonic(mnemonicData) {
    var defaultData = {
      numWords: 15
    };
    mnemonicData = Object.assign(defaultData, mnemonicData || {});
    if (mnemonicData.numWords < 12)
      return this.result(false, null, 2000);
    var strength = mnemonicData.numWords / 3 * 32;
    return this.result(true, bip39.generateMnemonic(strength).split(' ').join(','), 0);
  }

  validateMnemonic(mnemonicData) {
    var defaultData = {
      mnemonic: ''
    };
    mnemonicData = Object.assign(defaultData, mnemonicData || {});
    if (this.isEmpty(mnemonicData.mnemonic))
      return this.result(false, false, 2001);
    var data = bip39.validateMnemonic(mnemonicData.mnemonic.split(',').join(' '));
    return this.result(data, data, null);
  }

  generateAddresses(addressesData) {
    var defaultData = {
      mnemonic: '',
      passphrase: '',
      currency: '',
      purpose: 44,
      account: 0,
      change: 0,
      start: 0,
      end: 0
    };
    addressesData = Object.assign(defaultData, addressesData || {});
    if (this.isEmpty(addressesData.mnemonic))
      return this.result(false, null, 2001);
    if (this.isEmpty(addressesData.currency))
      return this.result(false, null, 2002);
    if (addressesData.start < 0)
      return this.result(false, null, 2003);
    if (addressesData.end < addressesData.start)
      return this.result(false, null, 2004);
    var mnemonic = addressesData.mnemonic.split(',').join(' ');
    var validate = this.validateMnemonic({
      mnemonic: mnemonic
    });
    if (!validate.status)
      return this.result(false, null, validate.code);
    var seedHex = bip39.mnemonicToSeedHex(mnemonic, addressesData.passphrase);
    var addresses = hdwext.generateAddresses(seedHex, addressesData.purpose, addressesData.currency, addressesData.account, addressesData.change, addressesData.start, addressesData.end);
    return this.result(true, addresses, null);
  }

  getWalletIdByMnemonic(mnemonicData) {
    var defaultData = {
      mnemonic: ''
    };
    mnemonicData = Object.assign(defaultData, mnemonicData || {});
    var addressesData = {
      mnemonic: mnemonicData.mnemonic,
      passphrase: 'WalletId',
      currency: 'btc',
      purpose: 44,
      account: 0,
      change: 0,
      start: 0,
      end: 0
    };
    var addressData = this.generateAddresses(addressesData);
    if (!addressData.status)
      return addressData;

    return this.result(true, addressData.data[0].address, null);
  }
}

class Holder {
  constructor(_hdWallet) {
    this.hdWallet = _hdWallet;
  }
}

let holder = new Holder(new HdWallet());
if (typeof window !== 'undefined') {
  window.hdWallet = holder.hdWallet;
}
module.exports = holder;