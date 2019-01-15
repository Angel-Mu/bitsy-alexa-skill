require('dotenv').load();
const AlexaSkillKit = require('alexa-skill-kit');

const {
  GetCurrencyPrice,
  LaunchRequest,
} = require('./intents');

const bitsyAlexaSkill = (event, context) => {
  AlexaSkillKit(event, context, (message) => {
    const { intent: { name } = {}, type } = message;
    if (name) {
      switch (name) {
        case 'GetCurrencyPrice':
          return GetCurrencyPrice(message.intent);
        default:
          break;
      }
    } else if (type === 'LaunchRequest') {
      return LaunchRequest();
    }

    return 'Intento no reconocido';
  });
};

exports.handler = bitsyAlexaSkill;
