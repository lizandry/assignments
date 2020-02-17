class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
        this.userEvents = {};
    }

    addEvent(id, title, date, category, location, venue, description, showtime) {
        let x = new Event(id, title, date, category, location, venue, description, showtime);
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
        //click conditional
        //"are you sure?" prompt
        return this.users.filter(user => user.username !== badUser)
            //is this right?
            // this.users.splice(badUser, 1);
            // return this.users;
    }

    //NOT SURE IF DELETEUSER OR DELETEEVENTS IS CORRECT SYNTAX

    //click conditional
    //"warning" prompt
    deleteEvent(badEvent) {
        //this.events.splice(badEvent, 1);
        this.events = this.events.filter(event => event.id !== badEvent);
    }

    //there is no way on earth that this function currently works
    //it'll work later
    findEventsByDate(userDate) {
        let chosenDate = new Date(userDate);
        return this.events.filter(event => event.date === userDate);
    }

    //findEventsByDistance{}
    findEventsbyCategory(userCategory) {
        return this.events.filter(event => event.category === userCategory);
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
    constructor(id, title, date, category, location, venue, description, showtime) {
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.category = category;
        this.location = location;
        this.venue = venue;
        this.description = description;
        this.showtime = showtime;

        this.availableTickets = [];
        this.keywords = [];

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