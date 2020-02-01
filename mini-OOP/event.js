//actually, my understanding of jQuery was just off. straightening out now


// searchTickets(lower, upper) {
// let eligible = 'eligible tickets: ';
// let count = 1;

// if (!lower && !upper) {
//     for (let i in this.availableTickets) {
//         eligible = eligible.concat((count) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
//         count++;
//     }

// } else if (!upper) {
//     for (let i in this.availableTickets) {
//         if (this.availableTickets[i].price < lower) {
//             eligible = eligible.concat((count) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
//             count++;
//         }
//     }
// } else
//     for (let i in this.availableTickets) {
//         if (this.availableTickets[i].price > lower && this.availableTickets[i].price < upper) {
//             eligible = eligible.concat((count) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
//             count++;
//         }
//     }
// if (eligible === 'eligible tickets: ') {
//     eligible = 'No Tickets Available';
// }
// return eligible;
// }

class Event {
    constructor(name, description) {
            this.name = name;
            this.description = description;
            this.availableTickets = [];
        }
        // addAvailableTickets() {
        //     this.availableTickets.push();
        // }

    addAvailableTickets(seating, price) {
        let x = new TicketType(seating, price);
        this.availableTickets.push(x);

        // for (var i = 0; i < arguments.length; i++) {
        //     this.availableTickets.push(arguments[i]);
        // }
    }
    allTickets() {
        let ticketStr = 'all tickets: ';
        let count = 1;
        for (let i in this.availableTickets) {
            ticketStr = ticketStr.concat((count) + '. ' + this.availableTickets[i].seating + ' (' + this.availableTickets[i].price + ') ');
            count++;
        }
        return ticketStr;
    }


}

class TicketType {
    constructor(seating, price) {
        this.seating = seating;
        this.price = price;
    }
}
let eventArray = new Array();
const eventObj1 = new Event('Tribute To the Monkees', 'a conversation with Michael Nesmith & Mickey Dolenz');
const eventObj2 = new Event('Let\'s Go Atsuko: A (Woke) Japanese Game Show', 'hosted by Atsuko Okatsuka, with guests Adam Cayton-Holland, Chris Garcia, Alison Rosen and Beth Stelling');
const eventObj3 = new Event('Trump vs Bernie', 'with Anthony Atamanuik & James Adomian');
eventArray.push(eventObj1, eventObj2, eventObj3);
eventObj1.addAvailableTickets('balcony', 40);
eventObj1.addAvailableTickets('orchestra', 120);
eventObj1.addAvailableTickets('peanut gallery', 20);
eventObj1.addAvailableTickets('outside', 10);
eventObj1.addAvailableTickets('general admission', 65);
eventObj1.addAvailableTickets('at home', -10);
eventObj2.addAvailableTickets('table seating', 35)
eventObj2.addAvailableTickets('floor', 12)
eventObj3.addAvailableTickets('balcony', 25);
eventObj3.addAvailableTickets('general', 20);
eventObj3.addAvailableTickets('VIP', 50);
// console.log(eventArray); -> array of event objects, TicketTypes

//console.log(eventArray[0].allTickets())
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
$(document).ready(function() {
    let html = '';
    $.each(eventArray, function(index, item) {

        html += `<li>${item.name} - ${item.description} - ${item.allTickets()}</li>`;
    });
    // insert final html into #event...
    $('#event').html(html);
});