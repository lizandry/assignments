import React from 'react';
import '../index.css';
import SubmitForm from "./SubmitForm";

// when you get to autopopulating the events list from ticketmaster:
// https://reactjs.org/docs/faq-ajax.html
// you'll need this in the Tab component to get the initial data


class App extends React.Component {
    render() {
        return <SubmitForm
            title="Add User"
            labels={["username", "name"]}
            buttonText="add user"
            onSubmit={this.submitUser}
        />;
        // return <SubmitForm
        //     title="Delete User"
        //     labels={["username", "name"]}
        //     buttonText="add user"
        //     onSubmit={this.submitUser}
        // />;
    }

    async submitUser(userState) {
        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({
                username: userState.username,
                name: userState.name
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }).then(
            // TODO: take you to event searches
            () => console.log("success")
        );
    }

//   constructor() {
//     super();
//     this.state = {
//       // this is an object, i could do basically anything in here! refer back to index.jsx in portfolio project
//     }
//   } render()  {
//   return (
//     <div>
//       <header></header>
//       <body>
//       <div className="App">
//       <h3>Add User</h3>
//               <form id="add-user">
//                 <div class="input-area">
//         <label>username:</label>
//                   <input type="text" class="text-field" id="add-username"></div>
//               <div class="input-area"><label>name:</label>
//                 <input type="text" class="text-field" id="add-title"></div>
//                   <input type="button" class="form-buttons" id='add-user-button' value="add user"> </form>
      
//       </div>
//       </body>
//     <input type="text" class="text-field" id="add-event-title"></input>
//   );
// }
}

export default App;


// <html>

// <head>
//     <meta charset="utf-8" />

//     <link rel="stylesheet" type="text/css" href="index.css">


//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta name="description" content="the only place to buy tickets online" />
//     <title>ticketmaster</title>
// </head>

// <body>

//     <!-- 
// -the header "Import Events from Ticketmaster".
// -A button that says "Import first event from Ticketmaster" -->

//     <div>
//         <h1>Event Recommender</h1>

//         <h2>User Management</h2>
//         <div>
//             <h3>All Users</h3>
//             <ul id="all-users">
//                 <!-- Use jQuery to display all Users here -->
//             </ul>

//            
//         </div>





//         <div>
//             <h3>Delete User</h3>
//             <form id="delete-user">
//                 <label>username:</label>
//                 <input type="text" class="text-field" id="user-to-delete">
//                 <br/>
//                 <input type="button" class="form-buttons delete-buttons" id='delete-user-button' value="are you sure?">
//             </form>
//         </div>

//         <br/>

//         <h2>Event Management</h2>
//         <div>
//             <h3>All Events</h3>
//             <ul id="all-events">
//                 <!-- Use jQuery to display all Events here -->
//             </ul>

//             
//         </div>

//         <div>
//             <h3>Delete Event</h3>
//             <form id="delete-event">
//                 <label>event identification:</label>
//                 <input type="text" class="text-field" id='event-to-delete'>
//                 <br/>
//                 <input type="button" class="form-buttons delete-buttons" id='delete-event-button' value="are you sure?">
//             </form>
//         </div>



//         <br/>

//         <h2>import events from ticketmaster</h2>

//         <div>
//             <h3>import first event from ticketmaster</h3>
//             <form>
//                 <input type="button" class="form-buttons find-buttons" id='return-first-ticketmaster-result-button' value='do it, coward'>
//             </form>
//             <h4>Result:</h4>
//             <ol id='single-ticketmaster-event'>
//                 <!-- Use jQuery to add search results here-->
//             </ol>
//         </div>

//         <div>
//             <h3>Find Events by Date</h3>
//             <form id="date-search">
//                 <label>event date:</label>
//                 <input type="date" class="text-field" id="date-search-id">
//                 <br/>
//                 <input type="button" class="form-buttons find-buttons" value="find events">
//             </form>
//             <h4>Results:</h4>
//             <ol>
//                 <!-- Use jQuery to add search results here-->
//             </ol>
//         </div>

//         <div>
//             <h3>find events by keyword</h3>
//             <form id="keyword-search">
//                 <label>event keyword:</label>
//                 <input type="text" class="text-field" id="keyword-search-field">
//                 <br/>
//                 <input type="button" class="form-buttons find-buttons" id='find-event-by-keyword-button' value="find events">
//             </form>
//             <h4>Results:</h4>
//             <ol id='all-results-by-keyword'>

//                 <!-- Use jQuery to add search results here-->
//             </ol>
//         </div>
//         <h2>this is functionally a "like" button with a lot of legwork!</h2>
//         <div>
//             <h3>Save Event for User</h3>
//             <form class='like-button' id="save-user-event">
//                 <label>username:</label>
//                 <input type="text" class="text-field" id="user-likes-event">
//                 <br/>
//                 <label>Event ID:</label>
//                 <input type="text" class="text-field" id="event-user-likes">
//                 <br/>
//                 <input type="button" class="form-buttons find-buttons" id="save-event-to-user-button" value='click here to save (or delete)'>
//             </form>
//             <h3>saved events</h3>
//             <ul id="my-events">
//                 <!-- Use jQuery to display all Events here -->
//             </ul>
//         </div>
//     </div>
//     <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
//     <script src="EventRecommender.js"></script>
//     <script src="jQuery-scripts.js"></script>
// </body>

// </html>