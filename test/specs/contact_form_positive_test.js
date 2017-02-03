// POSITIVE - Contact Form tests - Verify the different "I am" types and successful submission cases
// NOTE: Required input forms:
//		I am
//		First Name, Last Name
//		Email Address
//		Phone Number
//		Address information

var faker = require('faker');

Feature('GSTVdotcom Contact Form');

Scenario('Verify Tests Are Running', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');
});

Scenario('Postive Path - Submit a Contact Request - An Advertiser - No DMA states - Yes contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');
  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - An Advertiser - No DMA states - No contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0');
  I.see('What DMA/States are you looking to advertise in?')

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // Making sure we can still submit without checking this box
  //I.click('#label_3_5_1');
  
  // Submit
  I.click('Contact GSTV');
  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - An Advertiser - Yes DMA states - Yes contact', (I) => {
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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');
  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - An Advertiser - Yes DMA states - No contact', (I) => {
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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // Making sure we can still submit without checking this box
  //I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - A Gas Retailer - Unspecified installing - Yes contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_1');
  I.waitForElement('#choice_3_10_1');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - A Gas Retailer - Unspecified installing - No contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_1');
  I.waitForElement('#choice_3_10_1');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // Making sure we can still submit without checking this box
  //I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - A Gas Retailer - Yes installing - Yes contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_1');
  I.waitForElement('#choice_3_10_0');
  I.click('#label_3_10_0');
  I.waitForElement('#field_3_16');
  I.see('to apply for inOvationTV at your station');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - A Gas Retailer - Yes installing - No contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_1');
  I.waitForElement('#choice_3_10_0');
  I.click('#label_3_10_0');
  I.waitForElement('#field_3_16');
  I.see('to apply for inOvationTV at your station');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // Making sure we can still submit without checking this box
  //I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - A Gas Retailer - No installing - Yes contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_1');
  I.waitForElement('#choice_3_10_1');
  I.click('#label_3_10_1');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - A Gas Retailer - No installing - No contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_1');
  I.waitForElement('#choice_3_10_1');
  I.click('#label_3_10_1');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // Making sure we can still submit without checking this box
  //I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - A Journalist - Yes contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_2');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - A Journalist - No contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_2');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // Making sure we can still submit without checking this box
  //I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - Make a general inquiry - Yes contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_3');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - Making a general inquiry - No contact', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_3');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // Making sure we can still submit without checking this box
  //I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

// Fail one submission due to lack of data, then see if we can submit successfully with good data
Scenario('Positive Path - Submit a contract request - Fail submission then succeed submission', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  I.click('#label_3_8_0');
  // Submit
  I.click('Contact GSTV');

  I.see('This field is required.', '#field_3_2 .validation_message');
  
  // Now fill the form with valid information and submit again
  // I am
  I.click('#label_3_8_3');

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
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );
  
  // Any additional information?
  I.fillField('textarea[name="input_7"]', faker.lorem.paragraph() );

  // Making sure we can still submit without checking this box
  //I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');

  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');
});