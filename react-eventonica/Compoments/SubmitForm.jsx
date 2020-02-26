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

let SubmitForm = (props) =>  {
        return  (
            <form className="submit-form" id={props.id}>
                {/* the id thing isn't right, so i need to circle back on it. also, can i combine a jsx expression with a string? */}
                {/* my idea is that i want to make a submission form component that populates with the correct number of fields
                is that ANYTHING */}
                
<button className="submit-button" onClick={console.log("submitform test")}></button>
            </form>
        )
    }

         {/*  <form id="add-event">
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
             </form>*/}