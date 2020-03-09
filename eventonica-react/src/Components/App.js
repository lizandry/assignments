import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
// import SubmitForm from "./SubmitForm";
// import ItemList from "./ItemLists";
import ItemRow from './ItemRow';
import UserSubmit from './UserSubmit';
import Button from './Button';


class App extends React.Component {
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    async callBackendAPI() {
      const response = await fetch('/express_backend');
      const body = await response.json();
    //   if (response.status !== 200) {
    //     throw Error(body.message);
    //   }
      return body;
    }
    render() {
        return (
            
            <div id="my-app">
          
          <h3>make an account</h3>
          {/* make this dynamic */}
          <Button
          username="fd"
          deleteUser={true}
          />
        <ItemRow 
        //oh dag!! the properties are whatever i write here
        title="the big party"
        subtitle="a description of the big party"
        //onClick
        />
          <UserSubmit />
          
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

