var helper = require('../../helper');

var HomePage = function() {
	this.pickUpLocBox = $('hertz-pickup-location .input-container-content input');
	this.pickupDateBox = $('hertz-pickup-date .select-top-static-value');
	this.pickupDayElem = $$('hertz-pickup-date .datepicker-calendar-year-month-week-day');
	this.pickupTimeElem = $$('hertz-pickup-time core-timepicker .option');
	this.dropoffLocBox = $('hertz-dropoff-location .input-container-content input');
	this.dropoffDateBox = $('hertz-dropoff-date .select-top-static-value');
	this.dropOffDayElem = $$('hertz-dropoff-date .datepicker-calendar-year-month-week-day');
	this.dropOffTimeElem = $$('hertz-dropoff-time core-timepicker .option');
	this.locationList = $$('hertz-location-list li');
	this.continueButt = element(by.buttonText('Continue'));

    this.enterLocation = function(locationName, locationElement) {
        helper.waitElementToBeClickable(locationElement);
        locationElement.sendKeys(locationName);
        browser.sleep(500);
    }

	this.clickOnDate = function(dateElement) {
        helper.waitElementToBeClickable(dateElement);
        dateElement.click();
        browser.sleep(500);
    }

    this.selectPickOrDropOption = function(option){
    	this.locationList.filter(function(elem, index) {
			  return elem.getText().then(function(text) {
			    return text.includes(option) === true;
			  });
			}).first().click();
    	browser.sleep(500);
    }
    
    this.selectDateOrTime = function(array, dateOrTime){
    	array.filter(function(elem, index) {
			  return elem.getText().then(function(text) {
			    return text === dateOrTime;
			  });
			}).first().click();
    	browser.sleep(500);
    }
    
    this.clickOnContinue = function(){
    	helper.waitElementToBeClickable(this.continueButt);
        this.continueButt.click();
        return require('./../vehicles/choose_car.po');
    }
}
module.exports = HomePage;