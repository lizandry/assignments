$(document).ready(() => {
    const website = new EventRecommender();
    website.addUser('lizandry', 'liz', '94608');
    website.addUser('20thCentDaddy', 'joseph', '94702');
    website.addUser('XcrusheddreamsX', 'caesar', '94720');
    website.addUser('GhostPuncher', 'star platinum', '94604');
    website.addUser('steelballz', 'gyro', '94602');
    website.addEvent('00001', 'the party', new Date(2020, 06, 18), 'festival', 'San Francisco, CA', 'golden gate park', 'a real fuckin party', '20:00');
    website.addEvent('00002', 'the blood brothers', new Date(2020, 06, 19), 'concert', 'Oakland, CA', 'The Fox', 'the blood brothers, featuring celebration', '21:00');
    website.addEvent('00003', 'rilo kiley', new Date(2020, 06, 20), 'concert', 'Oakland, CA', 'The New Parkway', 'reunited and it feels so good', '19:00');
    website.addEvent('00004', '...and you will know us by the trail of dead', new Date(2020, 06, 21), 'concert', 'San Francisco, CA', 'Slim\'s', 'they\'re about to rock your socks off', '21:00');
    website.addEvent('00005', 'San Francisco Food and Wine Festival', new Date(2020, 06, 22), 'culture', 'San Francisco, CA', 'Fort Mason Center', 'come enjoy some food and wine', '12:00');
    website.addEvent('00006', 'against me!', new Date(2020, 06, 23), 'concert', 'San Francisco, CA', 'Great American Music Hall', 'hell yeah, that\'s them. that\'s against me!!', '19:00');


    // let x = new Event(id, title, date, category, location, venue, description, showtime);
    // let x = new User(username, title, zipcode);


    //currently a like/unlike form. but one day it'll be a fav button
    //and i'll be able to set its state in react!
    $('#push-event-button').on('click', function(event) {

        let username = $('#pull-user')[0].value;
        let eventID = $('#pull-event')[0].value;
        let user = website.users.find(user => user.username === username);
        let eventArr = website.events.find(event => event.id === eventID);
        let userEvents = user.savedEvents.find(event => event.id === eventID);

        if (userEvents) {
            website.deleteUserEvent(user, eventID)
        } else if (!userEvents) {
            website.saveUserEvent(user, eventArr)
        }
        console.log("lizandry savedEvents", website.users[0].savedEvents);
    });




    // $('#push-event-button').on('click', function(event) {
    //     console.log("test");
    //     console.log(website.users);
    //     let username = $('#pull-user')[0].value;
    //     let eventID = $('#pull-event')[0].value;
    //     // Find matching user and event from website.users and website.events
    //     let user = website.users.find(user => user.username === username);
    //     let userEvent = website.events.find(event => event.id === eventID);
    //     // Update matching user to have event (user.saveEvent(event))
    //     website.saveUserEvent(user, userEvent)
    //     console.log(website.users[0].savedEvents);
    // });

    //.username only will return usernames
    //taking .username. out returns a blank array
    $.each(website.users, function() {
        $('#my-events').append(`
        <li>
            ${this.savedEvents}<br>
        </li>
        `);
    });
    // ${this.savedEvents.event.title}<br>
    // ${this.savedEvents.location} - ${this.savedEvents.venue} - ${this.savedEvents.date}
    $.each(website.users, function() {
        $('#all-users').append(`<li>${this.username} - ${this.title}</li>`);
    });
    $.each(website.events, function() {
        $('#all-events').append(`<li><class="event-title">${this.title}<br>
        ${this.location} - ${this.venue} - ${this.date}<br>
        ${this.description}</li>
        `);
    });

    // this.savedEvents.map(e => {
    //     <li>
    //         ${e.title}<br/>
    //         ${e.location} - ${e.venue}
    //     </li>
    // })
});