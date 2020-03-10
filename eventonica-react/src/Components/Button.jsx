import React from 'react';
// const Greeting = props => <div>Hello {props.name}</div>;
class Button extends React.Component {
    constructor(props) {
        super(props);

        //figuring out how to make 'username' called on line 35 of App.js just become propToEffect
        this.state = {
            visible: true,
            innerText: 'this is a button',
            propToEffect: '',
            title: '',
            buttonEffect: ()=>{}
        };
        // this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    //this could be a switch
    componentDidMount() {
        if (this.props.deleteUser === true) {
            let thisProp = this.props.username;
            this.setState({
                innerText: `delete ${thisProp}`, 
                buttonEffect: this.handleDelete, propToEffect: `${thisProp}`});
                console.log(thisProp);

        }
    }
    render() {

  return (  <button onClick={this.state.buttonEffect}>
{this.state.innerText}
    </button>
  );
}
async handleSubmit(event) {
    event.preventDefault();
    await fetch('/users', {
        method: 'POST',
        body: JSON.stringify({
            // username: this.state.username,
            // title: this.state.title
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(
        () => console.log('success')
    );
    }
    async handleDelete(event) {
    event.preventDefault();
    //can't figure out what's going wrong here
    console.log('deleted', this.state.propToEffect);
    await fetch('/users', {
        method: 'DELETE',
        body: JSON.stringify({
            username: this.state.propToEffect,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(
        () => console.log('success')
    );

}


}

export default Button;