import React from 'react';
import './index.css';
import SubmitForm from "./Components/SubmitForm";
import ItemList from "./Components/ItemLists";
// const React = require("react");
// const myCSS = require("./index.css")
// const SubmitForm = require("./SubmitForm")

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
    render() {
        return <div>
          
          <h3>All Users</h3>
{/* list element goes here */}
































<ItemList

/>


        <SubmitForm
            title="Add User"
            labels={["username", "name"]}
            buttonText="add user"
            onSubmit={this.submitUser}
        />;
        </div>
        // return <SubmitForm
        //     title="Delete User"
        //     labels={["username", "name"]}
        //     buttonText="add user"
        //     onSubmit={this.submitUser}
        // />;
    }

    // async submitUser(userState) {
    //     const response = await fetch('/signup', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             username: userState.username,
    //             name: userState.name
    //         }),
    //         headers: {
    //           "Content-type": "application/json; charset=UTF-8"
    //         }
    //     }).then(
    //         // TODO: take you to event searches
    //         () => console.log("success")
    //     );
    // }
}    
// if (typeof module != 'undefined') {
//     module.exports = { App }
// };
export default App;

