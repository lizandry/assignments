// const SubmissionForm = (props) =>    {
//     return (
// <form className='submitForm'>
// <field>{props.addUser()}</field>
//     <SubmitButton />
// </form>
//     );
// }
// <h3>Add Event</h3>}

// props = {
//   title = 'Add User'
//   labels: ['event name', 'date', 'keyword', ...]
//   onSubmit: (username, name) => {}
//   submitText: 'add user'
// }

// state = {
//     username: 'Jennifer',
//     name: 'Jennifer Tilt',
// }
import React from 'react';
 class SubmitForm extends React.Component    {
    constructor(props) {
        super(props);

        this.state = {}
        props.labels.forEach(label => {
            this.state[label] = '';
        })
        this.renderField = this.renderField.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    render() {
        return  (
            // TODO: make into modal
            <form className='submit-form' id={props.id}>
                {this.props.labels.map(label => this.renderField(label))}
                <button className='submit-button' onClick={this.props.onSubmit(this.state)}>
                    {this.props.submitText}
                </button>
            </form>
        );
    }

    renderField(label) {
        return (
            <label>
                {label}
                <input type='text' class='text-field' value={this.state[label]} onChange={this.changeHandler(label)}></input>
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
export default SubmitForm;