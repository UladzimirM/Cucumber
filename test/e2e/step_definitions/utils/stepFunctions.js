const EC = protractor.ExpectedConditions;
const logger = require('../../config/loggerConfig.js').logger;

    let clickToElement = (element) => {
        return element.click() .then(() => {
            return browser.driver.sleep(1000);
              })
             } ;

    module.exports = {
      clickToElement
    }