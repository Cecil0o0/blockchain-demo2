'use strict'
const crypto = require('crypto')

function calcHash(txt) {
  const salt = 'abcdefg'
  return crypto.createHash('sha256', salt).update(txt).digest('hex')
}

function isValidTransaction (transaction) {
  if (!!transaction) {
    // 交易是否已经处理过；

    // 交易是否合法。包括地址是否合法、发起交易者是输入地址的合法拥有者、是否是 UTXO；

    // 交易的输入之和是否大于输出之和。
    return true
  } else {
    return false
  }
}

module.exports = {
  calcHash,
  isValidTransaction
}
