var logger = require('./../../logger');
var Data = require('./../../Data');
ChooseCar = require('./choose_car.po');

describe('Choose your car :', function() {
    var chooseCar = new ChooseCar();

    beforeEach(function() {
        logger.log('info','starting browser.');
        browser.driver.manage().window().maximize();
        helper.openSite();
    });
    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    it('should have title', function () {
        expect(chooseCar.getTitle()).toBe(Data.page.choose_car.title);
    });
});