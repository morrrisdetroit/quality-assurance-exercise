Feature('Verify site-card')

  // Verify all data elements are present and functionality is working as per requirement.
    Scenario('Verify Site Card') Positive Path verify site-card.
        I am On Page'/individual_site_page'
        I see 'GSTV logo'
        I see 'Site Dashboard / 1201 Woodward'
        I see 'Map'
        I see 'Address'
        I see 'Original DMA'
        I see 'Rank'
        I see 'Priority'
        I see 'Phone Number' is editable per edit pencil icon 
        I see 'Contacts' is editable per edit pencil icon 
        I see 'Hours' is editable per edit pencil icon 


Feature ('Schedule Hours')

  //Verify Hours edit page elements and functionality is working as per requirement.
    Scenario('Schedule Hours') Positive Path add hours.
        I navigate to The 'Site Hours' page via the edit pencil icon
        I see  'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'
        I see 'time to time' slots used to schedule 
        I see 'Start at Midnight and end 11:30 PM' Opening Time Dropdown
        I see 'Start at 12:30 AM and end at 6:00 AM (next day)' Closing Time Dropdown
        I see 'All values past 11:30 PM values between Midnight and 6:00 AM should have the text (next day) at the end' Closing Time Dropdown
        I see 'Open 24 Hours button'
        I see 'Add Hours button'
        I see 'Close button'
        I see 'Submit button'
        I veriy 'Site Open/Close' time status per site detail
        I schedule 'time-slots - hours' per site operating hours weekly 
        I hit 'Add Hours' button 
        I hit 'Submit Hours' button
        I verify 'Submit button statuses'
        I verify all edge cases for Submit Button - 'FE Validates values,Overlap/Duplicate Validation,Time Slot Format Validation,BE validates values,Unchanged Data Validation,Duplicate Validation,Malformed Data Validation,Time Slot Format Validation' 
        I verify 'Site-labels' per hours scheudled 


Feature ('Edit Hours using Cancel time-slot "X" button to far right of scheduled time')

  //Verify Hours edit page elements and functionality is working as per requirement.
    Scenario('wizard_-_hours_-_edit') Positive Path cancel timeslots.
        I navigate to The 'Site Hours' page via the edit pencil icon
        I see previously scheduled hours 
        I hit 'X' to the far right on timeslot 
        I see timeslot removed when deleted 

        
Feature ('Add Open 24 Hours')

  //Verify Hours edit page elements and functionality is working as per requirement.
    Scenario('wizard_-_hours_-_edit') Positive Path add 24 hours. 
        I veriy 'Site Open/Close' time status per site detail
        I schedule 'time-slots - hours' per site operating hours  
        I 'Open 24 Hours' button 


  // Verify error messaging per 'Hour' status 
    Scenario('Negative Path - Site has Null hours') Negative Path verifty error handling.
        I verify 'Site Hours' are Null
        I verify 'Close Message' per 'Null' hours
        I change sitecard hours to times outside the approved operating hours 
        I verify 'Close Message' 
        I edit 'Open 24 Hours' time-slot to deleted status 
        I verify 'one empty time slot' is displayed 


