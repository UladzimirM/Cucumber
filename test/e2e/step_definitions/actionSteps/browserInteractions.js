"use strict";
let {Then, When, Given} = require('cucumber');

const logger = require('../../config/loggerConfig.js').logger;
const SideBar = require('../../po/sideBar')
this.sideBar = new SideBar();
const HomePage = require('../../po/homePage')
this.homePage = new HomePage();

When(/^I wait "([^"]*)" seconds$/, (waitTime) => {
    logger.info(`I wait ${waitTime} seconds`);
    return browser.sleep(waitTime * 1000);
});

When(/^I open "([^"]*)" url$/, (url) => {
    logger.info(`I open ${url} url`);
    return browser.get(url);
});

When(/^I open link "([^"]*)" email$/, (element) => {
    logger.info(`I open link ${element} email`);
    return this.sideBar.clickSideBar(element) ;
});

When(/^I log out mail$/, () => {
    logger.info(`I log out mail`);
    return this.homePage.logoutEmail();
});


// When(/^I highlight "([^"]*)"$/, (alias) => {
//     logger.info(`I highlight ${alias}`);
//     return highlightElement(alias);
// });