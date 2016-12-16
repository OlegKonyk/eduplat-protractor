exports.config = {
  framework: "jasmine2",
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/*.spec.js'],

  onPrepare: function(){
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter());
    browser.driver.manage().window().setPosition(0,0);
    browser.driver.manage().window().setSize(1280, 720);
  }
}
