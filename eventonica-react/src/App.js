import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import SubmitForm from "./Components/SubmitForm";
// import ItemList from "./Components/ItemLists";
import ItemRow from "./Components/ItemRow";


class App extends React.Component {
    render() {
        return (
            <div>
          
          <h3>make an account</h3>
          
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
        )
    }

//     async submitUser(userState) {
//         const response = await fetch('/signup', {
//             method: 'POST',
//             body: JSON.stringify({
//                 username: userState.username,
//                 name: userState.title
//             }),
//             headers: {
//               "Content-type": "application/json; charset=UTF-8"
//             }
//         }).then(
//             // TODO: take you to event searches
//             () => console.log("success")
//         );
//     // }
}    
class UserSubmit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            username: "",
            title: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({username: event.target.value,
        title: event.target.value},)
    }
    handleSubmit(event) {
        event.preventDefault();
       console.log(`welcome, ${this.state.username}`)
    }
    render() {
        return  (
            <form className="submit-form" >
            
                <label className="submit-form-labels">
                {`choose a username`}
                </label>
                <input type="text" name="username" value={this.state.value} onChange={this.handleChange} className="empty-text-field" id="username-input" />
                

            <p></p>
            <label className="submit-form-labels">
                {`what should we call you?`}
            </label>
                <input type="text" value={this.state.value} name="title" onChange={this.handleChange} className="empty-text-field" id="title-input">
                </input>
                <p></p>
                <input type="submit"  className="submit-button" value={`create account`} onClick={this.handleSubmit} /> 
            </form> 
        );
    }
}

export default App;

