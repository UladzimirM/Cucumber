//const BasePage = require('./basePage');
const SideBar = require('./sideBar');

class HomePage
 //extends BasePage 
 {
    constructor() {
        //super();
        this.sideBar = new SideBar();
        this.logoCompact = element(by.xpath('//a[@class="portal-menu__logo portal-menu__logo_compact"]'));
        this.sendEmail = element(by.xpath('//div[@class="dataset__items"]/a[1]//span[@class="ll-crpt"]'));
        this.sendSubject = element(by.xpath('//div[@class="dataset__items"]/a[1]//span[@class="ll-sj__normal"]'));
        this.logout = element(by.id('PH_logoutLink'));
    }


checkEmail(email,mailSubject){
    browser.driver.sleep(1000);
   return this.sendEmail.getText().then((title) => {
    return title === email ;
}).then (() => {
    return this.sendSubject.getText();
}).then((title) => {
    return title === mailSubject;
});
  }

  logoutEmail (){
    return this.logout.click();
  }

}
module.exports = HomePage;