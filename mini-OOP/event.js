class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = []
    }
    addAvailableTickets(seating, price) {
        this.availableTickets.push(seating, price);
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

$(document).ready(function() {
    let html = '';
    $.each(eventArray, function(index, item) {
        html += `<li>${item.name} - ${item.description}</li>`;
    });
    // insert final html into #event...
    $('#event').html(html);
});