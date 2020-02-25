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
    //pre-API
    // findEventsbyKeyword(userKeyword) {
    //     let filteredEvents = this.events.filter(event => event.keyword === userKeyword);
    //     console.log('trouble here?', filteredEvents)
    //     return filteredEvents;
    // }
}