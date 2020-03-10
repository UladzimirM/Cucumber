"use strict";
let {Then, When, Given} = require('cucumber');
const expect = require('chai').expect;
const stepFunctions = require('../utils/stepFunctions.js');
const logger = require('../../config/loggerConfig.js').logger;
const HomePage = require('../../po/homePage');
this.homePage = new HomePage();


Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    let pageTitle = await browser.getTitle();
    logger.info(`Page title should${notArg} be ${text}`);
    if (notArg){
        return expect(pageTitle).to.not.equal(text);
    }
    else {
        return expect(pageTitle).to.be.equal(text);
    }  
});

Then(/^Address and subject of last should be "([^"]*)" and "([^"]*)"$/, (mailAddress, mailSubject) => {
       logger.info(`Address and subject of last should be ${mailAddress} and ${mailSubject}`);
       return this.homePage.checkEmail(mailAddress,mailSubject);
    
});
