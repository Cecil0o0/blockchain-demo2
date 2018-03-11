const { isValidTransaction } = require('./utils')

const queue = (function closure() {
  // 未验证过的交易
  const queue_unCheck = new Set()
  // 验证过的交易
  const queue_Check = new Set()

  return new class Pool {
    constructor() {}
    add(transaction, type) {
      if (isValidTransaction(transaction)) {
        type === 1 && queue_unCheck.add(transaction)
        type === 2 && queue_Check.add(transaction)
      }
    }
    has(transaction, type) {
      if (isValidTransaction(transaction)) {
        type === 1 && queue_unCheck.has(transaction)
        type === 2 && queue_Check.has(transaction)
      }
    }
    get(type, timerange = []) {
      return Array.from(type === 2 ? queue_Check : queue_unCheck).filter(v => {
        return v.receivedTime > timerange[0] && v.receivedTime < timerange[1]
      })
    }
  }
})()

Object.defineProperty(process, 'transactionPoolIns', {
  configurable: false,
  set() {
    return false
  },
  get() {
    return queue
  }
})

module.exports = queue
