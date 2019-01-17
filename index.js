require('dotenv').load();
const AlexaSkillKit = require('alexa-skill-kit');

const {
  GetCurrencyPrice,
  LaunchRequest,
} = require('./intents');

const bitsyAlexaSkill = (event, context) => {
  AlexaSkillKit(event, context, (message) => {
    const { type, intent } = message;
    if (intent) {
      const { name } = intent;
      switch (name) {
        case 'GetCurrencyPrice':
          return GetCurrencyPrice(message.intent);
        default:
          return 'Intento no reconocido.';
      }
    } else if (type === 'LaunchRequest') {
      return LaunchRequest();
    }
    return 'Mensaje no reconocido.';
  });
};

exports.handler = bitsyAlexaSkill;
