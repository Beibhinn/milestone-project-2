# Milestone Project Two

* * * * *

## Trips & Advice

* * * * *

Inspired by my passion for travel, I decided to design my Interactive Frontend Development project around the suggested theme given in the example brief for the second milestone project: a single page travel website that relies heavily on one or more APIs.

As travel is such a big industry, I undertook this project knowing that there would be plenty of websites I could look at for inspiration and research purposes. There would also be many relevant APIs to choose from. However, as this is a personal project and not a commercial endeavour, cost was a factor in the APIs that I ultimately decided to incorporate in this project. At a later date, it may be beneficial to add features such as a flight tracker, for flight updates, alerts for extreme weather, and travel advisories (such as safety, security, and health information).

This project is intended as a travel tool to help users plan a trip. It will guide users through the planning process, all the way from destination inspiration, to searching for flights, accessing weather forecasts and searching for nearby attractions and facilities. It will also allow the user to easily access relevant information regarding their destination country, such as capital city, language, and currency.

My website can be found at the following URL: [https://beibhinn.github.io/milestone-project-2](https://beibhinn.github.io/milestone-project-2)


### UX

* * * * *

Initially, I had only planned to include a section for flights, travel inspiration, attractions, accommodation and restaurants, focusing heavily on the given examples in the brief. However, as the project went on, I realised that my plan to use the google maps and places API meant the attractions, accommodation and restaurant would easily be taken care of in the same place. As a result, I felt there was scope for additional features, and also focused on extra things a user may want to achieve when planning a trip.

-   As a prospective holiday maker, I want to see pictures of famous destinations and landmarks, to inspire my decision regarding where I will want to travel to next.

-   As a prospective holiday maker, I want to be able to search for and see photographs of places I'm thinking of travelling to, to help confirm my decision.

-   As a potential traveller, I want to be able to search for a list of locations organised by flight prices for my chosen dates, so that I can plan a holiday based on my budget.

-   As a traveller, I want to be able to search for flights to my chosen destination, so that I can book my holiday transport.

-   As a prospective holiday maker, I want to be able to look up the weather for a location before I book, so I know what to expect and can book a holiday that suits my need (ie. sun holiday, skiing holiday, etc).

-   As a holiday maker, I want to be able to check the weather forecast for my destination, so that I can pack appropriately.

-   As a prospective holiday maker, I want to be able to look up past weather for a particular date, to get a better idea of the general climate of a location.

-   As a holiday maker, I want to be able to look up my destination on a map, to get an impression of the layout of the area nearby.

-   As a tourist, I want to be able to look up nearby attractions and facilities of a particular type, and see them on a map, to determine what there is to do or see in the vicinity.

-   As a prospective tourist, I want to be able to look up relevant information about my destination country, to better educate and prepare myself, in anticipation of an upcoming trip.


The wireframes I created for this project can be viewed [here.](https://beibhinn.github.io/milestone-project-2/Project-mockups.pdf)


### Features

* * * * *


#### Existing Features

-   *Navbar*: Allows all users to easily navigate to the different sections of the website, regardless of which page they are currently on, simply by clicking the name of the area they wish to visit in the navbar. This navbar also collapse and disappears automatically as the user scrolls down, to make the most of available real estate. The navbar then automatically reappears in the view as the user scrolls back up, ensuring they can still conveniently navigate around the webpage, without having to scroll all the way back up. [See js/scripts.js](https://github.com/Beibhinn/milestone-project-2/blob/master/js/scripts.js)

-   *Jumbotron and Callout*: Allows all users to see a visually pleasing photo to encourage travel as soon as they load the page, and provides a callout and button, to take the user to the weather section quickly.

-   *Fixed travel inspiration carousel*: Displays famous landmarks and destinations to the user, to give the prospective holiday maker some inspiration while they are still contemplating and deciding where to go. [See js/photos.js](https://github.com/Beibhinn/milestone-project-2/blob/master/js/photos.js)

-   *Unsplash photo carousel*: Allows the prospective holiday maker to explore and search for photos of a location they may be thinking of visiting, to help them come to a decision. (Uses the unsplash API). [See js/unsplash.js](https://github.com/Beibhinn/milestone-project-2/blob/master/js/unsplash.js)

-   *Skyscanner widget*: Allows the potential traveller to look search for flights based on dates the user wishes to travel. Users that know where they would like to go can easily book their flights, and users that may not yet have a destination in mind can browse and choose a location based on their chosen dates and budget.

-   *APIXU weather search*: Allows the holiday maker or prospective holiday maker to make informed decisions when booking a trip, or help the user to know what to pack by searching for and accessing weather information for their destination. (Uses the APIXU API). [See js/weather.js](https://github.com/Beibhinn/milestone-project-2/blob/master/js/weather.js)

-   *Google map*: Allows a tourist to discover nearby attractions and facilities by searching for their location and choosing an option from a dropdown menu. The user can then view the results on a map. (Uses Google Maps and Google Places). [See js/maps.js](https://github.com/Beibhinn/milestone-project-2/blob/master/js/maps.js)

-   *Useful information search*: Allows prospective tourists to access useful and relevant information about their destination, by selecting their chosen country from the dropdown menu. (Uses the REST Countries API). [See js/countries.js](https://github.com/Beibhinn/milestone-project-2/blob/master/js/countries.js) and [js/info.js](https://github.com/Beibhinn/milestone-project-2/blob/master/js/info.js)

-   *Footer*: Informs the user that the site is hosted by Github Pages, and provides as link to where they can view the source code on Github.


#### Features Left to Implement

Due to the time and cost limitations of this project, there are additional features that are outside the scope of the project at this time. However the following features may be beneficial to add in future updates of the site.

-   *Flight tracker*: Would allow users to check for up-to-date information about their flights so that they are aware of any delays, changes, etc.

-   *Extreme weather alerts*: As an addition to the current weather feature, in future users may find it helpful for any extreme weather warnings related to their chosen location to be displayed and updated in real-time.

-   *Travel advisories*: As a future feature, I believe a user might find it useful to be able to search for active travel advisories for their location, including safety, security, and health information.

-   *Featured tours or events*: At a later date, I think it would be interesting to feature top-rated tours, activites, or excursions in a location the user is interested in.

-   *Hotel booking feature*: By possibly partnering with a booking site or paying for use of a hotel booking API, users could search for and book hotels for their trips from this site, to work towards an all-in-one travel site.


### Technologies Used

* * * * *

-   *HTML5*: HTML5 was used to create the structure of the website

-   *CSS3*: CSS3 was used to style the website

-   *Bootstrap 3.3.7*: [https://getbootstrap.com/docs/3.3/getting-started/](https://getbootstrap.com/docs/3.3/getting-started/) : As Bootstrap is designed with the Mobile First Approach in mind, this framework was used to help structure the website, ensuring that it would be compatible on mobile devices.

-   *JQuery*: [https://jquery.com](https://jquery.com) : JQuery was used to simplify DOM manipulation.

-   *Font Awesome*: [https://fontawesome.com](https://fontawesome.com) : Font Awesome was used to add icons to the site, such as the icons in header and footer.

-   *Popper.js*: [https://popper.js.org](https://popper.js.org) : Was used to position the dropdown menus to their respective buttons, as instructed in the bootstrap downdown documentation.

-   *Unsplash API*: [https://unsplash.com/documentation](https://unsplash.com/documentation) : Was used to allow the user to search for high quality photos relating to their location of choice. Unsplash specifically was chosen, as it is a free service and all photos on their site are free to use.

-   *APIXU API*: [https://www.apixu.com/doc](https://www.apixu.com/doc) : This API was used as it has a large amount of weather data available, including forecast, history, and relevant icons, at no cost.

-   *Google Maps & Google Places API*: [https://developers.google.com/maps/documentation/javascript/tutorial](https://developers.google.com/maps/documentation/javascript/tutorial) & [https://developers.google.com/places/web-service/intro](https://developers.google.com/places/web-service/intro) : The Google maps and places APIs were used as they are powerful and allowed me to combine and implement multiple desired features into one.

-   *REST Countries API*: [https://restcountries.eu](https://restcountries.eu) : This API was selected as it has relevant data on a long list of countries and is well documented, making it simple to use.


### Testing

* * * * *

HTML was copied and pasted into [https://validator.w3.org/#validate_by_input](https://validator.w3.org/#validate_by_input) to determine validity. One notable warning was for the contact.html page, which highlighted that the 'date' input type may not be supported in all browsers, and that use of a polyfill should be considered.

CSS was copied and pasted into [https://jigsaw.w3.org/css-validator/#validate_by_input](https://jigsaw.w3.org/css-validator/#validate_by_input) to determine validity.


1. *Navbar*:

   -  Click on each of the individual links within the menu (including the logo), and verify that each one is functioning correctly, and that they take the user to the correct place.

   -  Scroll down and ensure the navbar moves smoothly out of view. In mobile, verify that if the menu is open and visible when the user starts to scroll, it collapses hides along with the rest of the menu.
  
   - Scroll back up and ensure the navbar reappears. 

2. *Jumbotron*:

   -  Click the 'Take me there' button, and verify it does in fact take the user to the weather section.

3. *Travel Inspiration*:

   -  Click both the right and left arrows to ensure that the active photo in the carousel slides smoothly to the next photo.

   -  Adjust size of browser window to various sizes, to ensure the carousel resizes well and is responsive.

   -  Enter in a search location (such as 'Ireland'), click 'submit' and verify that the user is shown a carousel of photos matching their search term. (This was tested with multiple search terms, however it should be noted that the results do depend on how they were tagged when uploaded to the unsplash website, and so I cannot guarantee that all photos shown will be relevant).

   -  Enter in a search term/ location, press 'enter' on the keyboard to ensure this also triggers a search and verify that the user is shown a carousel of photos relating to their search.

   -  Enter in an invalid search term/ location, submit, and verify that a message appears advising the user that there are no results.

   -  Click the left and right arrows to ensure that the photo changes as the user clicks.

   -  Adjust size of browser window to various sizes, to ensure the unsplash carousel resizes well and is responsive.

   -  Leave the input box blank and click submit, to verify that the input box border turns red to indicate to the user that the field is required.

4. *Flights*:

   -  Enter locations in the 'From', 'To, 'Depart' and 'Return' fields, click 'search flights'.

   -  Ensure results are shown in a new tab.

   -  Leave the 'To' destination blank and search for flights. Verify that when no 'To' destination is entered, results are shown to 'everywhere'.

   -  Leave the ''Depart' or 'Return' fields blank and search for flights. Verify that when no date is entered, results are shown based on the cheapest month.

   -  Verify that when no 'To' destination is entered and no dates are chosen, results are shown to 'everywhere' based on the cheapest month.

5. *Weather*:

   -  Enter a city and country, click 'submit'. Verify the location name appears below the submit button, as well as 5 boxes displaying the forecast for the coming five days.

   -  Repeat the step above, pressing 'enter' on the keyboard to trigger the search.

   -  Enter an invalid search term, click 'submit', and verify a message appears to inform the user that there are no results. 

   -  Select a date in the past to see additional information. Verify an information box containing the requested details appears.

   -  To verify an error message appears if no data found, try a date farther in the past, as data for some countries is not available from earlier years. (Eg Cork, Ireland. December 2017). Confirm error message appears.

   -  Try to choose a date prior to January 2015 and verify the date picker will not allow the user to do so.

   - Leave the location input box blank and click submit, to verify that the input box border turns red to indicate to the user that the field is required.

6. *Nearby*:

   -  Begin typing a location. Verify an autocomplete box powered by google appears with location suggestions.

   -  Select a location from the list and verify that the map moves to that location.

   -  Type a location in its entirety in the input box. Press 'enter' on the keyboard to verify this also triggers the search and moves the map to the location.

   -  Choose each of the individual items from the drop down menu and verify markers appear.

   -  Choose one dropdown item after another to verify when a new dropdown item is selected, the old markers are cleared out to make way for the markers for the new results.

   -  Try each item in the dropdown menu to verify that when a certain type of location is not found in the search area, an alert appears to advise the user to try a different search.

   -  Verify the alert vanishes automatically when the user searches for a new location or selects a new dropdown item.

   -  Clicking the 'x' in the top right corner to verify the alert is dismissible.

   -  Click a marker and see the location name, rating and general address displayed in an info window.

   - Click the 'x' in the top right corner to verify the info window is dismissible.

   - Verify that if the user searches for a second place, following selecting options from the dropdown menu, the text in the dropdown box will automatically display 'what are you looking for?' again.

   - Click the 'satellite' button and the 'map' button to change view.

   - Click the square in the top right corner of the map to toggle fullscreen view.

   - Click the '+' and '-' buttons on the bottom right of the map to zoom in and out.

   - Click and drag to move around the map.

   - Verify that clicking and dragging, then selecting an item from the dropdown will search the visible area for results of that type.

7. *Useful Information*:

   -  Select a country from the dropdown menu

   -  Verify a table slides in to view, displaying information and a flag.

   -  Select another country and verify the information clears out and changes to display the new information.

8. *Footer*:

   -  Click the link in the footer and verify that user is brought to the github repo for this project.

*API and Javascript testing*:

Each feature which uses an API was tested manually, and while the code was being written, messages were logged to the console, to ensure the code was functioning as it should. Scripts were checked on [https://jshint.com](https://jshint.com)

The testing of my scripts was also automated as much as possible, with the use of [Jasmine](https://jasmine.github.io/). I took a Behavior-Driven Development (BDD) approach towards writing my tests, focusing on the behaviours and possible actions of the users as they interact with the website. I then wrote a test for each of these behaviours, which failed. The tests were then until they passed.

An important issue to note, was that I could not automate the testing for the Google Maps API at this time. I tried adding a 'div' to the test html, using the same 'map' ID as I had used in my script, to replicate my own html; this did not work. Many of the functions and syntax used by Google Maps were not being recongised by Jasmine. 
I was able to locate a third-party mock for Google Maps, however I was unable to find any mocks that also included the Google PlacesService. I manually tested this feature as much as possible, exploring the possible actions as a user, and also by logging messages to the console throughout. I have left the Maps test I had written within the ProjectSpec.js file, commented out, for reference. 

My tests can be viewed [here](https://github.com/Beibhinn/milestone-project-2/blob/master/jasmine/spec/ProjectSpec.js). The tests can be run on the [SpecRunner.html](https://beibhinn.github.io/milestone-project-2/jasmine/SpecRunner.html) page, which was downloaded from the jasmine website and edited to include links to my scripts.

*Page speed*:

I also tested the site on [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights). The size of my photos was impeding the loading time of the site. To combat this, I optimised the images and converted to webp format. If I had more time, I would have implemented lazy loading.

This project is fully responsive, and each section adjusts and resizes to fit every screen size. All features are available on all devices, with easy to use navigation, to help the user get around.

An interesting bug I came across, was that on my google map, there was an odd pattern of what appeared to be grey star-like shapes placed along the map. They appeared a regular width apart, and were always visible regardless of the zoom. I discussed it with my mentor and we agreed that it appeared as though there was a border radius set on the tiles in the map. However, the problem still persisted when the border radius was removed on the map div, and when another div was placed around the map div. The problem was found to be in the css I had written for the carousel, which was also unintentionally adding a border radius to the map through the code provided by the google maps api. The problem was then easily fixed by being more specific in which elements I was targeting by also specifying their parent elements.


### Deployment

* * * * *


The process used to deploy my code was straightforward.

1.  On GitHub, I went to the repository for the project.

2.  Then I clicked into 'Settings' for the repository.

3.  I then scrolled down to the 'GitHub Pages' section of the settings.

4.  I selected 'master branch' from the 'source' dropdown menu.

5.  Finally, I clicked save.

6.  From that point on, whenever I pushed to 'master', the live website would be updated.



My website can be found at the following URL: [https://beibhinn.github.io/milestone-project-2/](https://beibhinn.github.io/milestone-project-2/)



### Credits

* * * * *

#### Media


All photos used in this site were obtained from [Unsplash.com.](https://unsplash.com/)

*Logo*: Gif originally by Justin Mezzell, edited for the purpose of this project. [URL](https://giphy.com/gifs/world-globe-UOdoMz3baCENO)

*Cover photo* : Photo by Matt Thomason. [URL](https://unsplash.com/photos/YBLvEQ6npQo)

*Carousel* :

-   Photo 1: Machu Picchu, Peru. Photo by Sandro Ayalo. [URL](https://unsplash.com/photos/X1RLNPd_JR4)


-   Photo 2 : Sydney, Australia. Photo by Dan Freeman. [URL](https://unsplash.com/photos/7Zb7kUyQg1E)


-   Photo 3:  Tarangire National Park, Arusha, Tanzania. Photo by Ray Rui. [URL](https://unsplash.com/photos/0mqrqbwjKc4)


-   Photo 4: Wiang Kum Kam, ตำบล ช้างเผือก, Thailand. Photo by Mathew Schwartz. [URL](https://unsplash.com/photos/gsllxmVO4HQ)


*Bottom cover* : Photo by Derek Thomson. [URL](https://unsplash.com/photos/TWoL-QCZubY)


### Acknowledgements

-   I received inspiration for this project from [www.viator.com/en-GB](www.viator.com/en-GB), [www.travelade.com](http://www.travelade.com) and [www.roughguides.com](www.roughguides.com).

-   I took the debounce function from [https://davidwalsh.name/javascript-debounce-function](https://davidwalsh.name/javascript-debounce-function). This was used to ensure that when a user was searching for a place with the google maps API, a new request would not be sent following each letter the user typed. Instead, once a user paused, the data request would be sent. This ensured that my API limit would not be reached too quickly, by using up multiple requests each time a single search term was entered.