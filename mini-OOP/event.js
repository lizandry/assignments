class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }

    addAvailableTickets(seating, price) {
        let x = new TicketType(seating, price);
        this.availableTickets.push(x);
    }
    allTickets() {
        let ticketStr = 'all tickets: ';
        let count = 1;
        for (let ticket of this.availableTickets) {
            ticketStr = ticketStr.concat((count) + '. ' + ticket.seating + ' (' + ticket.price + ') ');
            count++;
        }
        return ticketStr;
    }

    searchTickets(lower, upper) {
        let eligible = 'eligible tickets: ';
        // let count = 1;
        //if no specifications, all tickets are returned

        let eligibleTickets = this.availableTickets.filter(ticket => ticket.inRange(lower, upper))
        if (eligibleTickets.length === 0) {
            eligible = 'No Tickets Available';
        }
        //ticketNumber used to be count
        return eligibleTickets.map((ticket, ticketNumber) => ticket.print(ticketNumber)).reduce((prev, current) => prev.concat(current));
        // for (let ticket of this.availableTickets) {
        //     if (ticket.inRange(lower, upper)) {
        //         eligible = eligible.concat(ticket.print(count));
        //         count++;
        //     }
        // }


        return eligible;
    }
    cheapSeats() {
        let cheap = Infinity;
        let seat = '';
        for (let i in this.availableTickets) {
            if (cheap > this.availableTickets[i].price) {
                cheap = this.availableTickets[i].price
                seat = this.availableTickets[i].seating

            }
        }
        return `the cheapest seats are: ${seat} (${cheap})`;
    }

}

class TicketType {
    constructor(seating, price) {
        this.seating = seating;
        this.price = price;
    }

    print(count) {
        return (count) + '. ' + this.seating + ' (' + this.price + ') ';
    }

    inRange(lower, upper) {
        if (!lower && !upper) {
            return true;
        }

        // TODO
        // if (!lower && !upper) {

        //     //this probably isn't a very clean solution, but if only one number is set, it'll treat it as the upper limit
        // } else if (!upper) {
        //     for (let i in this.availableTickets) {
        //         if (this.availableTickets[i].price <= lower) {
        //             eligible = eligible.concat(this.availableTickets[i].print(count));
        //             count++;
        //         }
        //     }
        // } else
        //     for (let ticket of this.availableTickets) {
        //         if (ticket.price >= lower && ticket.price <= upper
        //             //cut out earlier conditions, make this apply to all conditions
        //             ) {

        //             eligible = eligible.concat(ticket.print(count));
        //             count++;
        //         }
        //     }
        return false;
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
// console.log(eventObj1.searchTickets(25, 100));
// console.log(eventObj1.searchTickets(0, 39))
// console.log(eventObj1.searchTickets(230, 300))
//console.log(eventObj1.cheapSeats())


$(document).ready(function() {
    let html = '';
    $.each(eventArray, function(index, item) {

        html += `<li>${item.name} - ${item.description}<br>${item.searchTickets(-15, 40)}<br>${item.cheapSeats()}</li><br>`;
    });
    // insert final html into #event...
    $('#event').html(html);
});