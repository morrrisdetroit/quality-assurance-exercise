# GSTV Quality Assurance Exercise

1. [Analysis Exercise](#analysis-exercise)
  1.1 [Overview](#overview)
  1.1 [Requirements](#requirements)
1. [Technical Exercise](#technical-exercise)

## Analysis Exercise
### Overview
The site - an individual gas station - is one of the lowest-level pieces of the GSTV business model - it is at the core of everything we do. Our hardware is installed at the site, advertisers purchase impressions at a site level and schedules are generated on a per-site basis. Thus, keeping accurate information about a site is essential to maintaining business operations.

This data is used to know when to turn on and off hardware, helps us estimate how many times a video asset is expected to play, and simply is the site open when we try to call them.

A site may have multiple open and close times for a single day. For example, they may be open in the morning, but close mid-afternoon and reopen for the after work rush hour. In many cases stations will be open past midnight, but business owners do not necessarily think of this as the next day.

[Taco Bell](http://s3-media2.fl.yelpcdn.com/bphoto/bzl1SoxoBR-ggedVDlECAA/ls.jpg) is a perfect example of business hours vs. chronological hours  - they may be open until 4am on Sunday, but you still think of it as Saturday night.

### Requirements
The team has built functionality that allows users to create, edit and view hours for a given site. We would like for you to develop the test plan including test cases and scenarios - including negative paths for this functionality. It is up to you how you document and organize this information - we just ask that you share your test plan with us prior to your interview.

This functionality exists as part of our Site Dashboard application. Every site will have its own page. Each site page will be broken into multiple sections. Each section is called a card. Cards are thematically grouped information - we have cards for site phone numbers, site contacts, and site location information. In this case you will start with an Hours Card.

[We have also created wireframes that demonstrate the functionality described in the requirements.](http://9g8csl.axshare.com/#g=1&p=individual_site_page)

**Assumptions**
- All times are local times to the site
- We do not take into account Daylight Savings Time
- Authentication and authorization scenarios are not part of this assignment

#### Card - Hours (View)
- Format
  - Normal State
    - For current date/time
      - Open or Closed
        - Rules
          - If current date and time is within a defined open period, then Open
          - If current date and time is not within a defined open period, then Closed
    - For each day
      - Day Label
        - Full name
      - If not Open 24 hours
        - For each time slot
          - Open Time
          - Close Time
      - If Open 24 hours
        - Message
          - Open 24 hours
      - If Hours are Null
        - Message
          - Closed
    - Edit Site Hours Button
  - Empty State
    - Message
      - There are no site hours for {Site ID}.
    - Create Site Hours Button
- Functionality
  - Edit Site Hours Button
    - Links to Wizard - Hours (Add/Edit/Delete)
  - Create Site Hours Button
    - Links to Wizard - Hours (Add/Edit/Delete)

#### Wizard - Hours (Add/Edit/Delete)
Create and edit site hours have the same business rules. The main difference is that while editing the dropdowns and values are prepopulated from the server, while in create they are blank.

- Format
  - For each day of the week
    - Day Label
      - Full name
    - Each day may have one or many time slots
    - For each Time Slot
        - Open Time
            - Dropdown
                - Values are in 30 minute increments
                - Values are in AM/PM format
                - Values
                  - Start at Midnight and end 11:30 PM
        - Close Time
            - Dropdown
                - Values are in 30 minute increments
                - Values are in AM/PM format
                - Values
                  - Start at 12:30 AM and end at 6:00 AM (next day)
                  - All values past 11:30 PM (values between Midnight and 6:00 AM) should have the text (next day) at the end
        - Remove Button
    - Open 24 Hours Button
    - Add Button
  - Close Button
  - Submit Button
- Functionality
  - Remove Button
    - Removes the selected time slot
    - If Open 24 Hours
      - Removes Open 24 Hours message
      - Displays one empty time slot
  - Add Button
    - Adds an additional time slot to the selected day
  - Open 24 Hours Button
    - Removes all the time slots if any exist
    - Hides Open 24 Hours Button
    - Message
      - Open 24 Hours
  - Close Button
    - User is returned to the spot where they opened the wizard and the view not reflect any changes
  - Submit Button
    - FE Validates values
      - Null Validation
        - If a start time is entered a close time is required
        - If a close time is entered a start time is required
          - Submit fails
            - Pop Up Message
              - Unable to Create/Update: {itemName} is required.
      - Overlap/Duplicate Validation
        - If a timeslot for a given day overlaps any other time slots on the same day
          - Submit fails
            - Pop Up Message
              - Unable to Create/Update: there is at least one overlapping timeslot
      - Time Slot Format Validation
        - If the start time falls after the end time
          - Pop Up Message
            - Unable to Create/Update: The start time must be before the end time
        - If the end time falls before the start time
          - Pop Up Message
            - Unable to Create/Update: The start time must be before the end time
        - If the start time falls on the end time
          - Pop Up Message
            - Unable to Create/Update: The start time may not be the same date as the end time
      - If FE validation passes
        - Submit changes to the BE
    - BE validates values
      - Null Validation
        - If any required items are null
          - Submit fails
            - Pop Up Message
              - Unable to Create/Update: {itemName} is required.
      - Unchanged Data Validation
        - If any required items are null
          - Submit fails
            - Pop Up Message
              - Unable to Update: {itemName} {itemValue} has not been changed.
      - Duplicate Validation
        - If any required items are null
          - Submit fails
            - Pop Up Message
              - Unable to Create/Update: {itemName} {itemValue} already exists.
      - Malformed Data Validation
        - If any required items are null
          - Submit fails
            - Pop Up Message
              - Unable to Create/Update: {itemName} {itemValue} does not match the expected format.
      - Time Slot Format Validation
        - If the start time falls after the end time
          - Pop Up Message
              - Unable to Create/Update: The start time must be before the end time
        - If the end time falls before the start time
          - Pop Up Message
              - Unable to Create/Update: The start time must be before the end time
        - If the start time falls on the end time
          - Pop Up Message
              - Unable to Create/Update: The start time may not be the same date as the end time
        - If BE validation passes
          - Pop Up Update Data
              - User is returned to the spot where they opened the wizard and the view will reflect changes from the wizard.

## Technical Exercise
