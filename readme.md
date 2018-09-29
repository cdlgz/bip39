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

1 generateMnemonic

```javascript
var mnemonic = window.hdWallet.generateMnemonic(15);
console.log(mnemonic);
```

```
{
  status: true,
  data: 'blush easily upgrade hedgehog valve sugar library favorite clutch vintage stereo series',
  code: 0 
}
```

2 validateMnemonic

```javascript
var mnemonic = HDWJS.hdWallet.validateMnemonic("doctor inmate pretty ostrich enroll");
console.log(mnemonic);
```

```
{ status: false, data: false, code: null }
```

3 generateAddresses

```javascript
var monic = "total bubble almost soft alter throw wrap foil soap water exist mountain fossil hybrid young";
var passphrase = "123456";
var purpose = 44;
var currency = "btc";
var account = 0;
var change = 0;
var start = 0;
var end = 0;
var addresses = HDWJS.hdWallet.generateAddresses(monic, passphrase, purpose, currency, account, change, start, end);
console.log(addresses);
```

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

# License

This BIP39 tool is released under the terms of the MIT license. See LICENSE for
more information or see https://opensource.org/licenses/MIT.