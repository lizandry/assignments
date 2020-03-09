import React from 'react';
// const Greeting = props => <div>Hello {props.name}</div>;
class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            innerText: 'this is a button',
            propToEffect: '',
            title: '',
            buttonEffect: ()=>{}
        };
        // this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //this could be a switch
    componentDidMount() {
        if (this.props.deleteUser === true) {
            let thisProp = this.props.username;
            this.setState({
                innerText: `delete ${thisProp}`, 
                buttonEffect: this.handleDelete, propToEffect: `${thisProp}`});

        }
    }
    render() {

  return (  <button onClick={this.state.buttonEffect}>
{this.state.innerText}
    </button>
  );
};
async handleSubmit(event) {
    event.preventDefault();
    await fetch('/user', {
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
    )
    .catch(error => console.log(error)
    );
    }
    async handleDelete(event) {
    event.preventDefault();
    console.log('deleted', this.state.propToEffect);
    await fetch('/user', {
        method: 'DELETE',
        // body: JSON.stringify({
        //     username: this.props.username,
        // }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(
        () => console.log('success')
    )
    .catch(error => console.log(error)
    );

}


}

export default Button;