import React from 'react';
// import Button from './Button';
// import SubmitForm from './SubmitForm';
// import ItemList from './ItemList';

// props = {
//     title: 'Dance Party',
//     subtitle: '3/4/20',
//     onClick: (id) => { // open event page }
//     onDelete: (id) => { // ajax call }
// onAdd: () => { 'ajax call' }
//             addProps: { // object containing the props of SubmitForm}
// }
class ItemRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: '',
            // subtitle: '',
            // props: {}
        };
}

    render() {
        return (
            <div className='item-row'>
                stop by {this.props.title} it's gonna be lit, here's a description: {this.props.subtitle}
            </div>
        )

    }

    onClick(props) {
        console.log('id => {open event page}')
    }
    onAdd() {
        console.log('ajax call')
    }

    onDelete(props) {
        console.log('id => {ajax call}')
    }
    addProps(props) {
    props.labels.forEach(label => {
        this.setState[label] = '';
    })
}
}





// class ItemRow extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             subtitle: '',
//         }
//     }

//     render() {
//         let thisRow = null;


//     }
// }
export default ItemRow;