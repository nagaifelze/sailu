var helper = require('../../helper');

var HomePage =  {
	pickUpLocBox : $('hertz-pickup-location .input-container-content input'),
	pickupDateBox : $('hertz-pickup-date .select-top-static-value'),
	pickupDayElem : $$('hertz-pickup-date .datepicker-calendar-year-month-week-day'),
	pickupTimeElem : $$('hertz-pickup-time core-timepicker .option'),
	dropoffLocBox : $('hertz-dropoff-location .input-container-content input'),
	dropoffDateBox : $('hertz-dropoff-date .select-top-static-value'),
	dropOffDayElem : $$('hertz-dropoff-date .datepicker-calendar-year-month-week-day'),
	dropOffTimeElem : $$('hertz-dropoff-time core-timepicker .option'),
	locationList : $$('hertz-location-list li'),
	continueButt : element(by.buttonText('Continue')),

    enterLocation : function(locationName, locationElement) {
        helper.waitElementToBeClickable(locationElement);
        locationElement.sendKeys(locationName);
        browser.sleep(500);
    },

	clickOnDate : function(dateElement) {
        helper.waitElementToBeClickable(dateElement);
        dateElement.click();
        browser.sleep(500);
    },

    selectPickOrDropOption : function(option){
    	this.locationList.filter(function(elem, index) {
			  return elem.getText().then(function(text) {
			    return text.includes(option) === true;
			  });
			}).first().click();
    	browser.sleep(500);
    },
    
    selectDateOrTime : function(array, dateOrTime){
    	array.filter(function(elem, index) {
			  return elem.getText().then(function(text) {
			    return text === dateOrTime;
			  });
			}).first().click();
    	browser.sleep(500);
    },
    
    clickOnContinue : function(){
    	helper.waitElementToBeClickable(this.continueButt);
        this.continueButt.click();
        browser.sleep(1000);
        return require('./../vehicles/choose_car.po');
    }
}
module.exports = HomePage;