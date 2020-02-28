class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
        this.TheMostUpsettingIDGeneratorInTheUniverse = 0;
    }

    addEvent(params) {
        this.TheMostUpsettingIDGeneratorInTheUniverse = this.TheMostUpsettingIDGeneratorInTheUniverse + 1;
        let x = new Event(this.TheMostUpsettingIDGeneratorInTheUniverse, params.title, params.date, params.keyword, params.city, params.zip, params.venue, params.description, params.showtime);
        this.events.push(x);
        //add an ID generator and date objects
    }

    addEventByAttributes(id, title, date, keyword, city, zip, venue, description, showtime) {
        this.events.push(x);
        //add an ID generator and date objects
    }
    addUser(params) {
        let x = new User(params.username, params.title, params.zipcode);
        this.users.push(x);
    }
    addUserByAttributes(username, title, zipcode) {
        let x = new User(username, title, zipcode);
        this.users.push(x);
    }
    saveUserEvent(user, event) {
        user.saveEvent(event);
    }
    deleteUserEvent(user, event) {
        user.deleteEvent(event);
    }

    deleteUser(badUser) {
        //"are you sure?" prompt
        this.users = this.users.filter(user => user.username !== badUser)
    }

    deleteEvent(badEvent) {
        //"are you sure?" prompt
        this.events = this.events.filter(event => event.id !== badEvent);
    }

    //there is no way on earth that this function currently works
    //it'll work later
    findEventsByDate(userDate) {
        let chosenDate = new Date(userDate);
        return this.events.filter(event => event.date === userDate);
    }

    //findEventsByDistance{}

    //doesn't work now, when it was in jquery it worked as "user of website.users"
    //make it refresh itself whenever a new event is added to a user
    //i'm thinking: make a special div per user, this function initializes by clearing the innerHTML
    displayUserEvents() {
        for (user of this.users) {
            let userEvents = user.savedEvents.map(e => `<li class='event-page' id='${e.id}'>${e.title}<br>${e.city} - ${e.date}<br>${e.description}</li>`)
            $('#my-events').append(`${user.title}'s saved events:<br>${userEvents}`)

        }
    }
}
class User {
    constructor(username, title, zipcode) {
        this.username = username;
        this.title = title;
        this.zipcode = zipcode;
        this.savedEvents = [];
    }

    changeName(newName) {
        this.title = newName;
    }
    changeZip(newZip) {
        this.zipcode = newZip;
    }
    saveEvent(event) {
        this.savedEvents.push(event);
    }
    deleteEvent(event) {
        this.savedEvents = this.savedEvents.filter(eachEvent => eachEvent.id !== event);
        //this.events = this.events.filter(event => event.id !== badEvent);
        //let userEvents = user.savedEvents.find(event => event.id === eventID);
    }
}

class Event {
    constructor(id, title, date, keyword, city, zip, venue, description, showtime) {
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.keyword = keyword;
        this.city = city;
        this.zip = zip;
        this.venue = venue;
        this.description = description;
        this.showtime = showtime;
        //is this necessary?
        //this.keyword = [];

    }
}


if (typeof module != 'undefined') {
    module.exports = { EventRecommender, User, Event }
}