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

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );

  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');
  // Error valiation should display
  I.see('There was a problem with your submission. Errors have been highlighted below.', '#gform_3 .validation_error')  
});

Scenario('Negative Path - Contact Type Not Provided', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // Submit
  I.click('Contact GSTV');

  I.see('This field is required.', '#field_3_8 .validation_message')
});

//Verify address error validation, And file should not submit.
Scenario('Address Validation - incorrect address', (I) => {
 I.amOnPage('/Contact');
 I.see('Reach the team behind the screens');
 I.fillField('input[name="input_2.3"]', faker.name.firstName() );
 I.fillField('input[name="input_2.6"]', faker.name.lastName() );
 I.fillField('input[name="input_19"]', faker.company.companyName() );
 I.fillField('input[name="input_4"]', faker.internet.email() );
 I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );
 I.fillField('input[name="input_1.1"]',faker.address.streetAddress() );
 I.click('Contact GSTV');

 I.see('This field is required. Please enter a complete address.', '#field_3_1 .validation_message')

});
