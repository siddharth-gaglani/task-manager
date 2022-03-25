import React from 'react';
import Tasks from './Tasks/Container';

function App() {
  return (
    <div className="App">
      <div className="py-3 jumbotron bg-white text-center">
        <div className="container">
          <h1>Task Manager</h1>
          <p className="lead text-muted">
            Manage your task efficiently with Task Manager.
          </p>
        </div>
      </div>
      <div className="container-fluid py-5 bg-light">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
