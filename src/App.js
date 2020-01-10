import React from 'react';
import logo from './logo.svg';
import KanbanContextProvider from './Contexts/KanbanContext';
import KanbanBoard from './Components/KanbanBoard';
import KanbanCreateBoard from './Components/KanbanCreateBoard';

const App = () => (
  <KanbanContextProvider>
    <div className="container">
      <img src={logo} alt="React logo" style={{ width: '200px', display: 'block', margin: '0 auto' }} />
    </div>

    <div className="container">
      <div className="columns">
        <KanbanBoard />
        <KanbanCreateBoard />
      </div>
    </div>
  </KanbanContextProvider>
)

export default App;
