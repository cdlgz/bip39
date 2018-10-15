var bip39 = require('bip39')
var hdwext = require('./hdwext')

class HdWallet {
   constructor() {}

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

   generateMnemonic(numWords) {
      numWords = (numWords || 15);
      if (numWords < 12)
         return this.result(false, null, 2000);
      var strength = numWords / 3 * 32;
      return this.result(true, bip39.generateMnemonic(strength).split(' ').join(','), 0);
   }

   validateMnemonic(mnemonic) {
      if (this.isEmpty(mnemonic))
         return this.result(false, false, 2001);
      var data = bip39.validateMnemonic(mnemonic.split(',').join(' '));
      return this.result(data, data, null);
   }

   generateAddresses(mnemonic, passphrase, purpose, currency, account,change, start, end) {
      if (this.isEmpty(mnemonic))
         return this.result(false, null, 2001);
      if (this.isEmpty(currency))
         return this.result(false, null, 2002);
      if (start < 0)
         return this.result(false, null, 2003);
      if (end < start)
         return this.result(false, null, 2004);
      var validate = this.validateMnemonic(mnemonic.split(',').join(' '));
      if (!validate.status)
         return this.result(false, null, validate.code);
      var seedHex = bip39.mnemonicToSeedHex(mnemonic, passphrase);
      var addresses = hdwext.generateAddresses(seedHex, purpose, currency, account, change, start, end)
      return this.result(true, addresses, null);
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