var assert = require('assert');
var BCOINJS = require('../src/bcoinsdk');
var ECOINJS = require('../src/ecoinsdk');

describe('BTC MultiSig Transaction', function () {

  describe('#signMultiSigTransaction()', function () {

    it('should sign multisig transaction ok 2/3 the second sign', function () {
      var txData = {
        currency: 'btctest',
        redeemScript: '522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853ae',
        txHex: '0200000001e00be8ec14f5fdf3c12494600b92be1e172c096f55eb4118343bc8ca85a550a801000000b500483045022100c131983b60bd47be9f3bda098e1b63390023fb520ac3cd4b6dce9940ea3266f8022009f3050fac5c15fa03ce2bb5b8b6961c2e58d3a3b74bda02972234d674c04ab4014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000b6b1b0000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000',
        key: 'KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z'
      };
      var txHex = BCOINJS.bcoin.signMultisigTransaction(txData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0200000001e00be8ec14f5fdf3c12494600b92be1e172c096f55eb4118343bc8ca85a550a801000000fdfe0000483045022100af3d8ec2f89aeaf02dfe85bb48a8a8579c392a65b55ff0b2194a0afa82d559aa02204374f3ae477c908efb839d5003aee212928121aaa497e1418cc52bba953ab7d801483045022100c131983b60bd47be9f3bda098e1b63390023fb520ac3cd4b6dce9940ea3266f8022009f3050fac5c15fa03ce2bb5b8b6961c2e58d3a3b74bda02972234d674c04ab4014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000b6b1b0000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000');
    });

    it('should sign multisig transaction ok 2/2 the first sign', function () {
      var txData = {
        currency: 'btctest',
        redeemScript: '522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853ae',
        txHex: '0200000001bbf1c6dd9a9c0afc9e969d200dbed9e815d6b7cda446bfb31f86cd631983cf5c0100000000ffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000237580000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000',
        key: 'KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z'
      };
      var txHex = BCOINJS.bcoin.signMultisigTransaction(txData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0200000001bbf1c6dd9a9c0afc9e969d200dbed9e815d6b7cda446bfb31f86cd631983cf5c01000000b500483045022100dda13a6d1be18b122f6e5a76020ee7ef7fa3f71e42b9ddec471af729dbe663f4022031b55fa32c8343ece1fd3e61fbabd16375c0aa565a4a4d8dc3a615807bbce05d014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000237580000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000');
    });
  });
});

describe('ETH MultiSig Transaction', function () {

  describe('#signMultiSigTransaction()', function () {

    it('should sign multisig transaction ok 2/3 the second sign', function () {
      var txData = {
        hash: '0x0ef3b7b66d682fe7d50c5b4dc721c89c083b64aced74d1a9857f7443241dd840',
        key: '2309cdb18048a6c6ddf16028c44441f5949151c5cd5c3b4009297a63c773f415'
      };
      var txHex = ECOINJS.ecoin.signMultisigTransaction(txData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0xf897eb80a246902904059eda59cc6e0d725cd0630d51603b203b09f36d76dee7239e63fdecd8efdd30b8fbc554b2424238990ddf3c681d04a348e0a96fb4969f1b');
    });
  });
});