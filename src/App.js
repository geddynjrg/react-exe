import React from 'react';
import './App.css';

function App() {
  const arrayOne = ['a', 'b', 'c'];
  const arrayTwo = [1, 2, 3];
  const arraysCombined = [...arrayOne, ...arrayTwo];

  return (
    <div className="App">
      <p>{arraysCombined}</p>
    </div>
  );
}

export default App;
