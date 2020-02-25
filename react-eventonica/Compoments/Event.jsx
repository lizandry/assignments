class Event {
    constructor(id, title, date, keyword, city, zip, venue, description, showtime) {
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.keyword = keyword;
        this.city = city;
        this.zip = zip;
        this.venue = venue;
        this.description = description;
        this.showtime = showtime;
        //is this necessary?
        //this.keyword = [];

    }
}
$('#add-event-button').on('click', function() {
    let id = this.id
    let title = $('#add-event-title')[0].value;
    let date = $('#add-event-date')[0].value;
    let keyword = $('#add-event-keyword')[0].value;
    let city = $('#add-event-city')[0].value;
    let zip = $('#add-event-zip')[0].value;
    let venue = $('#add-event-venue')[0].value;
    let showtime = $('#add-event-showtime')[0].value;
    let description = $('#add-event-description')[0].value;
    //console.log('event id', this.id)
    $.ajax({
        url: '/admin',
        type: 'POST',
        contentType: 'application/json',
        //need to think this one through
        data: JSON.stringify({ id, title, date, keyword, city, zip, venue, showtime, description })
    });
    $("form").trigger("reset");
});
//deletes event by ID number
//turn this into ONE button
$('#delete-event-button').on('focus', function(event) {
    let eventID = $('#event-to-delete')[0].value;
    //can't do two posts i guess
    // $.ajax({
    //     url: '/admin',
    //     type: 'POST',
    //     contentType: 'application/json',
    //     data: JSON.stringify({ eventID })
    // });
    //website.deleteEvent(eventID);
    //console.log("this event ", eventID)
    //console.log("list of events ", website.events);
    $("form").trigger("reset");
});