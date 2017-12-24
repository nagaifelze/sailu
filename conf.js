  // An Hertz configuration file.
exports.config = {
  directConnect: true,

  params: {
      url: 'http://www.c2c-preprod.hertz.com'
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
  },
  suites: {
      home: 'pages/home/**/*.spec.js'
  },
};
