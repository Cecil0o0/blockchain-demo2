const chain = (function(){

  const chain = []

  return new class Chain {
    constructor () {}
    pop () {
      return chain.length > 0 ? chain.slice(-1) : {}
    }
  }

})()

Object.defineProperty(process, 'blockchain', {
  configurable: false,
  get () {
    return chain
  },
  set () {
    return false
  }
})

module.exports = chain
