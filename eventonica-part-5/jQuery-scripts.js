$(document).ready(() => {
    console.log("document ready");
    const website = new EventRecommender();
    // website.addUser('lizandry', 'liz', '94608');
    // website.addUser('20thCentDaddy', 'joseph', '94702');
    // website.addUser('XcrusheddreamsX', 'caesar', '94720');
    // website.addUser('GhostPuncher', 'star platinum', '94604');
    // website.addUser('steelballz', 'gyro', '94602');
    // website.addEventByAttributes('00001', 'the party', new Date(2020, 06, 18), 'festival', 'San Francisco, CA', 'golden gate park', 'a real fuckin party', '20:00');
    // website.addEventByAttributes('00002', 'the blood brothers', new Date(2020, 06, 19), 'concert', 'Oakland, CA', 'The Fox', 'the blood brothers, featuring celebration', '21:00');
    // website.addEventByAttributes('00003', 'rilo kiley', new Date(2020, 06, 20), 'concert', 'Oakland, CA', 'The New Parkway', 'reunited and it feels so good', '19:00');
    // website.addEventByAttributes('00004', '...and you will know us by the trail of dead', new Date(2020, 06, 21), 'concert', 'San Francisco, CA', 'Slim\'s', 'they\'re about to rock your socks off', '21:00');
    // website.addEventByAttributes('00005', 'San Francisco Food and Wine Festival', new Date(2020, 06, 22), 'culture', 'San Francisco, CA', 'Fort Mason Center', 'come enjoy some food and wine', '12:00');
    // website.addEventByAttributes('00006', 'against me!', new Date(2020, 06, 23), 'concert', 'San Francisco, CA', 'Great American Music Hall', 'hell yeah, that\'s them. that\'s against me!!', '19:00');
    // addEvent(id, title, date, keyword, city, zip, venue, description, showtime)

    function fetchData(url) {
        return fetch(url)
            .then(res => res.json());
        //.catch(error => console.log('something has gone wrong'), error)
        //why is this 'inaccessible'?
    }
    //
    //--------------------   
    //add and delete
    //--------------------
    //
    //adds user, will check for unique username eventually
    //make it yell at me for hitting submit without having enough information
    //it's storing empty users in the array
    $('#add-user-button').on('click', function() {
        let username = $('#add-username')[0].value;
        let title = $('#add-title')[0].value;
        //hardcoded for now, may do functional stuff with it later
        let zipcode = '94608';
        $.ajax({
            url: '/signup',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username, title, zipcode })
        });
        $("form").trigger("reset");
    });
    //deletes user
    //something's being lost between here and the function
    $('#delete-user-button').on('focus', function() {
        let username = $('#user-to-delete')[0].value;
        website.deleteUser(username);
        // console.log(website.users);
        $("form").trigger("reset");


    });
    $('#add-event-button').on('click', function() {
        let id = this.id
        let title = $('#add-event-title')[0].value;
        let date = $('#add-event-date')[0].value;
        let keyword = $('#add-event-keyword')[0].value;
        let city = $('#add-event-city')[0].value;
        let zip = $('#add-event-zip')[0].value;
        let venue = $('#add-event-venue')[0].value;
        let showtime = $('#add-event-showtime')[0].value;
        let description = $('#add-event-description')[0].value;
        //console.log('event id', this.id)
        $.ajax({
            url: '/admin',
            type: 'POST',
            contentType: 'application/json',
            //need to think this one through
            data: JSON.stringify({ id, title, date, keyword, city, zip, venue, showtime, description })
        });
        $("form").trigger("reset");
    });
    //deletes event by ID number
    //turn this into ONE button
    $('#delete-event-button').on('focus', function(event) {
        let eventID = $('#event-to-delete')[0].value;
        //can't do two posts i guess
        // $.ajax({
        //     url: '/admin',
        //     type: 'POST',
        //     contentType: 'application/json',
        //     data: JSON.stringify({ eventID })
        // });
        //website.deleteEvent(eventID);
        //console.log("this event ", eventID)
        //console.log("list of events ", website.events);
        $("form").trigger("reset");
    });

    //adds user events
    //currently a like/unlike form. but one day it'll be a fav button
    //and i'll be able to set its state in react!
    $('#save-event-to-user-button').on('focus', function(event) {

        let username = $('#user-likes-event')[0].value;
        let eventID = $('#event-user-likes')[0].value;
        let user = website.users.find(user => user.username === username);
        let eventArr = website.events.find(event => event.id === eventID);
        let userEvents = user.savedEvents.find(event => event.id === eventID);

        if (userEvents) {
            website.deleteUserEvent(user, eventID)
        } else if (!userEvents) {
            website.saveUserEvent(user, eventArr)
        }
        displayUserEvents();
        //console.log("lizandry savedEvents", website.users[0].savedEvents);
        $("form").trigger("reset");
    });

    //
    //--------------------   
    //search functions
    //--------------------
    //
    //returns first event from ticketmaster
    $('#return-first-ticketmaster-result-button').on('click', function(event) {
        fetchData(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=rock&size=1&postalCode=94103&apikey=QshGnRhsuNG4qHB6RKJOnr36T8qD7OWa`)
            .then(data => {
                let e = data._embedded.events[0];
                $('#single-ticketmaster-event').append(`<li class='event-page'> <a href='${e.url}'>${e.name}</a>
                      </li>`);
            });
        $("form").trigger("reset");
    });


    //keyword search that adds <li> elements under "results"
    $('#find-event-by-keyword-button').on('click', function(event) {
        let keyword = $('#keyword-search-field')[0].value;
        fetchData(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&postalCode=94103&apikey=QshGnRhsuNG4qHB6RKJOnr36T8qD7OWa`)
            .then(data => {
                //console.log(data._embedded.events)

                data._embedded.events.map(e => {
                    $('#all-results-by-keyword').append(`<li> <button class='event-page' id='${e.id}'>great button!</button>
                     </li>`);
                    //trying to see how the html on this looks
                    //console.log('test')
                    // <a class='event-page' id='${e.id}' href='${e.url}'>${e.name}</a>

                });
                setTimeout(delayDocument, 1);
            })

        $("form").trigger("reset");
    });

    /*okay here's what i'm thinking:
    this goes with the below code
    i want to make a function that works with the '/admin/:eventId' thing in my express code
    i'm going to make an html template that takes each event's data, when clicked,
     and makes an "event page" in my app
    it's a little too complex for my current level of knowledge, but i'll get there */
    function delayDocument() {
        let eventButtons = document.getElementsByClassName('event-page')
        for (events of events)
    }

    function goToEventPage(eventsCollection) {
        console.log(eventsCollection.item(0).id);
    }
    //
    //making an express call to redirect you to an event's page when you click it
    // $('.event-page').on('click', function() {
    //     //let thisEvent = $(`#${id}`);
    //     console.log($('.event-page'))
    //         // fetchData(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=QshGnRhsuNG4qHB6RKJOnr36T8qD7OWa`)
    //         //     .then(data => {
    //         //         console.log(data._embedded.events)
    //         //         data._embedded.events.map(e => {

    //     //         });
    //     //     })
    //     $("form").trigger("reset");
    // });

    //pre-API code
    // $('#find-event-by-keyword-button').on('focus', function(event) {
    //     let keyword = $('#keyword-search-field')[0].value;
    //     //results is nothing
    //     let results = website.findEventsbyKeyword(keyword)
    //     console.log('filtered results', results)
    //     results.map(e => {
    //         $('#all-results-by-keyword').append(`<li class='event-page'> ${e.title}<br>
    //         ${e.city} - ${e.venue} - ${e.date}<br>
    //     ${e.description}</li>`);
    //     });
    //     $("form").trigger("reset");
    // });
    //
    //--------------------   
    //display functions
    //these all could stand to refresh whenever new info is added
    //--------------------
    //
    //
    //displays all users
    // $.each(website.users, function() {
    //     $('#all-users').append(`<li>${this.username} - ${this.title}</li>`);
    // });

    //displays all events
    //works, but doesn't refresh
    $.ajax({
        url: '/admin',
        type: 'POST'
    }).done(function(data) {
        $.each(data, function() {
            //i moved this in from 'display users', need to check it when the form has functionality
            $('#all-users').append(`<li>${this.username} - ${this.title}</li>`);
            $('#all-events').append(`<li><class="event-page">${this.title}<br>
                    ${this.city} - ${this.venue} - ${this.date}<br>
                    ${this.description}</li>
                `);
        })
    })

    //console.log(website.events);

    //trying to migrate this helper function to EventRecommender class
    //have to do it later, got a higher-priority thing going on
    //make it refresh itself whenever a new event is added to a user
    //i'm thinking: make a special div per user, this function initializes by clearing the innerHTML
    function displayUserEvents() {
        for (user of website.users) {
            //would be hilarious, if this worked
            let userEvents = user.savedEvents.map(e => `<li class='event-page' id='${e.id}'>${e.title}<br>${e.city} - ${e.date}<br>${e.description}</li>`)
            $('#my-events').append(`${user.title}'s saved events:<br>${userEvents}`)

        }
    }





});