var logger = require('./../../logger');
var Data = require('./../../Data');
var helper = require('../../helper');
var chooseCar = require('./choose_car.po');

describe('Choose your car :', function() {

    beforeEach(function() {
        logger.log('info','starting browser.');
        helper.goToPage(Data.page.choose_car.url);
    });
    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    it('should have title', function () {
        browser.sleep(1000);
        expect(chooseCar.getVPTitle()).toBe(Data.page.choose_car.title);
    });
});