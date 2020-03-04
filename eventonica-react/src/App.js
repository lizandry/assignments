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
          
          <h3>All Users</h3>
          
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

class userSubmit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return  (
            <form className="submit-form" >
                <label id="user-label"> {`log in, user!`}
                <select id="select-user">
                    <option>lizandry</option>
                    <option>betterzepp</option>
                    <option>xSteelBallx</option>
                    <option>20thCentDad</option>
                    <option>pUnChGhOsT</option>
                </select>
                </label>
                <p></p>
                <label id="message-label">
                    {`enter bad thoughts below`}
                    <br/>
                    <textarea className="empty-text-box" id="type-a-message">
                    </textarea>
                </label>
                <p></p>
                <button className="submit-button">
                    {`give bad thoughts to world`}
                </button>
            </form> 
        );
    }
    
//trying to take value of #type-a-message
    submitForm(body)    {
        console.log("did the text get submitted?")
        return(event) =>    {
            console.log("does it submit?")
            event.preventDefault();
            let newState = {};
            //have to think about how to access the inner elements of the form
            //it wouldn't be body.id, that's nothing
            newState[body] = event.target.value;
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

