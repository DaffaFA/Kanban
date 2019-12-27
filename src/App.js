import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kanban from './Components/Kanban';

const logoStyle = {
  display: 'block',
  margin: '0 auto',
  width: '200px'
}

const App = () => (
  <div className="App">
    <img src={logo} className="App-logo" style={logoStyle} alt="logo" />
    <Kanban />
  </div>
);

export default App;
