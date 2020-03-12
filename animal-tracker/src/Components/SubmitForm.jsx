import React from 'react';
import '../index.css';


class SubmitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            common_name: '',
            location: '',
            ishealthy: false,
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
    handleHealthChange = (event) => {
        this.setState({ishealthy: event.target.checked});
        console.log(this.state);
    }
    handleEmailChange = (event) => {
        this.setState({sighter_email: event.target.value});
        console.log(this.state);
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        await fetch('sightings', {
            method: 'POST',
            body: JSON.stringify({
                common_name: this.state.common_name,
                location: this.state.location,
                ishealthy: this.state.ishealthy,
                sighter_email: this.state.sighter_email
            }),
            headers: {
              'Content-Type': 'application/json charset=UTF-8',
              "Accept": "application/json"
            }
        }).then(console.log('state', this.state))
        .then((res) => res.json());
  
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
                        name='ishealthy' value={this.state.ishealthy} 
                        checked={this.state.ishealthy}
                        onChange={this.handleHealthChange} 
                        className='check-box' id='location-input'>
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
                        type='submit'  className='submit-button' value='register sighting' onClick={this.handleSubmit} 
                    />
            </form> 
        );
    }
}


export default SubmitForm;