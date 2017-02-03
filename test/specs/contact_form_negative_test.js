// NEGATIVE - Contact Form tests - Verify different ways we can fail submitting
// NOTE: Required input forms:
//		I am
//		First Name, Last Name
//		Email Address
//		Phone Number
//		Address information

var faker = require('faker');

Feature('GSTVdotcom Contact Form');

Scenario('Negative Path - Contact Type Not Provided', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // Submit
  I.click('Contact GSTV');

  I.see('This field is required.', '#field_3_8 .validation_message')
});

// Only selected I am, submission should fail
Scenario('Negative Path - Contact Type Not Provided', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  I.click('#label_3_8_0');
  // Submit
  I.click('Contact GSTV');

  I.see('This field is required.', '#field_3_2 .validation_message');
});

// No first name provided, submission should fail
Scenario('Negative Path - Submit a Contact Request - An Advertiser - No first name', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'New York NY, Los Angeles CA, Chicago IL, Philadelphia PA, and Dallas-Ft. Worth TX')

  // Name
  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.name.lastName() );

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', faker.internet.email());
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );
  /// Address
  I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
  I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
  I.fillField('input[name="input_1.3"]', faker.address.city() );
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.see('This field is required. Please enter the first and last name.', '#field_3_2 .validation_message');
  I.see('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

// No last name provided, submission should fail
Scenario('Negative Path - Submit a Contact Request - An Advertiser - No last name', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'New York NY, Los Angeles CA, Chicago IL, Philadelphia PA, and Dallas-Ft. Worth TX')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.name.firstName() );

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', faker.internet.email());
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );
  /// Address
  I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
  I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
  I.fillField('input[name="input_1.3"]', faker.address.city() );
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');
  I.see('This field is required. Please enter the first and last name.', '#field_3_2 .validation_message');
  I.see('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

// No email provided, submission should fail
Scenario('Negative Path - Submit a Contact Request - An Advertiser - No email', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'New York NY, Los Angeles CA, Chicago IL, Philadelphia PA, and Dallas-Ft. Worth TX')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.name.firstName() );
  
  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.name.lastName() );

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );
  /// Address
  I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
  I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
  I.fillField('input[name="input_1.3"]', faker.address.city() );
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.see('This field is required.', '#field_3_4 .validation_message');
  I.see('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

// No phone provided, submission should fail
Scenario('Negative Path - Submit a Contact Request - An Advertiser - No phone', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'New York NY, Los Angeles CA, Chicago IL, Philadelphia PA, and Dallas-Ft. Worth TX')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.name.firstName() );
  
  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.name.lastName() );

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', faker.internet.email());
  /// Address
  I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
  I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
  I.fillField('input[name="input_1.3"]', faker.address.city() );
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );
  
  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.see('Phone format: (###) ###-####', '#field_3_3 .validation_message');
  I.see('This field is required.', '#field_3_3 .validation_message');
  I.see('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

// Partial phone provided, submission should fail
Scenario('Negative Path - Submit a Contact Request - An Advertiser - Partial phone', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'New York NY, Los Angeles CA, Chicago IL, Philadelphia PA, and Dallas-Ft. Worth TX')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.name.firstName() );
  
  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.name.lastName() );

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', faker.internet.email());
  /// Phone
  I.fillField('input[name="input_3"]', '555551' );
  /// Address
  I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
  I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
  I.fillField('input[name="input_1.3"]', faker.address.city() );
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );
  
  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.see('Phone format: (###) ###-####', '#field_3_3 .validation_message');
  I.see('This field is required.', '#field_3_3 .validation_message');
  I.see('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

// No address provided, submission should fail
Scenario('Negative Path - Submit a Contact Request - An Advertiser - No address', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'New York NY, Los Angeles CA, Chicago IL, Philadelphia PA, and Dallas-Ft. Worth TX')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.name.firstName() );

  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.name.lastName() );

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', faker.internet.email());
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );

  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');
  I.see('This field is required. Please enter a complete address.', '#field_3_1 .validation_message');
  I.see('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

// Partial address provided, submission should fail
Scenario('Negative Path - Submit a Contact Request - An Advertiser - Partial address', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'New York NY, Los Angeles CA, Chicago IL, Philadelphia PA, and Dallas-Ft. Worth TX')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.name.firstName() );

  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.name.lastName() );

  // Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', faker.internet.email());
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );
  /// Address
  I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
  I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
  I.fillField('input[name="input_1.3"]', faker.address.city() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');
  I.see('This field is required. Please enter a complete address.', '#field_3_1 .validation_message');
  I.see('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});