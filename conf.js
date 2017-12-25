// An Hertz configuration file.
exports.config = {
  directConnect: true,

  params: {
      env: 'preprod'
  },

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./pages/*/*.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
      browser.ignoreSynchronization = true;
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter());
      jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
              allure.createAttachment('Screenshot', function () {
                  return new Buffer(png, 'base64')
              }, 'image/png')();
              done();
          })
      });
  },
  suites: {
      home: 'pages/home/**/*.spec.js'
  }
};