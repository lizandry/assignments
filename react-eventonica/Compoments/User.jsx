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

//this would be the result of the user that's created when you hit submit on the new user form
let showUserInfo = (props) =>    {
    return (
        <div className="user">{props.username}
        <ul className="userTraits">
            <li id={props.id}></li>
        </ul>
        
        
        </div>
    );
}

const lizTheUser = new User

//adds user, will check for unique username eventually
    //make it yell at me for hitting submit without having enough information
    //it's storing empty users in the array
    
    //deletes user
    //something's being lost between here and the function
    $('#delete-user-button').on('focus', function() {
        let username = $('#user-to-delete')[0].value;
        website.deleteUser(username);
        // console.log(website.users);
        $("form").trigger("reset");


    });