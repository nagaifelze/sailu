var logger = require('./../../logger.js');
var Data = require('./../../Data');
var helper = require('./../../helper');
var using = require('jasmine-data-provider');
var homePage = require('./home.po.js');
require('./../vehicles/choose_car.po');

describe('Home page : ', function() {

    beforeEach(function() {
        helper.goToPage(Data.page.home.url);
    });
    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    using([{title:Data.site.invalidTitle}, {title:Data.site.validTitle}], function (data) {
        logger.log('info','Testing title..');
    	it('should have a title', function () {
            expect(browser.getTitle()).toEqual(data.title);
        });
    });
    it('fill up the reservation form', function() {
    	//enter pickup location
    	homePage.enterLocation(Data.page.home.location.searchWord.pickup, homePage.pickUpLocBox);
    	logger.log('info','successfully entered pickup location');
    	
    	//Select the pickup location from the auto suggestions
    	homePage.selectPickOrDropOption(Data.page.home.location.dropDownOption.pickup);
		logger.log('info','successfully selected the option from pickup locations.');

		//Click on drop off location
    	homePage.enterLocation(Data.page.home.location.searchWord.dropOff, homePage.dropoffLocBox);
    	logger.log('info','successfully entered dropoff location');

    	//Select the dropoff location from the auto suggestions
    	homePage.selectPickOrDropOption(Data.page.home.location.dropDownOption.dropOff);
    	logger.log('info','successfully selected the option from drop off locations.');

    	//click on the pickup date
    	homePage.clickOnDate(homePage.pickupDateBox);
    	logger.log('info','successfully clicked the pickup date.');
    	
    	//select pickup date
    	homePage.selectDateOrTime(homePage.pickupDayElem, Data.page.home.date.day.pickup);
		logger.log('info','successfully selected the pickup date.');
		
		//select the pick up time
		homePage.selectDateOrTime(homePage.pickupTimeElem, Data.page.home.date.time.pickup);
		logger.log('info','successfully selected the pickup time.');
		
		//select drop off date
		homePage.selectDateOrTime(homePage.dropOffDayElem, Data.page.home.date.day.dropOff);
		logger.log('info','successfully selected the drop off date.');
		
		//select the drop off time
		homePage.selectDateOrTime(homePage.dropOffTimeElem, Data.page.home.date.time.dropOff);
		logger.log('info','successfully selected the drop off time.');
		
		//click on continue and check the choose your car page title
		expect(homePage.clickOnContinue().getVPTitle()).toBe(Data.page.choose_car.title);
		
		browser.sleep(4000);
    });
});