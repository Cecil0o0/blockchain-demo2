class Transaction {
  constructor ({ from, to }) {
    // 交易的金额：多少钱，跟输入的差额为交易的服务费；(单位BTC)
    this.amount = ''
    this.from = {
      // 付款人地址：合法的地址，公钥经过 SHA256 和 RIPEMD160 两次 hash，得到 160 位 hash 串
      addr: null,
      // 付款人对交易的签字确认：确保交易内容不被篡改
      signature: null,
      // 付款人资金的来源交易 ID：从哪个交易的输出作为本次交易的输入；
      UTXI: ''
    }
    this.to = {
      // 收款人地址：合法的地址；
      addr: '',
      // 收款人的公钥：收款人的公钥；
      publicKey: '',
      // 时间戳：交易何时能生效
      receivedTime: ''
    }
  }
}

module.exports = Transaction
