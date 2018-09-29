const CoinData = require("./coindata");
const bitcoinjs = require('./js/bitcoinjs-3.3.2')
const ethUtil = require("./js/ethereumjs-util")
const basex = require('base-x')

function parseIntNoNaN(val, defaultVal) {
   var v = parseInt(val);
   if (isNaN(v)) {
      return defaultVal;
   }
   return v;
}

function getDerivationPath(purpose, coinType, account, change) {
   purpose = parseIntNoNaN(purpose, 44);
   coinType = parseIntNoNaN(coinType, 0);
   account = parseIntNoNaN(account, 0);
   change = parseIntNoNaN(change, 0);
   path = "m/";
   path += purpose + "'/";
   path += coinType + "'/";
   path += account + "'/";
   path += change;
   var derivationPath = path;
   return derivationPath;
}

function calcBip32RootKeyFromSeed(seedHex, network) {
   var bip32RootKey = bitcoinjs.bitcoin.HDNode.fromSeedHex(seedHex, network);
   return bip32RootKey;
}

function calcBip32ExtendedKey(seedHex, network, path) {
   var extendedKey = calcBip32RootKeyFromSeed(seedHex, network);
   // Derive the key from the path
   var pathBits = path.split("/");
   for (var i = 0; i < pathBits.length; i++) {
      var bit = pathBits[i];
      var index = parseInt(bit);
      if (isNaN(index)) {
         continue;
      }
      var hardened = bit[bit.length - 1] == "'";
      var isPriv = !(extendedKey.isNeutered());
      var invalidDerivationPath = hardened && !isPriv;
      if (invalidDerivationPath) {
         extendedKey = null;
      } else if (hardened) {
         extendedKey = extendedKey.deriveHardened(index);
      } else {
         extendedKey = extendedKey.derive(index);
      }
   }
   return extendedKey
}

function convertRippleAdrr(address) {
   return basex('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz').encode(
      basex('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(address)
   )
 }

function convertRipplePriv(priv)   {
   return basex('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(priv).toString("hex").slice(2,66)
}   

function isLikeEthereum(currency) {
   var list = ['eth', 'etc', 'pirl', 'mix', 'music', 'poa', 'exp', 'clo'];
   return list.includes(currency);
}

function isSegwit(purpose) {
   return purpose == 49 || purpose == 84 || purpose == 141;
}

function generateAddresses(seedHex, purpose, currency, account, change, start, end) {
   var coinData = CoinData[currency];
   var derivationPath = getDerivationPath(purpose, coinData.coinType, account, change);
   var bip32ExtendedKey = calcBip32ExtendedKey(seedHex, coinData.network, derivationPath);
   var addresses = [];
   for (let index = start; index <= end; index++) {
      // derive HDkey for this row of the table
      var key = bip32ExtendedKey.derive(index);
      var keyPair = key.keyPair;
      // get pubkey
      var pubkey = keyPair.getPublicKeyBuffer().toString('hex');
      // get address
      var address = keyPair.getAddress().toString();
      // get privkey
      var hasPrivkey = !key.isNeutered();
      var privkey = "NA";
      if (hasPrivkey) {
         privkey = keyPair.toWIF();
      }
      var path = derivationPath + "/" + index;
      // Ethereum values are different
      if (isLikeEthereum(currency)) {
         var privKeyBuffer = keyPair.d.toBuffer(32);
         privkey = privKeyBuffer.toString('hex');
         var addressBuffer = ethUtil.privateToAddress(privKeyBuffer);
         var hexAddress = addressBuffer.toString('hex');
         var checksumAddress = ethUtil.toChecksumAddress(hexAddress);
         address = ethUtil.addHexPrefix(checksumAddress);
         privkey = ethUtil.addHexPrefix(privkey);
         pubkey = ethUtil.addHexPrefix(pubkey);
      }
      // Ripple values are different
      if (currency == "xrp") {
         privkey = convertRipplePriv(privkey);
         address = convertRippleAdrr(address);
      }
      // Bitcoin Cash address format may vary
      if (currency == "bch") {
         var bchAddrType = "cashaddr";
         if (bchAddrType == "cashaddr") {
            address = bchaddr.toCashAddress(address);
         } else if (bchAddrType == "bitpay") {
            address = bchaddr.toBitpayAddress(address);
         }
      }
      // Segwit addresses are different
      if (isSegwit(purpose)) {
         //TODO: which kind is better?
         var isP2wpkh = false;
         var isP2wpkhInP2sh = true;
         if (isP2wpkh) {
            var keyhash = bitcoinjs.bitcoin.crypto.hash160(key.getPublicKeyBuffer());
            var scriptpubkey = bitcoinjs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash);
            address = bitcoinjs.bitcoin.address.fromOutputScript(scriptpubkey, coinData.network)
         } else if (isP2wpkhInP2sh) {
            var keyhash = bitcoinjs.bitcoin.crypto.hash160(key.getPublicKeyBuffer());
            var scriptsig = bitcoinjs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash);
            var addressbytes = bitcoinjs.bitcoin.crypto.hash160(scriptsig);
            var scriptpubkey = bitcoinjs.bitcoin.script.scriptHash.output.encode(addressbytes);
            address = bitcoinjs.bitcoin.address.fromOutputScript(scriptpubkey, coinData.network)
         }
      }
      addresses.push({
         path,
         address,
         pubkey,
         privkey
      });
   }

   return addresses;
}

module.exports = {
   generateAddresses: generateAddresses,
}