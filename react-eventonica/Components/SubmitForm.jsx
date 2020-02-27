// {$('#add-user-button').on('click', function() {
    
//     $.ajax({
//         url: '/signup',
//         type: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify({ username, title, zipcode })
//     });
//     $("form").trigger("reset");
// });
// work with properties of object passed in
// ie user.username


// const SubmissionForm = (props) =>    {
//     return (
// <form className="submitForm">
// <field>{props.addUser()}</field>
//     <SubmitButton />
// </form>
//     );
// }
// <h3>Add Event</h3>}

// props = {
//   title = "Add User"
//   labels: ["event name", "date", "keyword", ...]
//   onSubmit: (username, name) => {}
//   submitText: "add user"
// }

// state = {
//     username: "Jennifer",
//     name: "Jennifer Tilt",
// }

class SubmitForm extends React.Component    {
    constructor(props) {
        super(props);

        this.state = {}
        props.labels.forEach(label => {
            this.state[label] = "";
        })
    }

    render() {
        return  (
            // TODO: make into modal
            <form className="submit-form" id={props.id}>
                {/* the id thing isn't right, so i need to circle back on it. also, can i combine a jsx expression with a string? */}
                {/* my idea is that i want to make a submission form component that populates with the correct number of fields
                is that ANYTHING */}

                {this.props.labels.map(label => this.renderField(label))}
                <button className="submit-button" onClick={this.props.onSubmit(this.state)}>
                    {this.props.submitText}
                </button>
            </form>
        );
    }

    renderField(label) {
        return (
            <label>
                {label}
                <input type="text" class="text-field" value={this.state[label]} onChange={this.changeHandler(label)}></input>
            </label>
        );
    }

    changeHandler(label) {
        return (event) => {
            let newState = {};
            newState[label] = event.target.value;
            this.setState(newState);
            // If things are refreshing or something is weird, try the next line
            // event.preventDefault();
        }
    }
}

         /*  <form id="add-event">
                <label>event name:</label>
                <input type="text" class="text-field" id="add-event-title">
                <br/>
                <label>date:</label>
                <!--date object-->
                <input type="date" class="text-field" id="add-event-date">
                <br/>
                <label>keyword:</label>
                <!--dropdown list-->
                <input type="text" class="text-field" id="add-event-keyword">
                <br/>
                <label>city:</label>
                <!--dropdown list-->
                <input type="text" class="text-field" id="add-event-city">
                <br/><label>zip:</label>
                <!--dropdown list-->
                <input type="text" class="text-field" id="add-event-zip">
                <br/>
                <label>venue:</label>
                <input type="text" class="text-field" id="add-event-venue">
                <br/>
                <label>showtime:</label>
                <!--date object-->
                <input type="text" class="text-field" id="add-event-showtime">
                <br/>
                <label>description:</label>
                <input type="text" class="text-field" id="add-event-description">
                <br/>
                <input type="button" class="form-buttons" id='add-event-button' value="add event"></input>
             </form>*/