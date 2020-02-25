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
