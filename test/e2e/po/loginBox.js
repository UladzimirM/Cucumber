class LoginBox {
    constructor() {
        this.loginBox = element(by.id('mailbox-container'));
        this.login = element(by.id('mailbox:login'));
        this.submitButton = element(by.id('mailbox:submit'));
        this.password = element(by.id('mailbox:password'));
        this.logo = element(by.id('logo'));
    }

    highlightWithJS(el) {
        let bg;
        return el.getCssValue("background").then(function (col) {
            bg = col;
        }).then(function () {
            return browser.driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", el)
        }).then(function () {
            return browser.driver.sleep(1000);
        }).then(function () {
            console.log('bg', bg);
            return browser.driver.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", el);
        }).then(function () {
            return browser.driver.sleep(1000);
        })
    }
    enterEmail(login, password) {
        let emailLogin = login;
        let passwordText = password;

        this.highlightWithJS(browser.driver.findElement((by.id('mailbox:login'))))
        .then(() => {
            return  this.login.clear();
        })
        .then(() => {
            return  this.login.sendKeys(emailLogin);
        })
          .then(() => {
            return this.submitButton.click();
        })
        .then(() => {
            return this.highlightWithJS(browser.driver.findElement((by.id('mailbox:password'))));
        })
        .then(() => { 
            return this.password.sendKeys(passwordText);
        })
        .then(() => {
            return this.submitButton.click();
         })
    }
}

module.exports = LoginBox;