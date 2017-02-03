// Negative Path - Contact Form tests - Stress test the submission failure a bit

var faker = require('faker');

Feature('GSTVdotcom Contact Form');

Scenario('Negative Path - Submit a Contact Request - Stress Test', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0')
  I.see('What DMA/States are you looking to advertise in?')
  // NOTE: Just using faker.lorem.sentences for now to autofill data. Should probably use a string generator or some really
  // huge static strings for data.
  I.fillField('input[name=input_18]', faker.lorem.sentences() );

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.lorem.sentences() );

  /// Last Name
  //I.fillField('input[name="input_2.6"]', faker.lorem.sentences() );

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', 'john444121351235135135315353153153151315351353315135531553135535353513513532@gmail.com' );
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );
  /// Address
  I.fillField('input[name="input_1.1"]', faker.lorem.sentences() );
  I.fillField('input[name="input_1.2"]', faker.lorem.sentences() );
  I.fillField('input[name="input_1.3"]', faker.lorem.sentences() );
  I.fillField('input[name="input_1.5"]', faker.lorem.sentences() );

  // Submit, should probably loop this
  for(var i = 0; i <= 50; i++) {
    I.click('Contact GSTV');
    I.see('This field is required. Please enter the first and last name.', '#field_3_2 .validation_message');
    I.see('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');
  }
});