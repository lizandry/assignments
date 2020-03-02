$(document).ready(() => {
    console.log("document ready");

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
        $.ajax({
            url: '/user',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username, title })
        });
        $("form").trigger("reset");
    });
    //deletes user
    //something's being lost between here and the function
    $('#delete-user-button').on('focus', function() {
        let username = $('#user-to-delete')[0].value;
        $.ajax({
            url: '/deleteUser',
            type: 'POST',
            contentType: 'application/json',
            //need to think this one through
            data: JSON.stringify({ username })
        });
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
        $.ajax({
            url: '/events',
            type: 'POST',
            contentType: 'application/json',
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
        //     url: '/events',
        //     type: 'POST',
        //     contentType: 'application/json',
        //     data: JSON.stringify({ eventID })
        // });
        $("form").trigger("reset");
    });
    //this doesn't work because displayUserEvents() was moved, and no longer works
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

    //keyword search
    $('#find-event-by-keyword-button').on('click', function(event) {
        let keyword = $('#keyword-search-field')[0].value;
        fetchData(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&postalCode=94103&apikey=QshGnRhsuNG4qHB6RKJOnr36T8qD7OWa`)
            .then(data => {
                // console.log("keyword search test", data._embedded.events)
                data._embedded.events.map(e => {
                    $('#all-results-by-keyword').append(`<li> <button class='event-page' id='${e.id}'>${e.name}</button>
                     </li>`);
                });
                goToEventPage();
            })
        $("form").trigger("reset");
    });

    function goToEventPage(event) {
        $('.event-page').on('click', function(event) {
            // console.log("goToEventPage test", event.target.id)
            // let thisEvent = ;
            fetchData(`https://app.ticketmaster.com/discovery/v2/events/${event.target.id}.json?apikey=QshGnRhsuNG4qHB6RKJOnr36T8qD7OWa`)
                .then(data => {
                    console.log("data test", data)
                        //data is a ticketmaster event object, i want to go to a webpage of my own design
                })
            $("form").trigger("reset");
        });
    }

    //displays all events
    //works, but doesn't refresh
    $.ajax({
        url: '/events',
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
});