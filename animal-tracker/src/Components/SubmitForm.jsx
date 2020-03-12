import React from 'react';
import '../index.css';


class SubmitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            common_name: '',
            location: '',
            healthy: true,
            sighter_email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCommonNameChange = (event) => {
        this.setState({common_name: event.target.value});
        console.log(this.state);
    }
    handleLocationChange = (event) => {
        this.setState({location: event.target.value});
        console.log(this.state);
    }
    handleHealthChange(event) {
        this.setState({healthy: event.target.value});
    }
    handleEmailChange = (event) => {
        this.setState({sighter_email: event.target.value});
        console.log(this.state);
    }
    async handleSubmit(event) {
        event.preventDefault();
        await fetch('/sightings', {
            method: 'POST',
            body: JSON.stringify({
                common_name: this.state.common_name,
                location: this.state.location,
                healthy: this.state.healthy,
                sighter_email: this.state.sighter_email
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
                    type of animal sighted:
                </label>
                <input type='select' 
                    name='common_name' value={this.state.common_name} onChange={this.handleCommonNameChange} className='dropdown-menu' id='common-name-input' 
                />
                <p></p>
                <label className='submit-form-labels'>
                    location sighted:
                </label>
                    <input type='text'
                        name='location' value={this.state.location} onChange={this.handleLocationChange} className='empty-text-field' id='location-input'>
                    </input>
                    <p></p>
                <label className='submit-form-labels'>
                    check if the animal is healthy
                </label>
                <input type='checkbox'
                        name='healthy' value={this.state.healthy} onChange={this.handleHealthChange} className='check-box' id='location-input'>
                    </input>
                    <p></p>
                <label className='submit-form-labels'>
                    your email address:
                </label>
                <input type='text'
                        name='location' value={this.state.sighter_email} onChange={this.handleEmailChange} className='empty-text-field' id='location-input'>
                    </input>
                           <p></p>
                    <input 
                        type='submit'  className='submit-button' value='register-animal-sighting' onClick={this.handleSubmit} 
                    />
            </form> 
        );
    }
}


export default SubmitForm;