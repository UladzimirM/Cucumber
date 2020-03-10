"use strict";
const {When} = require('cucumber');
const logger = require('../../config/loggerConfig.js').logger;

When(/^I click "([^"]*)"$/, (alias) => {
    logger.info(`I click ${alias}`);
    return elementHelper(alias).click();
});