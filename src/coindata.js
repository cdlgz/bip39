const Networks = {
   btc: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'bc',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80
   },
   btg: {
      messagePrefix: '\x1DBitcoin Gold Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4
      },
      pubKeyHash: 38,
      scriptHash: 23,
      wif: 128
   },
   btctestnet: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'tb',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef
   },
}

const CoinData = {
   btc: {
      coinType: 0,
      network: Networks.btc
   },
   btg: {
      coinType: 156,
      network: Networks.btg
   },
   btctestnet: {
      coinType: 1,
      network: Networks.btctestnet
   },
   eth: {
      coinType: 60,
      network: Networks.btc
   },
   etc: {
      coinType: 61,
      network: Networks.btc
   },
   xrp: {
      coinType: 144,
      network: Networks.btc
   },
}

Object.freeze(CoinData);

module.exports = CoinData;