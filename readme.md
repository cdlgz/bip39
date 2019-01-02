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
  changeAddress: ''
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
};
var fee = bcoin.calculateFee(data);
console.log(fee);
```

参数说明：
 
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

# License

This BIP39 tool is released under the terms of the MIT license. See LICENSE for
more information or see https://opensource.org/licenses/MIT.