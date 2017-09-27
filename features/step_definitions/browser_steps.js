/*Do not use arrow functions for hooks or step_definitions. 
The "this" would be ignored if you do.*/
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given, When, Then }) {
  Given('I am on the playlista.mfm page', function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  When('I sign up', function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  Then('I should get a notification', function(callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
});
