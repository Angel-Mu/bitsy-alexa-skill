const AlexaMessageBuilder = require('alexa-message-builder');

const LaunchRequest = () => new AlexaMessageBuilder()
  .addText(`
    Bienvenido a Bitsy.
    Aquí puedes conseguir información mas reciente acerca de algunas crypto monedas como
    Bitcoin, Bitcoin Cash, Ethereum, Ripple.
  `)
  .get();

module.exports = LaunchRequest;
