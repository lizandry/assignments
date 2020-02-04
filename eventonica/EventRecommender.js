 // function formatDate() {
 //     date.getDate(), date.getMonth(), date.getFullYear()
 // }

 class EventRecommender {
     constructor() {
         this.events = [];
         this.users = [];

     }

     addEvent(event) {
             this.events.push(event);
         }
         //  addEvent(title, date, category, venue, description, showtime) {
         //      // Adds a new Event to the System
         //      let x = new Event(title, date, category, venue, description, showtime);
         //      this.events.push(x);
         //  }

     addUser() {
         let x = new User(chosenName, zipcode, distance);
         this.users.push(x);
     }

     deleteUser(badUser) {
         //click conditional
         //"are you sure?" prompt
         // delete this.user;
     }

     deleteEvent(badEvent) {
         //click conditional
         //"warning" prompt
         //delete this.user;
         this.events /*.deletefunction(badEvent);*/
             //that can't be right
             //
     }

     findEventsByDate(dateStartStr, dateEndStr) {
             let dateStart = Date.parse(dateStartStr);

             // for (let x in this.events) {
             //     if (this.events[i].date)
             // look up date subtraction again
             // }
         }
         //findByDistance
     findEventsbyCategory(category) {
         // Returns all events in a given category
         //  eventsByCat = []
         // this might not be accurate, go back and check later
         return this.events.filter(event => event.category === category);
         //  for (let event of this.events) {
         //      if (this.event.category == category) {
         //          this.eventsByCat.push(event);
         //      }
         //  }
         //  return eventsByCat;
     }

     saveUserEvent(user, event) {
         // Allow users to save events to a personal Events array.
         user.saveEvent(event)
     }
 }


 class Event {
     constructor(title, date, category, venue, description, showtime) {
         this.title = title;
         this.date = date;
         this.category = category;
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

 class User {
     constructor(chosenName, zipcode) {
             this.chosenName = chosenName;
             this.zipcode = zipcode;
             this.savedEvents = [];
         }
         //  addAvailableTickets(seating, price) {
         //      let x = new TicketType(seating, price);
         //      this.availableTickets.push(x);
         //  }
     changeName(newName) {
         this.choseName = newName;
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
 //const ticketMaster = new EventRecommender()
 //EventRecommender is holding two concepts: search field, AND database
 //ask jenn what the hell i think i'm doing here


 //change these later, for code testing
 //searches don't need names, they're ephermal
 //  let eventArray = new Array();
 //  const eventObj1 = new Event('Tribute To the Monkees', 'a conversation with Michael Nesmith & Mickey Dolenz');
 //  const eventObj2 = new Event('Let\'s Go Atsuko: A (Woke) Japanese Game Show', 'hosted by Atsuko Okatsuka, with guests Adam Cayton-Holland, Chris Garcia, Alison Rosen and Beth Stelling');
 //  const eventObj3 = new Event('Trump vs Bernie', 'with Anthony Atamanuik & James Adomian');
 //  eventArray.push(eventObj1, eventObj2, eventObj3);
 //  eventObj1.addAvailableTickets('balcony', 40);
 //  eventObj1.addAvailableTickets('orchestra', 120);
 //  eventObj1.addAvailableTickets('peanut gallery', 20);
 //  eventObj1.addAvailableTickets('outside', 10);
 //  eventObj1.addAvailableTickets('general admission', 65);
 //  eventObj1.addAvailableTickets('at home', -10);
 //  eventObj2.addAvailableTickets('table seating', 35)
 //  eventObj2.addAvailableTickets('floor', 12)
 //  eventObj3.addAvailableTickets('balcony', 25);
 //  eventObj3.addAvailableTickets('general', 20);
 //  eventObj3.addAvailableTickets('VIP', 50);
 // console.log(eventArray); -> array of event objects, TicketTypes



 module.exports = { EventRecommender, User, Event }

 // $(document).ready(function() {
 //     // console.log('myScript.js loaded!');
 //     $('#red-sentence').click(function() {
 //         // First remove the purple-text class in case it was added first.
 //         $(this).removeClass('purple-text');
 //         // Then add the red-text class to turn the sentence red.
 //         $(this).addClass('red-text');
 //     });

 //     $('#blue-button').click(function() {
 //         // We can also "chain" methods together like this:
 //         $('#blue-sentence')
 //             .removeClass('purple-text')
 //             .addClass('blue-text');
 //     });

 //     $('#purple-button').click(function() {
 //         $('.colorful-sentence').addClass('purple-text');
 //     });
 //     $('#red-sentence').hover(function() {
 //         $('.colorful-sentence').removeClass('purple-text');
 //     });
 // });