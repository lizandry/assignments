$(document).ready(() => {
    console.log("document ready");


    function fetchData(url) {
        return fetch(url)
            .then(res => res.json());
        //.catch(error => console.log('something has gone wrong'), error)
        //why is this 'inaccessible'?
    }


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






});