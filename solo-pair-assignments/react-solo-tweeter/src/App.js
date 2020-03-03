//didn't get anything working, experimenting with props and state all over the place in here

import React from 'react';
import './App.css';


class App extends React.Component {
    render() {
      return (
        <div className="App">
            <div className="App-header">
                <SubmitForm
                    //i would want the below text to be what happens when i click submit
                    //so my this.submitForm() function is already broken
                    formText={'not sure yet'}
                    // onClick={this.submitForm(body)}
                />
            </div>
        </div>
      );
    }
}
class SubmitForm extends React.Component    {
    constructor(props) {
        super(props);
        this.state = {
            body: "test"

            //message body 
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
  

export default App;