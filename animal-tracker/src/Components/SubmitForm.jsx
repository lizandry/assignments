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
        this.HandleCommonNameChange = this.HandleCommonNameChange.bind(this);
        this.HandleLocationChange = this.HandleLocationChange.bind(this);
        this.HandleHealthChange = this.HandleHealthChange.bind(this);
        this.HandleSighterEmailChange = this.HandleSighterEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCommonNameChange(event) {
        this.setState({common_name: event.target.value});
        // console.log(this.state);
    }
    handleLocationChange(event) {
        this.setState({Location: event.target.value});
        // console.log(this.state);
    }
    handleHealthChange(event) {
        this.setState({healthy: event.target.value});
    }
    handleSighterEmailChange(event) {
        this.setState({sighter_email: event.target.value});
    }
    async handleSubmit(event) {
        event.preventDefault();
        await fetch('/users', {
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
                        value={this.state.title} name='title' onChange={this.HandleLocationChange} className='empty-text-field' id='location-input'>
                    </input>
                    <p></p>
                <label className='submit-form-labels'>
                    healthy?
                </label>
                    <input type='checkbox'
                        value={this.state.title} name='healthy' onChange={this.handleHealthChange} className='check-box' id='healthy-input'>
                    </input>
                    <p></p>
                <label className='submit-form-labels'>
                    your email address:
                </label>
                    <input type='text'
                        value={this.state.title} name='title' onChange={this.handleSighterEmailChange} className='empty-text-field' id='sighter-email-inpuu'>
                    </input>
                    
                    <input 
                        type='submit'  className='submit-button' value='create account' onClick={this.handleSubmit} 
                    /> 
            </form> 
        );
    }
}


export default SubmitForm;