
class SideBar {
    constructor() {
        this.sideBar = element(by.css('.sidebar-folders'));
        this.write = element(by.css('[data-title-shortcut="N"]'));
        this.inbox = element(by.css('[href="/inbox/"]'));
        this.sent = element(by.css('[href="/sent/"]'));
        this.drafts = element(by.css('[href="/drafts/"]'));
        this.spam = element(by.css('[href="/spam/"]'));
        this.trash = element(by.css('[href="/trash/"]'));
    }

    clickSideBar(el) {
        switch (el) {
            case "write":
                return this.write.click();
            case "inbox":
                return this.inbox.click();
            case "sent":
                return this.sent.click();
            case "drafts":
                return this.drafts.click();
            case "trash":
                return this.trash.click();
        }           
    }

}


module.exports = SideBar;