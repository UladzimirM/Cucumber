const LoginBox = require('.//loginBox');
let {Then, When, Given} = require('cucumber');
const stepFunctions = require('../utils/stepFunctions.js')
const logger = require('../../config/loggerConfig.js').logger;

class BasePage {
    constructor() {
       this.loginBox = new LoginBox();
}

    checkPageTitle(pageTitle) {
        return this.getPageTitle().then((title) => {
            return title === pageTitle;
        });
    }
    

    getPageTitle() {
        return browser.getTitle();
    }
}
module.exports = BasePage;