 var helper = require('./helper');
 describe("Home page.",function(){

    beforeEach(function() {
		console.log('starting browser.');
		browser.driver.manage().window().maximize();
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
		console.log('closing browser.');
    });
	describe("test destination", function(){
		it("testing destination", function(){
			var pickUpLocBox = element(by.tagName('hertz-location-select')).element(by.css('.input-container-content')).element(by.tagName('input'));
			helper.waitElementToBeClickable(pickUpLocBox);
			pickUpLocBox.sendKeys('Austin');
browser.sleep(1000);
      browser.actions().mouseMove({x: 50, y: 0}).doubleClick().perform();
      var continueButt = element(by.css('.core-btn.core-primary'));
      helper.waitElementToBeVisisble(continueButt);
      continueButt.click();
      browser.sleep(4000);
		});
	});
	///fdgfg 
});
