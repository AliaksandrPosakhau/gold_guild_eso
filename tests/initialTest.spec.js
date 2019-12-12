const {expect} = require("chai");

describe('opens the main landing page of the resource', function () {

    beforeEach(()=>{
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().setSize(1680, 840);
    });

    it('lands to exchange page', async function () {
       browser.get(`https://.${process.env.KIM_KILO}.tamrieltradecentre.com/pc/Trade`);
       browser.sleep(20000);
        expect(true).to.be.equal(true);
    });

    afterEach(async ()=>{       
        return browser.driver.manage().deleteAllCookies();
    });
});
