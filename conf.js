// An Hertz configuration file.
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var AllureReporter = require('jasmine-allure-reporter');
var path = require('path');

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  // Framework to use. Jasmine2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./pages/*/*.spec.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
      defaultTimeoutInterval: 30000,
      print: function() {}
  },
  onPrepare: function() {
      browser.ignoreSynchronization = true;
      browser.driver.manage().window().setSize(1280, 1024);
      jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
              displayStacktrace: true
          }
      }));
      jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
              savePath: 'reports/html'
          })
      );
      jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'reports/allure-results'
      }));
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