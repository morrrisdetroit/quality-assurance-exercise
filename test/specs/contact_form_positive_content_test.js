// POSITIVE - Contact Form tests - Verify some content

var faker = require('faker');

Feature('GSTVdotcom Contact Form');

Scenario('Positive Path - Submit a Contact Request - Verify title', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');
  I.seeInTitle('Contact | GSTV');
});

Scenario('Postive Path - Submit a Contact Request - Verify aside-gstv content', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');
  I.see('Contact Us', '#aside-gstv');
  I.see('GSTV Detroit', '#aside-gstv');
  I.see('1201 Woodward Ave.', '#aside-gstv');
  I.see('Detroit, MI 48226', '#aside-gstv');
  I.see('(888) 581-GSTV', '#aside-gstv');
  I.see('(248) 581-3000', '#aside-gstv');
});

Scenario('Positive Path - Submit a Contact Request - Test "Send us a message" button', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');
  I.click('Send us a message');
  I.see('Reach the team behind the screens');
  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');
});