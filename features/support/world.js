/* Do not use arrow functions for hooks or step_definitions. 
The "this" would be ignored if you do.*/
require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
}

defineSupportCode(({ setWorldConstructor }) => {
  setWorldConstructor(CustomWorld);
});
