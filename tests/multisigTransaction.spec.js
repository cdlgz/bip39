var assert = require('assert');
var BCOINJS = require('../src/bcoinsdk');
var ECOINJS = require('../src/ecoinsdk');

describe('BTC MultiSig Transaction', function () {

  describe('#signMultiSigTransaction()', function () {

    it('should sign multisig transaction ok 2/3 the second sign 1', function () {
      var txData = {
        currency: 'btc',
        redeemScript: '522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853ae',
        txHex: '0200000001e00be8ec14f5fdf3c12494600b92be1e172c096f55eb4118343bc8ca85a550a801000000b500483045022100c131983b60bd47be9f3bda098e1b63390023fb520ac3cd4b6dce9940ea3266f8022009f3050fac5c15fa03ce2bb5b8b6961c2e58d3a3b74bda02972234d674c04ab4014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000b6b1b0000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000',
        key: 'KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z'
      };
      var txHex = BCOINJS.bcoin.signMultisigTransaction(txData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0200000001e00be8ec14f5fdf3c12494600b92be1e172c096f55eb4118343bc8ca85a550a801000000fdfe0000483045022100af3d8ec2f89aeaf02dfe85bb48a8a8579c392a65b55ff0b2194a0afa82d559aa02204374f3ae477c908efb839d5003aee212928121aaa497e1418cc52bba953ab7d801483045022100c131983b60bd47be9f3bda098e1b63390023fb520ac3cd4b6dce9940ea3266f8022009f3050fac5c15fa03ce2bb5b8b6961c2e58d3a3b74bda02972234d674c04ab4014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000b6b1b0000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000');
    });


    it('should sign multisig transaction ok 2/3 the second sign 2', function () {
      var txData = {
        currency: 'btc',
        utxos: [
          {
            vout: 0,
            redeemScript: '522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853ae',
          }
        ],
        txHex: '0200000001e00be8ec14f5fdf3c12494600b92be1e172c096f55eb4118343bc8ca85a550a801000000b500483045022100c131983b60bd47be9f3bda098e1b63390023fb520ac3cd4b6dce9940ea3266f8022009f3050fac5c15fa03ce2bb5b8b6961c2e58d3a3b74bda02972234d674c04ab4014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000b6b1b0000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000',
        key: 'KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z'
      };
      var txHex = BCOINJS.bcoin.signMultisigTransaction(txData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0200000001e00be8ec14f5fdf3c12494600b92be1e172c096f55eb4118343bc8ca85a550a801000000fdfe0000483045022100af3d8ec2f89aeaf02dfe85bb48a8a8579c392a65b55ff0b2194a0afa82d559aa02204374f3ae477c908efb839d5003aee212928121aaa497e1418cc52bba953ab7d801483045022100c131983b60bd47be9f3bda098e1b63390023fb520ac3cd4b6dce9940ea3266f8022009f3050fac5c15fa03ce2bb5b8b6961c2e58d3a3b74bda02972234d674c04ab4014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000b6b1b0000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000');
    });

    
    it('should sign multisig transaction ok 2/3 the second sign 3', function () {
      var txData = {
        currency: 'btc',
        utxos: [
          {
            vout: 0,
            redeemScript: '5321020f2eab7c92cf9929ed604f84f1beabc4bfb610f0bb2ce14c5e8db2b840e9c9142102600893fa4c64957082b66b57ded02756af8000d0d796ead6eb868e42b701d45221028dc5ba19d4cf37e7fed23b7c16f71081d4847515b2db333a9fd2f7f84626ffbd21028b7ff819e57eb163fc2fdf030fe42f28c3e09a0cf8874b1a7c4df8c74f230244210254d76785dde44d332ece32559256ed50fe5456fb8a484f8b807843002525880855ae',
          }
        ],
        txHex: '020000000170249ff97e3961e76b779f81adb2f3e438c449767ee46153efd66bd70f198e930000000000ffffffff02ce61aecee800000017a914a3e39e26c7c51c7476eb2cd0effddb0d12e113908700e1f505000000001976a914aa40f87a24f67b27392ebeda04d9a052d758f13a88ac00000000',
        key: 'L1TLP8zu2MtTD15PT5i67cXEtcKHNBES8XhimW8CLhk9qzQTaXS2'
      };
      var txHex = BCOINJS.bcoin.signMultisigTransaction(txData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '020000000170249ff97e3961e76b779f81adb2f3e438c449767ee46153efd66bd70f198e9300000000f900483045022100b4c336197f8e227019d10818d91c8699cd614ab17addcac3a35126f7329ee37102207fea906c73a64e34b201e3b995c0e1d93dcb7a898a210ca743687aadd446742e014cad5321020f2eab7c92cf9929ed604f84f1beabc4bfb610f0bb2ce14c5e8db2b840e9c9142102600893fa4c64957082b66b57ded02756af8000d0d796ead6eb868e42b701d45221028dc5ba19d4cf37e7fed23b7c16f71081d4847515b2db333a9fd2f7f84626ffbd21028b7ff819e57eb163fc2fdf030fe42f28c3e09a0cf8874b1a7c4df8c74f230244210254d76785dde44d332ece32559256ed50fe5456fb8a484f8b807843002525880855aeffffffff02ce61aecee800000017a914a3e39e26c7c51c7476eb2cd0effddb0d12e113908700e1f505000000001976a914aa40f87a24f67b27392ebeda04d9a052d758f13a88ac00000000');
    });
    

    it('should sign multisig transaction ok 2/2 the first sign 1', function () {
      var txData = {
        currency: 'btc',
        redeemScript: '522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853ae',
        txHex: '0200000001bbf1c6dd9a9c0afc9e969d200dbed9e815d6b7cda446bfb31f86cd631983cf5c0100000000ffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000237580000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000',
        key: 'KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z'
      };
      var txHex = BCOINJS.bcoin.signMultisigTransaction(txData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0200000001bbf1c6dd9a9c0afc9e969d200dbed9e815d6b7cda446bfb31f86cd631983cf5c01000000b500483045022100dda13a6d1be18b122f6e5a76020ee7ef7fa3f71e42b9ddec471af729dbe663f4022031b55fa32c8343ece1fd3e61fbabd16375c0aa565a4a4d8dc3a615807bbce05d014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000237580000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000');
    });

    it('should sign multisig transaction ok 2/2 the first sign 2', function () {
      var txData = {
        currency: 'btc',
        utxos: [
          {
            vout: 0,
            redeemScript: '522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853ae',
          }
        ],
        txHex: '0200000001bbf1c6dd9a9c0afc9e969d200dbed9e815d6b7cda446bfb31f86cd631983cf5c0100000000ffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000237580000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000',
        key: 'KxLd81HhAAMzFTPtrYQKXfhBXZWkhenTK8JxkAMnsGZKgqmWDk2z'
      };
      var txHex = BCOINJS.bcoin.signMultisigTransaction(txData);
      console.log(txHex);
      assert.equal(txHex.status, true);
      assert.equal(txHex.data, '0200000001bbf1c6dd9a9c0afc9e969d200dbed9e815d6b7cda446bfb31f86cd631983cf5c01000000b500483045022100dda13a6d1be18b122f6e5a76020ee7ef7fa3f71e42b9ddec471af729dbe663f4022031b55fa32c8343ece1fd3e61fbabd16375c0aa565a4a4d8dc3a615807bbce05d014c69522102ba7d8066bce9a34e1263a1deb8af98993928f85784f45ee75fd1b8eca2929cb4210246eeeef5ef11b29f9f36d77d61732e5fc9b2eda189f592c5eb373463ef83a50c21039154d52152b6e88e46310ebaf71a9dcb53899a46c7fd24c4d804e3dd370e5c1853aeffffffff0280969800000000001976a9143e4c2ffde7afe2834013c082a77562c2863d5c7988ac000237580000000017a91443be3386d48bc67b6b56c0ac0edc8eeb9a68ebcb8700000000');
    });

    it('should sign multisig transaction ok from app', function () {
      var txData = {
        currency: 'btc',
        utxos: [
          {
            vout: 0,
            redeemScript: '0020ecd80d0149c94f8dea0a967022e756073683b97ecc5d4b2845081223037bbefb',
          }
        ],
        txHex: '0200000001ae1fd2f8cbc6819dc202042a7322cc9740b87c642e46c580a665f074c28f0c370100000000ffffffff02d67f4b000000000017a9143e92f63bd007ab395177c6828af0b37701076d4987503403000000000017a9142c28c3db3fc7076deee78da5e6a6d5be0cbf0fac8700000000',
        key: 'KygyM6NTyEnV9gYF9mx7zmESiS1E8mLfpZiqPoxPkLiYzm5xp2my'
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