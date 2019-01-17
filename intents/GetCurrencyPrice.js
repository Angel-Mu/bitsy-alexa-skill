const AlexaMessageBuilder = require('alexa-message-builder');
const Bitsy = require('../controllers/Bitsy');

const GetCurrencyPrice = async (intent) => {
  const {
    slots: {
      cryptoCurrency: {
        value: book = 'btc_mxn',
      } = { },
    } = { },
  } = intent;

  const response = await Bitsy.getTickerBook(book);
  const { payload: { bid } = {} } = response;

  return new AlexaMessageBuilder()
    .addText(`El precio actual de ${book} es de ${bid} pesos mexicanos`)
    .get();
};

module.exports = GetCurrencyPrice;
