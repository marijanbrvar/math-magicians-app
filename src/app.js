import { useState } from 'react';
import Calculator from './components/calculator';
import calculate from './logic/calculate';
import './app.css';

const App = () => {
  const [state, setState] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const handleClick = (btnName) => {
    const newState = calculate(state, btnName);
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <Calculator
      click={handleClick}
      display={state.next || state.total || '0'}
    />
  );
};
export default App;
