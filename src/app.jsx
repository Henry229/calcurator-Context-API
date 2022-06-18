import React, { useState } from 'react';
import './app.css';
import Calculator from './components/calculator';
import {OnClickContext} from './context/onclickContext';

function App() {
  const [states, setStates] = useState ({
    previousOperand: null,
    operator: null,
    currentOperand: null,
    overwrite: null,
  });

  return (
    <OnClickContext.Provider value={{states, setStates}}>
      <Calculator />
    </OnClickContext.Provider>
  );
}

export default App;
