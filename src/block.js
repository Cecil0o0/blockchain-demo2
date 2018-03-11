'use strict'
const Base = require('./block-base.js')
const { isValidTransaction } = require('./utils')

class Block extends Base {
  constructor () {
    super()
  }
  addTransaction (transaction) {
    if (isValidTransaction(transaction)) {

    }
  }
}

module.exports = Block
