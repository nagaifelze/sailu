var helper = require('../../helper');
var ChooseCar = {
    pageTitle : $('.vehicles-content-header-title'),
    getVPTitle : function(){
        return this.pageTitle.getText();
    }
};
module.exports = ChooseCar;