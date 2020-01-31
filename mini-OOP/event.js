class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = []
    }
    addAvailableTickets(TicketType) {
        this.availableTickets.push(TicketType);
    }
    allTickets() {
        let ticketStr = 'all tickets: ';
        for (let i in this.availableTickets) {
            ticketStr = ticketStr.concat((i + 1) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
        }
        return ticketStr;
    }
    searchTickets(upper, lower) {
        let eligible = 'eligible tickets: '
        for (let i in this.availableTickets) {
            console.log(this.availableTickets[i].seating)

            ticketStr = ticketStr.concat((i + 1) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
        }
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

const eventArray = new Array();

eventArray.push(eventObj1);
eventArray.push(eventObj2, eventObj3, eventObj4, eventObj5, eventObj6);


const tick1a = new TicketType('balcony', 40)
const tick1b = new TicketType('orchestra', 120)
const tick2 = new TicketType('table seating', 35)
const tick3 = new TicketType('general', 25)
const tick4 = new TicketType('general', 20)
const tick5 = new TicketType('table seating', 35)
const tick6 = new TicketType('ticket', 12)


eventObj1.addAvailableTickets(tick1a);
eventObj1.addAvailableTickets(tick1b);
eventObj2.addAvailableTickets(tick2)
eventObj3.addAvailableTickets(tick3)
eventObj4.addAvailableTickets(tick4)
eventObj5.addAvailableTickets(tick5)
eventObj6.addAvailableTickets(tick6)



console.log(eventObj1.allTickets())



// console.log(eventObj2.availableTickets);
// console.log(eventObj1.availableTickets);
// console.log(eventObj1.availableTickets[0])
// $(document).ready(function() {
//     let html = '';
//     $.each(eventArray, function(index, item) {
//         html += `<li>${item.name} - ${item.description}</li>`;
//     });
//     // insert final html into #event...
//     $('#event').html(html);
// });