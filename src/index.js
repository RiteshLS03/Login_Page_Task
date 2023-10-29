import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

