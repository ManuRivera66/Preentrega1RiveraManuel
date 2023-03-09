import './App.css';
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Venta de Pads
        </h1>
      </header>
      <body>
       <React.Fragment>
        <NavBar/>  
      </React.Fragment> 
      </body>
    </div>
  );
}

export default App;
