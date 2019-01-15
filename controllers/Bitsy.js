const rp = require('request-promise');

const { BITSO_URL } = process.env;

class Bitsy {
  constructor() {
    this.bitsoUrl = BITSO_URL;
  }

  processRequest(options) {
    const opt = { ...options, url: this.bitsoUrl };
    return rp(opt);
  }

  getTickerBook(book) {
    const options = {
      path: '/thicker',
      qs: {
        book,
      },
      method: 'GET',
      json: true,
    };
    return this.processRequest(options);
  }
}

module.exports = Bitsy;
