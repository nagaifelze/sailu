var EC = protractor.ExpectedConditions;
var waitElementToBeClickable = function (elm) {
  browser.wait(EC.elementToBeClickable(elm), 15000);
};
exports.waitElementToBeClickable = waitElementToBeClickable;