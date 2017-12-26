var helper = require('../../helper');

var ChooseCar = function() {
    this.pageTitle = $('.vehicle-page-title');
    this.getTitle = function(){
        return this.pageTitle.getText();
    }
};
module.exports = ChooseCar;