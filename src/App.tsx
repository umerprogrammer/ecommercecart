import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter/>
      </header>
    </div>
  );
}

export default App;
