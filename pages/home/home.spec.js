HomePage = require('./home.po.js');

describe('Home page : ', function() {

    var homePage = new HomePage();

    beforeEach(function() {
    	console.log('starting browser.');
		browser.driver.manage().window().maximize();
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('fill up the reservation form', function() {
    	//enter pickup location
    	homePage.enterLocation('Austin', homePage.pickUpLocBox);
    	console.log('successfully entered pickup location Austin.');
    	
    	//Select the pickup location from the auto suggestions
    	homePage.selectPickOrDropOption('Austin Bergstrom');
		console.log('successfully selected the \'Austin Bergstrom\' option from pickup locations.');

		//Click on drop off location
    	homePage.enterLocation('Dallas', homePage.dropoffLocBox);
    	console.log('successfully entered dropoff location Dallas.');

    	//Select the pickup location from the auto suggestions
    	homePage.selectPickOrDropOption('Dallas Love');
    	console.log('successfully selected the \'Dallas Love\' option from drop off locations.');

    	//click on the pickup date
    	homePage.clickOnDate(homePage.pickupDateBox);
    	console.log('successfully clicked the pickup date.');
    	
    	//select 27th as pickup date
    	homePage.selectDateOrTime(homePage.pickupDayElem, "27");
		console.log('successfully selected 27th as the pickup date.');
		
		//select the pick up time
		homePage.selectDateOrTime(homePage.pickupTimeElem, "06:00 PM");
		console.log('successfully selected 6 PM as the pickup time.');
		
		//select 29th as drop off date
		homePage.selectDateOrTime(homePage.dropOffDayElem, "29");
		console.log('successfully selected 29th as the drop off date.');
		
		//select the drop off time
		homePage.selectDateOrTime(homePage.dropOffTimeElem, "07:00 PM");
		console.log('successfully selected 6 PM as the drop off time.');
		
		//click on continue
		homePage.clickOnContinue();
		
		browser.sleep(4000);
    });
});
