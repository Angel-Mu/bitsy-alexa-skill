require('dotenv').load();

const AlexaSkillKit = require('alexa-skill-kit');
const AlexaMessageBuilder = require('alexa-message-builder');
const rp = require('request-promise');

const { BITSO_URL } = process.env;

const getCurrencyDetails = (book = 'btc_mxn') => {
  const options = {
    uri: `${BITSO_URL}/ticker`,
    qs: {
      book,
    },
    method: 'GET',
    json: true,
  };
  return rp(options);
};

const bitsyAlexaSkill = (event, context) => {
  AlexaSkillKit(event, context, (message) => {
    if (message.intent && message.intent.name === 'GetCurrencyPrice') {
      const token = message.intent.slots.cryptoCurrency.value || 'btc_mxn';
      return getCurrencyDetails()
        .then((response) => {
          const { payload: { bid } = {} } = response;
          return `El precio actual de ${token} es de ${bid} pesos mexicanos`;
        });
    }

    if (message.type === 'LaunchRequest') {
      return new AlexaMessageBuilder()
        .addText(`
          Bienvenido a Bitsy.
          Aquí puedes conseguir información mas reciente acerca de algunas crypto monedas como
          Bitcoin, Bitcoin Cash, Ethereum, Ripples.
        `)
        .get();
    }

    return 'Intento no reconocido.';
  });
};

exports.handler = bitsyAlexaSkill;
