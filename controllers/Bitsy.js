const rp = require('request-promise');

const { BITSO_URL } = process.env;

class Bitsy {
  static getTickerBook(book) {
    const options = {
      uri: `${BITSO_URL}/ticker`,
      qs: {
        book,
      },
      method: 'GET',
      json: true,
    };
    return rp(options);
  }
}

module.exports = Bitsy;
