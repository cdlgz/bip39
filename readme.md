## how to use HDWSDK as http api?

```
$ npm install

$ npm start
```

Open http://localhost:3021, That's all!

## how to use HDWSDK in html?

```
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="utf-8" />
        <title>HdWallet SDK</title>
        <meta content="HdWallet SDK" name="description"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    </head>
    <body>
        <script src="hdwsdk.min.js"></script>
        <script src="bcoinsdk.min.js"></script>
        <script src="ecoinsdk.min.js"></script>
    </body>
</html>
```

Press F12, in the console, type "window.hdWallet", it's the instance you could use in your code.

## API ##

请求参数说明：参数只接受一个object对象，请求字段都放在object对象中。

返回结果说明：

  status: 布尔型，true成功，false失败。
  data: object类型/字符串/数值型，执行结果数据。
  code: 整型，错误代码，参照src/errorcode.txt

1 generateMnemonic

```javascript
var mnemonic = hdWallet.generateMnemonic({
  numWords: 12
});
console.log(mnemonic);
```

请求参数：

  numWords: 指定要生成助记词的个数，默认15个。

```
{
  status: true,
  data: 'blush,easily,upgrade,hedgehog,valve,sugar,library,favorite,clutch,vintage,stereo,series',
  code: 0 
}
```

返回结果：

  按逗号隔开的助记词字符串。


2 validateMnemonic

```javascript
var mnemonic = hdWallet.validateMnemonic({
  mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
});
console.log(mnemonic);
```

请求参数：

  mnemonic: 按逗号隔开的助记词字符串。

```
{ status: false, data: false, code: null }
```

返回结果：

  布尔值，true，有效；false，无效。

3 generateAddresses

```javascript
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
var addresses = hdWallet.generateAddresses(addressData);
console.log(addresses);
```

参数说明：

  mnemonic: 按逗号隔开的助记词字符串。
  
  passphrase: 助记词密语，默认为""。

  currency: 币种，btc 比特币，eth 以太币，xrp 瑞波币，eos 柚子币。具体将src/currencies.txt

  purpose: bip44或者bip49，默认值为44。

  account: 账号，默认值为0。

  change: 找零地址，1为找零地址，0为普通地址，默认值为0。

  start: 开始序号，起始值为0；

  end: 结束序号，起始值为0；start为0，end为1，表示获取0和1对应的两个地址；以此类推。

```
{ 
  status: true,
  data:[
     {
       path: 'm/44'/0'/0'/0/0',
       address: '1pKuHs52FygYAFLuf5X3wREp6YKSjrGuV',
       pubkey: '02ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4',
       privkey: 'KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z' 
     } 
  ],
  code: null 
}
```

返回结果：

  返回多个地址，每个地址参数说明：

    path: 地址对应的路径值。

    address: 地址，wif格式。
    
    pubkey: 地址对应的公钥。
    
    privkey: 地址对应的私钥。

4 getWalletIdByMnemonic

```javascript
var mnemonicData = {
  mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
};
var walletId = hdWallet.getWalletIdByMnemonic(mnemonicData);
console.log(walletId);
```

参数说明：

  mnemonic: 按逗号隔开的助记词字符串。
  
```
{ 
  status: true,
  data:'1pKuHs52FygYAFLuf5X3wREp6YKSjrGuV',
  code: null 
}
```

返回结果：

  data: WalletId，wif格式

5 getXpubKeyByMnemonic 

```javascript
var mnemonicData = {
  mnemonic: "total,bubble,almost,soft,alter,throw,wrap,foil,soap,water,exist,mountain,fossil,hybrid,young",
  currency: 'btc',
  purpose: 44,
  account: 0,
};
var xpubKey = hdWallet.getXpubKeyByMnemonic(mnemonicData);
console.log(xpubKey);
```

参数说明：

  mnemonic: 按逗号隔开的助记词字符串。

  currency: 币种，btc 比特币，eth 以太币，xrp 瑞波币，eos 柚子币。具体将src/currencies.txt

  purpose: bip44或者bip49，默认值为44。

  account: 账号，默认值为0。

返回结果：

```
{ 
  status: true,
  data:'xpub6CGK5N5r3w8i6JtFPgCtnMo9Q7NbgvgFqCF3NLULnmagtecbvxpHF7w14gW4nPJrAVbfWZuxnprz1XLSLtS9vudjEbxzMTj1GnvsQWEyLm4',
  code: null 
}
```

6 generateAddressesByXpubKey

```javascript
var data = {
  xpubKey: "xpub6CGK5N5r3w8i6JtFPgCtnMo9Q7NbgvgFqCF3NLULnmagtecbvxpHF7w14gW4nPJrAVbfWZuxnprz1XLSLtS9vudjEbxzMTj1GnvsQWEyLm4",
  currency: 'btc',
  change: 0,
  start: 0,
  end: 0
};
var addresses = hdWallet.generateAddressesByXpubKey(data);
console.log(addresses);
```

参数说明：

  xpubKey: 根公钥

  currency: 币种，btc 比特币，eth 以太币，xrp 瑞波币，eos 柚子币。具体将src/currencies.txt

  change: 找零地址，1为找零地址，0为普通地址，默认值为0。

  start: 开始序号，起始值为0；

  end: 结束序号，起始值为0；start为0，end为1，表示获取0和1对应的两个地址；以此类推。

返回结果：

```
{ 
  status: true,
  data: ['1LY3cuDYGuiEpMBELwRoJTQ6exfBu5atBo'],
  code: null 
}
```

7 validateAddressByXpubKey

```javascript
var data = {
  xpubKey: "xpub6CGK5N5r3w8i6JtFPgCtnMo9Q7NbgvgFqCF3NLULnmagtecbvxpHF7w14gW4nPJrAVbfWZuxnprz1XLSLtS9vudjEbxzMTj1GnvsQWEyLm4",
  currency: 'btc',
  change: 0,
  index: 0,
  address: '1LY3cuDYGuiEpMBELwRoJTQ6exfBu5atBo'
};
var validate = hdWallet.validateAddressByXpubKey(data);
console.log(validate);
```

参数说明：

  xpubKey: 根公钥

  currency: 币种，btc 比特币，eth 以太币，xrp 瑞波币，eos 柚子币。具体将src/currencies.txt

  change: 找零地址，1为找零地址，0为普通地址，默认值为0。

  index: 地址序号

  address: 地址值

返回结果：

```
{ 
  status: true,
  data: true,
  code: null 
}
```

8 generateAddressByWIF

```javascript
var data = {
  wif: "KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z",
  currency: 'btc',
};
var address = hdWallet.generateAddressByWIF(data);
console.log(address);
```

参数说明：

  wif: private key

  currency: 币种，btc 比特币，eth 以太币，xrp 瑞波币，eos 柚子币。具体将src/currencies.txt

返回结果：

```
{ 
  status: true,
  data: '1pKuHs52FygYAFLuf5X3wREp6YKSjrGuV',
  code: null 
}
```

9 buildTransaction

```javascript
var data = {
  currency: 'btctest',
  utxos: [{
    txId: '...',
    vout: 0,
    value: 10000,
    key: ''
  }],
  targets: [{
    address: '1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm',
    value: 5000
  }],
  feeRate: 55,
  changeAddress: '',
  minFee: 0, //for vhkd
  maxFee: 0 //for vhkd
};
var transaction = bcoin.buildTransaction(data);
console.log(transaction);
```

参数说明：

  currency: 币种，btc 比特币，eth 以太币，xrp 瑞波币，eos 柚子币。具体将src/currencies.txt
  
  utxos: utxos list

  targets: targets list

  feeRate: 55

  changeAddress: changeAddress

返回结果：

```
{ 
  status: true,
  data: 'transaction hex ... ...',
  code: null 
}
```

10 calculateFee

```javascript
var data = {
  currency: 'btc',
  utxos: [{
    txId: '...',
    vout: 0,
    value: 10000,
    key: ''
  }],
  targets: [{
    address: '1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm',
    value: 5000
  }],
  feeRate: 55,
  minFee: 0, //for vhkd
  maxFee: 0 //for vhkd
};
var fee = bcoin.calculateFee(data);
console.log(fee);
```

参数说明：
 
  currency: 币种，btc 比特币, vhkd VHKD。具体将src/currencies.txt
  
  utxos: utxos list

  targets: targets list

  feeRate: 55

返回结果：

```
{ 
  status: true,
  data: 900,
  code: null 
}
```

11 validateAddress

```javascript
var data = {
  currency: 'btc',
  address: '1LY3cuDYGuiEpMBELwRoJTQ6exfBu5atBo'
};
var validate = hdWallet.validateAddress(data);
console.log(validate);
```

参数说明：

  currency: 币种，btc 比特币，eth 以太币，xrp 瑞波币，eos 柚子币。具体将src/currencies.txt

  address: 地址值

返回结果：

```
{ 
  status: true,
  data: true,
  code: null 
}
```

12 decryptKeyStore

```javascript
let keyStoreData = {
  currency: 'ethtest',
  keyStoreJSON : {
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
  },
  password : 'test!'
}
let account = ecoin.decryptKeyStore(keyStoreData);
console.log(account);
```

参数说明：

  currency: 币种，eth/ethtest 以太币
  
  keyStoreJSON: The encrypted private key to decrypt

  password: The password used for encryption.

返回结果：

``` 
{
  "status":true,
  "data":{
    "address":"0x2c7536E3605D9C16a7a3D7b1898e529396a65c23",
    "privateKey":"0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318"
  },
  "code":0
}
```

13 exportKeyStore

```javascript
let accountData = {
  currency: 'ethtest',
  privateKey: '0x80f5153f0cef08002a11eba35cc87db1fa4eac1f803fcbdaacd8b4dc77adaf16',
  password: ''
};

let keyStoreData = ecoin.exportKeyStore(accountData);
console.log(keyStoreData);
```

参数说明：

  currency: 币种，eth/ethtest 以太币

  privateKey: private key to export

  password: The password used for encryption.

返回结果：

``` 
{ 
  status: true,
  data: '{"version":3,"id":"dfadf6ef-fba8-4295-8b13-81496d340374","address":"97c222a1798084033ec71da0ee4d367a66d5a68c","crypto":{"ciphertext":"2218c03af49f0379ff7ab3b471b0699e8883665d2953eec57f7644bd74dbb2d0","cipherparams":{"iv":"f3bea6976729d224a9736ed2445cc6dd"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"93321f85f30745020873626400bf3a47c6b33bce847dd9ad2401d9541841dd49","n":8192,"r":8,"p":1},"mac":"b8623dc17d886ca11b0bfe54232704e077d46b0c10d01f454201536477d5c671"}}',
  code: 0 
}
```

14 signTransaction - ETH

```javascript
let tranData = {
  currency: 'ethtest',
  to: '0x958649BD0830f2F9f74dFD07b50F05160E21D8B3',
  value: '0.1',
  gas: 21000,
  gasPrice: '1',
  privateKey: '0xf18780d0e2d67cd2c6f04b0e75e643a0d5330ff2d19f51d934b4540835e760ca',
  nonce: 1
};
var txHex = ecoin.signTransaction(tranData);
console.log(txHex);
```

参数说明：

  currency: 币种，eth/ethtest 以太币

  privateKey: private key to export

  to: The password used for encryption.

  value: transfer quantity, eth

  gas: gas limit, number

  gasPrice: gas price in GWEI

  nonce: transaction count of account

返回结果：

``` 
{ status: true,
  data:'0xf86b01843b9aca0082520894958649bd0830f2f9f74dfd07b50f05160e21d8b388016345785d8a0000802ba08e738c9376ded6eb76d0951af44932d38335aeb6ed3faf49280bc508f323cecba04fbd430d5b67f0c2b80a9872133804e67346caaa28cdada97cf0444b195d717e',
  code: 0 
}
```

15 signTransaction - ERC20 TOKEN

```javascript
let tranData = {
  currency: 'ethtest',
  to: '0x958649BD0830f2F9f74dFD07b50F05160E21D8B3',
  value: '0.1',
  gas: 21000,
  gasPrice: '1',
  privateKey: '0xf18780d0e2d67cd2c6f04b0e75e643a0d5330ff2d19f51d934b4540835e760ca',
  tokenContract: '0xf30bd271c4bdd6b1280a8f4882752e7ea05b3d7c',
  tokenDecimals: 18,
  nonce: 1
};
var txHex = ecoin.signTransaction(tranData);
console.log(txHex);
```

参数说明：

  currency: 币种，eth/ethtest 以太币

  privateKey: private key to export

  to: The password used for encryption.

  value: transfer token quantity

  gas: gas limit, number

  gasPrice: gas price in GWEI

  tokenContract: erc20 token contract address

  tokenDecimals: erc20 token decimals

  nonce: transaction count of account

返回结果：

``` 
{
  status: true,
  data:'0xf8a806843b9aca0082e0f294f30bd271c4bdd6b1280a8f4882752e7ea05b3d7c80b844a9059cbb000000000000000000000000958649bd0830f2f9f74dfd07b50f05160e21d8b30000000000000000000000000000000000000000000000000de0b6b3a76400002ba045bc785045ac529de97f3db5dc27a57df1cf6c1838c3371c170c3ad45189966ca04c615f33b8edb4836cafa9acc4e589c19949fd59ad820bc8a34c2a59bc6c552b',
  code: 0 
}
```

# License

This BIP39 tool is released under the terms of the MIT license. See LICENSE for
more information or see https://opensource.org/licenses/MIT.