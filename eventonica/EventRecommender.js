class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
    }

    addEvent(event) {
        this.events.push(event);
    }
    addUser(user) {
        this.users.push(user);
    }
    saveUserEvent(user, event) {
        user.saveEvent(event)
    }

    //other folks were talking about using filter to delete stuff
    deleteUser(badUser) {
        //click conditional
        //"are you sure?" prompt
        this.users.splice(badUser, 1);
        return this.users;
    }

    //click conditional
    //"warning" prompt
    deleteEvent(badEvent) {
        this.events.splice(badEvent, 1);
        return this.events;
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
    constructor(id, chosenName, zipcode) {
        this.id = id;
        this.chosenName = chosenName;
        this.zipcode = zipcode;
        this.savedEvents = [];
    }

    changeName(newName) {
        this.chosenName = newName;
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