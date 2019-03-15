var utils = require('./utils')
let BigNumber = require('bignumber.js');

// add inputs until we reach or surpass the target value (or deplete)
// worst-case: O(n)
function accumulative(utxos, outputs, feeRate) {
  if (!isFinite(utils.uintOrNaN(feeRate))) return {}
  var bytesAccum = utils.transactionBytes([], outputs)

  var inAccum = 0
  var inputs = []
  var outAccum = utils.sumOrNaN(outputs)

  for (var i = 0; i < utxos.length; ++i) {
    var utxo = utxos[i]
    var utxoBytes = utils.inputBytes(utxo)
    var utxoFee = feeRate * utxoBytes
    var utxoValue = utils.uintOrNaN(utxo.value)

    // skip detrimental input
    if (utxoFee > utxo.value) {
      if (i === utxos.length - 1) return {
        fee: feeRate * (bytesAccum + utxoBytes)
      }
      continue
    }

    bytesAccum += utxoBytes
    inAccum += utxoValue
    inputs.push(utxo)

    var fee = feeRate * bytesAccum

    // go again?
    if (inAccum < outAccum + fee) continue

    return utils.finalize(inputs, outputs, feeRate)
  }

  return {
    fee: feeRate * bytesAccum
  }
}

// for vhkd
// add inputs until we reach or surpass the target value (or deplete)
// worst-case: O(n)
function percentFeeAccumulative(utxos, outputs, feeRate) {
  var inAccum = 0
  var inputs = []
  var outAccum = utils.sumOrNaN(outputs)
  let fee = new BigNumber(outAccum).times(feeRate).integerValue(0).toNumber();

  for (var i = 0; i < utxos.length; ++i) {
    var utxo = utxos[i]
    var utxoValue = utils.uintOrNaN(utxo.value)

    // skip detrimental input
    if (fee > utxo.value) {
      if (i === utxos.length - 1) return {
        fee: fee
      }
      continue
    }

    inAccum += utxoValue
    inputs.push(utxo)

    // go again?
    if (inAccum < outAccum + fee) continue

    return utils.feefinalize(inputs, outputs, fee)
  }

  return {
    fee: fee
  }
}

module.exports = {
  accumulative: accumulative,
  percentFeeAccumulative: percentFeeAccumulative
}