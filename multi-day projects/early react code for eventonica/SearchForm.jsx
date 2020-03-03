//--------------------   
    //search functions
    //--------------------
    //
    //returns first event from ticketmaster
    $('#return-first-ticketmaster-result-button').on('click', function(event) {
        fetchData(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=rock&size=1&postalCode=94103&apikey=QshGnRhsuNG4qHB6RKJOnr36T8qD7OWa`)
            .then(data => {
                let e = data._embedded.events[0];
                $('#single-ticketmaster-event').append(`<li class='event-page'> <a href='${e.url}'>${e.name}</a>
                      </li>`);
            });
        $("form").trigger("reset");
    });


    //keyword search that adds <li> elements under "results"
    $('#find-event-by-keyword-button').on('click', function(event) {
        let keyword = $('#keyword-search-field')[0].value;
        fetchData(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&postalCode=94103&apikey=QshGnRhsuNG4qHB6RKJOnr36T8qD7OWa`)
            .then(data => {
                //console.log(data._embedded.events)

                data._embedded.events.map(e => {
                    $('#all-results-by-keyword').append(`<li> <button class='event-page' id='${e.id}'>great button!</button>
                     </li>`);
                    //trying to see how the html on this looks
                    //console.log('test')
                    // <a class='event-page' id='${e.id}' href='${e.url}'>${e.name}</a>

                });
                setTimeout(delayDocument, 1);
            })

        $("form").trigger("reset");
    });