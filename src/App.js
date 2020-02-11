import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Goodbye from './goodbye';
import Navbar from './navbar';
import FormField from './formfield.js';
import CoolButton from './coolbutton';
import Form from './form';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <button className="button is-rounded my-class is-info is-large">Button!</button> */}
      <header className="App-header">
        {/* <Welcome/> */}
        <FormField/>
        <Form/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          ...
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
