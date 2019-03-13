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
  btctest: {
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
  vhkd: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x46,
    scriptHash: 0x49,
    wif: 0x80
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
  btctest: {
    coinType: 0,
    network: Networks.btctest
  },
  eth: {
    coinType: 60,
    network: Networks.btc,
    chainId: 1
  },
  ethtest: {
    coinType: 60,
    network: Networks.btctest,
    chainId: 4
  },
  etc: {
    coinType: 61,
    network: Networks.btc
  },
  xrp: {
    coinType: 144,
    network: Networks.btc
  },
  vhkd: {
    coinType: 999991,
    network: Networks.vhkd
  },
  vhkdtest: {
    coinType: 999991,
    network: Networks.vhkd
  },
}

Object.freeze(CoinData);

module.exports = CoinData;