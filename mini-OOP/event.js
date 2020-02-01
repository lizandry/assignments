//heads up!
//i've been using eventObj1 to test all of my functions
//and didn't realize it until literally 3:40
//i THINK my logic is solid, but it's working on the wrong part of a given class object
//ie, the visible addAvailableTickets function works for eventArray.addAvailableTickets
//the commented-out addAvailableTickets function works for eventObj1.addAvailableTickets

//i'm going to take a break from it for the rest of the day, and go through and fix my oopsie this weekend

class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = []
    }
    addAvailableTickets(TicketType) {
        this.availableTickets.push(TicketType);
    }

    // addAvailableTickets(ticketArr) {


    //     for (let i in ticketArr) {
    //         this.availableTickets.push(ticketArr[i]);
    //     }

    // }
    allTickets() {
        let ticketStr = 'all tickets: ';
        let count = 1;
        for (let i in this.availableTickets) {
            ticketStr = ticketStr.concat((count) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
            count++;
        }
        return ticketStr;
    }

    searchTickets(lower, upper) {
        let eligible = 'eligible tickets: ';
        let count = 1;

        if (!lower && !upper) {
            for (let i in this.availableTickets) {
                eligible = eligible.concat((count) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
                count++;
            }

        } else if (!upper) {
            for (let i in this.availableTickets) {
                if (this.availableTickets[i].price < lower) {
                    eligible = eligible.concat((count) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
                    count++;
                }
            }
        } else
            for (let i in this.availableTickets) {
                if (this.availableTickets[i].price > lower && this.availableTickets[i].price < upper) {
                    eligible = eligible.concat((count) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
                    count++;
                }
            }
        if (eligible === 'eligible tickets: ') {
            eligible = 'No Tickets Available';
        }
        return eligible;
    }
}


class TicketType {
    constructor(seating, price) {
        this.seating = seating;
        this.price = price;
    }
}


const eventObj1 = new Event('Tribute To the Monkees', 'a conversation with Michael Nesmith & Mickey Dolenz');
const eventObj2 = new Event('Fake Ted Talks', 'with Paul & Storm, Jonathan Coulton, Rhea Butcher, Matt Gourley, Myq Kaplan, Molly Lewis, Adam Savage & MORE');
const eventObj3 = new Event('Let\'s Go Atsuko: A (Woke) Japanese Game Show', 'hosted by Atsuko Okatsuka, with guests Adam Cayton-Holland, Chris Garcia, Alison Rosen and Beth Stelling');
const eventObj4 = new Event('City vs City: San Francisco vs Los Angeles', 'with Emily Russell and guest judges Solange Castro and Tommy Whalen, featuring Ben Kolina & Alexandria Love (SF) and Hannah Einbinder & Geoff Plitt (LA)');
const eventObj5 = new Event('Trump vs Bernie', 'with Anthony Atamanuik & James Adomian');
const eventObj6 = new Event('Nightlife at the California Academy of Sciences', 'you get to drink in a museum, and comedians will be there');
let eventArray = new Array();
eventArray.push(eventObj1);
eventArray.push(eventObj2, eventObj3, eventObj4, eventObj5, eventObj6);

const tick1a = new TicketType('balcony', 40)
const tick1b = new TicketType('orchestra', 120)
const tick1c = new TicketType('peanut gallery', 20)
const tick1d = new TicketType('outside', 10)
const tick1e = new TicketType('general admission', 65)
const tick1f = new TicketType('at home', -10)
const tick2 = new TicketType('table seating', 35)
const tick3 = new TicketType('general', 25)
const tick4 = new TicketType('general', 20)
const tick5 = new TicketType('table seating', 35)
const tick6 = new TicketType('ticket', 12)
let ticketTypeArray = new Array();
ticketTypeArray.push(tick1a, tick1b, tick1c, tick1d, tick1e, tick1f, tick2, tick3, tick4, tick5, tick6);
// eventArray.addAvailableTickets(ticketTypeArray)
// console.log(eventArray.availableTickets)

//i'm numberwanging it




// console.log(eventObj1.allTickets())
// console.log(eventObj1.searchTickets());
// console.log(eventObj1.searchTickets(35));
// console.log(eventObj1.searchTickets(50, 120));
// console.log(eventObj1.searchTickets(-15, 50));
//console.log(eventObj1.searchTickets(25, 100));
//console.log(eventObj1.searchTickets(0, 39))
//console.log(eventObj1.searchTickets(230, 300))

// $(document).ready(function() {
//     let html = '';
//     $.each(eventArray, function(index, item) {
//         html += `<li>${item.name} - ${item.description}</li>`;
//     });
//     // insert final html into #event...
//     $('#event').html(html);
// });
// $(document).ready(function() {
//     let html = '';
//     $.each(eventArray, searchTickets(-20, 20) {
//         html += `<li>${item.name} - ${item.description}</li>`;
//     });
//     // insert final html into #event...
//     $('#event').html(html);
// });