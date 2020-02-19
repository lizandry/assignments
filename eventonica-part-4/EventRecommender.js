class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
        this.userEvents = {};
    }

    addEvent(id, title, date, keyword, location, venue, description, showtime) {
        let x = new Event(id, title, date, keyword, location, venue, description, showtime);
        this.events.push(x);
        //add an ID generator and date objects
    }
    addUser(username, title, zipcode) {
        let x = new User(username, title, zipcode);
        this.users.push(x);
    }
    saveUserEvent(user, event) {
        user.saveEvent(event);
    }
    deleteUserEvent(user, event) {
        user.deleteEvent(event);
    }

    //other folks were talking about using filter to delete stuff
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
    findEventsbyKeyword(userKeyword) {
        let results = this.fetchData(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${userKeyword}&postalCode=94103&apikey=QshGnRhsuNG4qHB6RKJOnr36T8qD7OWa`)
            .then(console.log(results))
            // let filteredEvents = this.events.filter(event => event.keyword === userKeyword);
            // console.log('trouble here?', filteredEvents)
            // return filteredEvents;
    }

    //pre-API
    // findEventsbyKeyword(userKeyword) {
    //     let filteredEvents = this.events.filter(event => event.keyword === userKeyword);
    //     console.log('trouble here?', filteredEvents)
    //     return filteredEvents;
    // }
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
        //also changes UI
        //  onclick,
        this.savedEvents.push(event);
        //this seems complex
    }
    deleteEvent(event) {

        this.savedEvents = this.savedEvents.filter(eachEvent => eachEvent.id !== event);
        //this.events = this.events.filter(event => event.id !== badEvent);
        //let userEvents = user.savedEvents.find(event => event.id === eventID);
    }
}

class Event {
    constructor(id, title, date, keyword, location, venue, description, showtime) {
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.keyword = keyword;
        this.location = location;
        this.venue = venue;
        this.description = description;
        this.showtime = showtime;

        this.availableTickets = [];
        //is this necessary?
        //this.keyword = [];

    }
    addAvailableTickets(seating, price) {
        let x = new TicketType(seating, price);
        this.availableTickets.push(x);
    }
}
class TicketType {
    constructor(seating, price) {
        this.seating = seating;
        this.price = price;
    }
}



//const ticketMaster = new EventRecommender()


if (typeof module != 'undefined') {
    module.exports = { EventRecommender, User, Event }
}