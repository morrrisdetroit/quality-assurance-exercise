// POSITIVE - Contact Form tests - Verify boundary cases for data sets

var faker = require('faker');

Feature('GSTVdotcom Contact Form');

Scenario('Postive Path - Submit a Contact Request - Data Boundary Test - Minimum characters', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0')
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', 'a')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', 'b');

  /// Last Name
  I.fillField('input[name="input_2.6"]', 'c' );

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', 'd');
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );
  /// Address
  I.fillField('input[name="input_1.1"]', 'e');
  I.fillField('input[name="input_1.2"]', 'f' );
  I.fillField('input[name="input_1.3"]', 'g' );
  I.fillField('input[name="input_1.5"]', 'h' );

  // Submit
  I.click('Contact GSTV');
  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - Data Boundary Test - HTML', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0')
  I.see('What DMA/States are you looking to advertise in?');
  I.fillField('input[name=input_18]', '</body></html>' );

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', '</body></html>' );

  /// Last Name
  I.fillField('input[name="input_2.6"]', '</body></html>' );

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
  I.fillField('textarea[name="input_7"]', '</body></html>');
  // Submit
  I.click('Contact GSTV');
  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');
});

Scenario('Postive Path - Submit a Contact Request - Data Boundary Test - Huge dataset characters', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0')
  I.see('What DMA/States are you looking to advertise in?');
  I.fillField('input[name=input_18]', faker.lorem.sentences() );

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', faker.lorem.sentences() );

  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.lorem.sentences() );

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
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$$%^&*()-=+;:.,/?";
  var text = '';
  for( var i=0; i < 5000; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  I.fillField('textarea[name="input_7"]', text );
  // Submit
  I.click('Contact GSTV');
  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});

Scenario('Postive Path - Submit a Contact Request - Data Boundary Test - Non ascii', (I) => {
  I.amOnPage('/contact');
  I.see('Reach the team behind the screens');

  // I am
  I.click('#label_3_8_0')
  I.see('What DMA/States are you looking to advertise in?')
  I.fillField('input[name=input_18]', '変化してきています。ハンバーグやカレーライスは子供変化してきています。ハンバーグやカレーライスは子供変化してきています。ハンバーグやカレーライスは子供変化してきています。ハンバーグやカレーライスは子供')

  // Name
  /// First Name
  I.fillField('input[name="input_2.3"]', 'は最高でした');

  /// Last Name
  I.fillField('input[name="input_2.6"]', faker.name.firstName() );

  // Company
  I.fillField('input[name="input_19"]', '変化してきています。ハンバーグやカレーライスは子供');

  // Contact Information
  /// Email
  I.fillField('input[name="input_4"]', faker.internet.email());
  /// Phone Number
  I.fillField('input[name="input_3"]', faker.phone.phoneNumberFormat() );
  /// Address
  I.fillField('input[name="input_1.1"]', '本人の食生活' );
  I.fillField('input[name="input_1.2"]', 'きています。' );
  I.fillField('input[name="input_1.3"]', faker.address.city() );
  I.fillField('input[name="input_1.5"]', faker.address.zipCode() );

  // Any additional information?
  I.fillField('textarea[name="input_7"]', 'それでも、日本人の食生活も急速に変化してきています。ハンバーグやカレーライスは子供に人気がありますし、都会では、イタリア料理、東南アジア料理、多国籍料理などを出すエスニック料理店がどんどん増えています。' );

  // May we contact you
  I.click('#label_3_5_1');

  // Submit
  I.click('Contact GSTV');
  I.dontSeeInSource('There was a problem with your submission. Errors have been highlighted below.', '.validation_error');

});