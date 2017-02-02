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

   // Last Name
   I.fillField('input[name = "input_2.6"]', faker.name.lastName() );

// Company
  I.fillField('input[name="input_19"]', faker.company.companyName() );

  // Contact Information
  /// Phone Number
  // Email Address
  I.fillField('input[name ="input_4"]', faker.internet.email() );

// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );

  //Address
  I.fillField('input[name="input_1.1"]',faker.address.streetAddress() );
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

Scenario('Negative Path - Contact Type Not Provided', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // Submit
  I.click('Contact GSTV');

  I.see('This field is required.', '#field_3_8 .validation_message')
});

Scenario('positive path - Fill out all the fields and submit a contact request as a gas retailer', (I) => {
    I.amOnPage('/contact');
    I.see('Reach the team behind the screens');

//I am a gas retailer
    I.click('#label_3_8_1');

    I.see('Are you interested in installing Gas Station TV at your gas station?');
    I.wait(2);
    I.click('#label_3_10_0');

// Name
// First Name
    I.fillField('input[name="input_2.3"]', faker.name.firstName());
// Last Name
    I.fillField('input[name = "input_2.6"]', faker.name.lastName());

// Company
    I.fillField('input[name="input_19"]', faker.company.companyName() );

// Contact Information
// Email Address
    I.fillField('input[name ="input_4"]', faker.internet.email());
// Phone Number
    I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );

//Address
    I.fillField('input[name="input_1.1"]', faker.address.streetAddress());
    I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress());
    I.fillField('input[name="input_1.3"]', faker.address.city());
    I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

// May we contact you
    I.click('#label_3_5_1');

// Submit
    I.click('Contact GSTV');


    I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');


});

Scenario('negative path - Enter an invalid email address', (I) => {
    I.amOnPage('/contact');
I.see('Reach the team behind the screens');

//I am a gas retailer
I.click('#label_3_8_1');

I.see('Are you interested in installing Gas Station TV at your gas station?');
I.wait(5);
I.click('#label_3_10_0');

// Name
// First Name
I.fillField('input[name="input_2.3"]', faker.name.firstName());
// Last Name
I.fillField('input[name = "input_2.6"]', faker.name.lastName());

// Company
I.fillField('input[name="input_19"]', faker.company.companyName() );

// Contact Information
// Email Address
I.fillField('input[name ="input_4"]', 'testim.com');
// Phone Number
I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );

//Address
I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
I.fillField('input[name="input_1.3"]', faker.address.city() );
I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

// May we contact you
I.click('#label_3_5_1');

// Submit
I.click('Contact GSTV');


I.see('There was a problem with your submission. Errors have been highlighted below.');

});



Scenario('Positive path - Fill out all the fields and submit a contact request as a journalist', (I) => {
    I.amOnPage('/contact');
I.see('Reach the team behind the screens');

//I am a journalist
I.click('#label_3_8_2');


// Name
// First Name
I.fillField('input[name="input_2.3"]', faker.name.firstName());
// Last Name
I.fillField('input[name = "input_2.6"]', faker.name.lastName());

// Company
I.fillField('input[name="input_19"]', faker.company.companyName() );

// Contact Information
// Email Address
I.fillField('input[name ="input_4"]', faker.internet.email() );
// Phone Number
I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );

//Address
I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
I.fillField('input[name="input_1.3"]', faker.address.city() );
I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

// May we contact you
I.click('#label_3_5_1');

// Submit
I.click('Contact GSTV');


I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});


Scenario('negative path - Enter an Invalid phone number', (I) => {
    I.amOnPage('/contact');
I.see('Reach the team behind the screens');

//I am a journalist
I.click('#label_3_8_2');


// Name
// First Name
I.fillField('input[name="input_2.3"]', faker.name.firstName());
// Last Name
I.fillField('input[name = "input_2.6"]', faker.name.lastName());

// Company
I.fillField('input[name="input_19"]', faker.company.companyName() );

// Contact Information
// Email Address
I.fillField('input[name ="input_4"]', faker.internet.email() );
// Phone Number
I.fillField('input[name="input_3"]', faker.name.firstName() );

//Address
I.fillField('input[name="input_1.1"]', faker.address.streetAddress() );
I.fillField('input[name="input_1.2"]', faker.address.secondaryAddress() );
I.fillField('input[name="input_1.3"]', faker.address.city() );
I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

// May we contact you
I.click('#label_3_5_1');

// Submit
I.click('Contact GSTV');

I.see('There was a problem with your submission. Errors have been highlighted below.');


});




