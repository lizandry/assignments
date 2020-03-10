import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
// import SubmitForm from "./SubmitForm";
// import ItemList from "./ItemLists";
import ItemRow from './ItemRow';
import UserSubmit from './UserSubmit';
import Button from './Button';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        // this.displayAllUsers = this.displayAllUsers.bind(this);
        // this.handleTitleChange = this.handleTitleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
  //TODO. more difficult than imagined
// async displayAllUsers() {
//     await fetch('/users', {
//         method: 'GET'
//     })
//     .then(
//         (data) => {data.map(e=>{

//            <li>{e.username}</li>;
//         });

//         }
//     );
// }
    render() {

        return (
            
            <div id="my-app">
          
          <h3>make an account</h3>
          {/* username is hard-coded right now, but it IS working */}
          <Button
          username="testUser3"
          deleteUser={true}
          />
        <ItemRow 
        //oh dag!! the properties are whatever i write here
        title="the big party"
        subtitle="a description of the big party"
        //onClick
        />
          <UserSubmit />
              <h3>all users</h3>
        {/* <ul className='user-list'>{this.displayAllUsers}</ul> */}
          
{/* list element goes here */}


{/* <ItemList

/>


        <SubmitForm
            title="Add User"
            labels={["username", "title"]}
            buttonText="add user"
            onSubmit={this.submitUser}
        />; */}


        
        </div>
        );
        
    }

    
}    
export default App;

// this.callBackendAPI()
//         .then(res => this.setState({ data: res.express }));
//         // this.displayAllUsers()
//         // .then(response => response.json())
//     //     .then(data => data.map(u => u.username)
//     }
//     async callBackendAPI() {
//       const response = await fetch('/express_backend');
//       const body = await response.json();
//       return body;
    