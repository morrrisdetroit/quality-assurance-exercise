var faker = require('faker');

Feature('GSTVdotcom Contact Form');

Scenario('Verify Tests Are Running', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');
});

Scenario('Postive Path - Submit a Contact Request', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0')
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'New York NY, Los Angeles CA, Chicago IL, Philadelphia PA, and Dallas-Ft. Worth TX')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.name.firstName() );
  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.name.lastName() );

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() )

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', faker.internet.email() );

  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );

  // Address
  /// Street Address
  I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );

  /// Address Line 2
  I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );

  /// City
  I.fillField('input[name="input_1.3"]', faker.address.city() );

  /// State
  I.selectOption('select[name="input_1.4"]', faker.address.state() )

  /// ZIP
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});
