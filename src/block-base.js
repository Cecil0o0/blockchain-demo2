'use strict'

const utils = require('./utils.js')
const uuidv4 = require('uuid/v4')

class Block_base {
  constructor () {
    this.defineProp()
    this.init()
    this.secure()
  }
  defineProp () {
    this.size = 0
    this.head = {
      // 版本(前导字符)
      VER: 0xfff,
      // 时间戳
      TS: new Date().getTime(),
      // 难度指标
      DI: 10,
      // 上一个区块头的SHA 256值
      PBH: '',
      // 包含的所有验证过的交易的 Merkle 树根的哈希值
      CHH: '',
      // 随机值
      Nonce: uuidv4().replace(/-/g, '')
    }
    // 所有交易的具体内容，长度可变
    this.body = {
      // 交易个数计时器
      counter: 0,
      // 交易信息数组
      trans: [],
      // 本个区块交易的信息输出
      UTXO: {}
    }
  }
  secure () {
    var _this = this
    // 代理head
    this.head = new Proxy(this.head, {
      set (target, prop, value, receiver) {
        throw new Error('禁止修改区块头部信息')
      },
      get (target, prop, receiver) {
        return target[prop]
      }
    })
    // 定义size属性
    Object.defineProperty(this, 'size', {
      configurable: false,
      enumerable: true,
      get () {
        return this.stringifyBlock().length
      },
      set () {
        throw new Error('禁止直接修改区块大小')
      }
    })
  }
  stringifyBlock () {
    return JSON.stringify(this)
  }
  init () {
    this.setCHH()
  }
  setCHH () {
    this.head.CHH = utils.calcHash(this.stringifyBlock())
  }
}

let a = new Block_base()

module.exports = Block_base
