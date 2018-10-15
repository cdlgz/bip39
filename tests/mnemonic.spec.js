var assert = require('assert');
var HDWJS = require('../src/hdwsdk');

describe('Mnemonic', function () {

   describe('#generateMnemonic()', function () {

      it('should generate mnemonic with 15 words default', function () {
         var mnemonic = HDWJS.hdWallet.generateMnemonic();
         var words = mnemonic.data.split(',');
         assert.equal(words.length, 15);
      });

      it('should generate mnemonic with 12 words default', function () {
         var mnemonic = HDWJS.hdWallet.generateMnemonic(12);
         var words = mnemonic.data.split(',');
         assert.equal(words.length, 12);
      });

   });

   describe('#validateMnemonic()', function () {

      it('mnemonic should be required', function () {
         var mnemonic = HDWJS.hdWallet.validateMnemonic();
         assert.equal(mnemonic.status, false);
         assert.equal(mnemonic.data, false);
         assert.equal(mnemonic.code, 2001);
         
         mnemonic = HDWJS.hdWallet.validateMnemonic("");
         assert.equal(mnemonic.status, false);
         assert.equal(mnemonic.data, false);
         assert.equal(mnemonic.code, 2001);
      });

      it('mnemonic should be valid', function () {
         var mnemonic = HDWJS.hdWallet.validateMnemonic("doctor inmate pretty ostrich enroll clock tiger verb height ride winter genuine gun trap soap".split(' ').join(','));
         assert.equal(mnemonic.status, true);
         assert.equal(mnemonic.data, true);
      });

      it('mnemonic should be inalid', function () {
         var mnemonic = HDWJS.hdWallet.validateMnemonic("doctor inmate pretty ostrich enroll".split(' ').join(','));
         assert.equal(mnemonic.status, false);
         assert.equal(mnemonic.data, false);
      });

   });

});