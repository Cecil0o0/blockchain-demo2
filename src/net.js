const util = require('util')

const TransactionQueue = require('./transaction-queue')

const net = (function(){

  // 挖矿目标
  let target = 0
  // 难度系数
  let difficulty = 4

  return new class Net {
    constructor () {}
    generate () {
      util.promisify(setInterval)(60 * 60 * 1000).then(() => {
        target = 2 ** (256 - difficulty)
      })
    }
    oberserve (prop = 'target', callback = () => {}) {
      if (prop === 'target') {
        randomNumberCBList.push(callback)
      }
    }
    getTarget () {
      return target
    }
  }
})()

net.generate()

Object.defineProperty(process, 'net', {
  configurable: false,
  get () {
    return net
  },
  writable: false
})

module.exports = net
