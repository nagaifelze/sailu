var Data = require('./Data');
var EC = protractor.ExpectedConditions;
var waitElementToBeClickable = function (elm) {
  browser.wait(EC.elementToBeClickable(elm), 15000);
};
var openSite = function () {
    var url = "";
    var env = browser.params.env;
    if(env === "preprod")
        url = Data.site.url.preprod;
    else if(env === "qa")
        url = Data.site.url.qa;
    browser.get(url);
}
exports.waitElementToBeClickable = waitElementToBeClickable;
exports.openSite = openSite;