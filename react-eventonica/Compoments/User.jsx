class User {
    constructor(username, title, zipcode) {
        this.username = username;
        this.title = title;
        this.zipcode = zipcode;
        this.savedEvents = [];
    }

    changeName(newName) {
        this.title = newName;
    }
    changeZip(newZip) {
        this.zipcode = newZip;
    }
    saveEvent(event) {
        this.savedEvents.push(event);
    }
    deleteEvent(event) {
        this.savedEvents = this.savedEvents.filter(eachEvent => eachEvent.id !== event);
        //this.events = this.events.filter(event => event.id !== badEvent);
        //let userEvents = user.savedEvents.find(event => event.id === eventID);
    }
}

//adds user, will check for unique username eventually
    //make it yell at me for hitting submit without having enough information
    //it's storing empty users in the array
    $('#add-user-button').on('click', function() {
        let username = $('#add-username')[0].value;
        let title = $('#add-title')[0].value;
        //hardcoded for now, may do functional stuff with it later
        let zipcode = '94608';
        $.ajax({
            url: '/signup',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username, title, zipcode })
        });
        $("form").trigger("reset");
    });
    //deletes user
    //something's being lost between here and the function
    $('#delete-user-button').on('focus', function() {
        let username = $('#user-to-delete')[0].value;
        website.deleteUser(username);
        // console.log(website.users);
        $("form").trigger("reset");


    });