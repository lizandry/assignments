import React from 'react';

class UserSubmit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            username: '',
            title: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
        // console.log(this.state);
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
        // console.log(this.state);
    }
    async handleSubmit(event) {
        event.preventDefault();
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                title: this.state.title
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(
            () => console.log('success')
        );
  
    }
    
    render() {
        return  (
            <form className='submit-form' >
            
                <label className='submit-form-labels'>
                    choose a username
                </label>
                <input type='text' 
                    name='username' value={this.state.username} onChange={this.handleUsernameChange} className='empty-text-field' id='username-input' 
                />
                

                <p></p>
                <label className='submit-form-labels'>
                    what should we call you?
                </label>
                    <input type='text'
                        value={this.state.title} name='title' onChange={this.handleTitleChange} className='empty-text-field' id='title-input'>
                    </input>
                    <p></p>
                    <input 
                        type='submit'  className='submit-button' value='create account' onClick={this.handleSubmit} 
                    /> 
            </form> 
        );
    }
}

export default UserSubmit;