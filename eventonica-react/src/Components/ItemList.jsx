import React from 'react';
import SubmitForm from "./SubmitForm";
import ItemRow from "./ItemRow";

class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
        }
    }

    openAddModal() {
        this.setState({modalOpen: true});
    }

    closeModal() {
        this.setState({modalOpen: false});
    }

    modal() {
        if (this.state.modalOpen) {
            return <SubmitForm {...this.props.addProps} />
        } else {
            return null;
        }
    }

    render() {
        let addButton = null;
        if (this.props.onAdd) {
            addButton = <button onClick={this.openAddModal}>+</button>
        }

        const modal = this.modal();

        return (
            <div>
                {addButton}
                {this.props.items.map(item => 
                    <ItemRow
                        title={item.title}
                        subtitle={item.subtitle}
                        onClick={this.props.onClick}
                        onDelete={this.props.onDelete}
                        
                    />
                )}
                {modal}
            </div>
        );
    }
    addProps() {
console.log("help")
    }
}
// ItemListProps = {
//     items: [{
//         title: "Dance Party",
//         subtitle: "3/4/20",
//     }, {
//         title: "Other Party",
//         subtitle: "3/4/20",
//     }],
//     onClick: (id) => { // open event page }
//     onDelete: (id) => { // ajax call }
//     onAdd: () => { // ajax call }
//     addProps: { // object containing the props of SubmitForm}
// }