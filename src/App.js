import './App.css';
import React, { Component } from 'react';
import ContactList from './components/contactlist';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {}

  render(){
    return (
      <div className="App">
        <h1>Contact List</h1>
        <ContactList />
      </div>
    );
  }
}

export default App;
