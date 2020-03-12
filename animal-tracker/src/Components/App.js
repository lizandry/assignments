import React from 'react';
import '../index.css';
import SubmitForm from './SubmitForm'
import List from './List'


class App extends React.Component {
  render() {
    return (
    <div className='App'>
      <header className='App-header'>
     
      </header>
      <h1>animal trackings:</h1>
      <p></p>
      <List />
 <SubmitForm />
 <h1>test</h1>

    </div>
  );
    }
  
}

export default App;
