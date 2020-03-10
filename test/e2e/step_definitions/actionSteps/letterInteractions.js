"use strict";
let {Then, When, Given} = require('cucumber');
const stepFunctions = require('../utils/stepFunctions.js')
const LetterForm = require('../../po/letterForm')
const LoginBox = require('../../po/loginBox')
const logger = require('../../config/loggerConfig.js').logger;
this.loginBox = new LoginBox();
this.letterForm = new LetterForm();

const CLICKABLE_TIMEOUT = 20 * 1000;

When(/^I enter the email with login "([^"]*)" and password "([^"]*)"$/, (login, password) => {
    logger.info(`I enter the email with login ${login} and password ${password}`);
    return this.loginBox.enterEmail(login, password);
});

When(/^I write new mail$/, () => {
    logger.info(`I write new mail`);
    return this.letterForm.writeEmail();
});

When(/^I save this mail$/, () => {
    logger.info(`I save this mail`);
    return this.letterForm.saveEmail();
});

When(/^I close this mail$/, () => {
    logger.info(`I close this mail`);
    return this.letterForm.closeEmail();
});

When(/^I send this mail$/, () => {
    logger.info(`I send this mail`);
    return this.letterForm.sendEmail();
});

When(/^I open last mail$/, () => {
    logger.info(`I open last mail`);
    return this.letterForm.openEmail();
});
