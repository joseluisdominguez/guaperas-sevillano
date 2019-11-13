'use strict';

require('dotenv').config();
var Alexa = require('alexa-sdk');
var languageStrings = require('./languageStrings.js');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('IAmPretty');
    },
    'GetNewFactIntent': function () {
        this.emit('IAmPretty');
    },
    'IAmPretty': function () {
      var msg = this.t('IAmPretty');
      this.emit(':tellWithCard', msg, this.t("SKILL_NAME"), msg)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
