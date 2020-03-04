import React from 'react';
import './index.css';
// import SubmitForm from "./Components/SubmitForm";
// import ItemList from "./Components/ItemLists";
// const React = require("react");
// const myCSS = require("./index.css")
// const SubmitForm = require("./SubmitForm")

class App extends React.Component {
    render() {
        return <div>
          
          <h3>make an account</h3>
          <UserSubmit />
          
{/* list element goes here */}


{/* <ItemList

/>


        <SubmitForm
            title="Add User"
            labels={["username", "name"]}
            buttonText="add user"
            onSubmit={this.submitUser}
        />; */}
        </div>
        // return <SubmitForm
        //     title="Delete User"
        //     labels={["username", "name"]}
        //     buttonText="add user"
        //     onSubmit={this.submitUser}
        // />;
    }

    // async submitUser(userState) {
    //     const response = await fetch('/signup', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             username: userState.username,
    //             name: userState.name
    //         }),
    //         headers: {
    //           "Content-type": "application/json; charset=UTF-8"
    //         }
    //     }).then(
    //         // TODO: take you to event searches
    //         () => console.log("success")
    //     );
    // }
}    

// let UserSubmit = (event) => {
//     const [username, setUsername] = useState("");
//     const [title, setTitle] = useState("")
//         return  (
//             <form className="user-submit-form" >
//             <label id="username-label">
//                 {`choose a username`}
//                 <input type="text" value="" name="" onChange={() => setUsername(username.concat())} className="empty-text-field" id="username-input">
//                 </input>
//             </label>
//             {/* <label id="title-label"> 
//                 {`what should we call you`}
//                 <input type="text" value={this.state.username} onChange={this.handleChange} className="empty-text-field" id="title-input">
//                 </input>
//             </label> */}
//             <p></p>
//             <button className="submit-button">
//                 {`create my account`}
//             </button>
//         </form> 
//         );
//     }
    

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
            
            <label className="submitform-labels">
                {`choose a username`}
            </label>
                <input type="text" name={this.state.username} value={this.state.value} onChange={this.handleChange} className="empty-text-field" id="username-input">
                </input>
            
            <p></p>
            <label className="submitform-labels">
                {`what should we call you?`}
            </label>
                <input type="text" value={this.state.value} name={this.state.title} onChange={this.handleChange} className="empty-text-field" id="title-input">
                </input>
            
            <p></p>
            <input type="submit"  className="submit-button" value={`create account`} onClick={this.handleSubmit} /> 
                

        </form> 
        );
    }
    
//trying to take value of #type-a-message
    submitForm(props)    {
        console.log("did the text get submitted?")

        return(event) =>    {
            console.log("does it submit?", event.target.value)
            event.preventDefault();
            let newState = {};
            //have to think about how to access the inner elements of the form
            //it wouldn't be body.id, that's nothing
            newState[props] = event.target.value;
            this.setState(newState);
        }

    }

}

// const list = [
//     {
//       id: 'a',
//       firstname: 'Robin',
//       lastname: 'Wieruch',
//       year: 1988,
//     },
//     {
//       id: 'b',
//       firstname: 'Dave',
//       lastname: 'Davidds',
//       year: 1990,
//     },
//   ];
//   const ItemList = () => (
//     <ul>
//       {list.map(item => (
//         <li key={item.id}>
//           <div>{item.id}</div>
//           <div>{item.firstname}</div>
//           <div>{item.lastname}</div>
//           <div>{item.year}</div>
//         </li>
//       ))}
//     </ul>
//   );
export default App;

