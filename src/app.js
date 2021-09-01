import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Header from './components/Header';
import calculate from './logic/calculate';
import './app.css';
import Home from './components/Home';
import Quote from './components/Quote';

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
    <div id="wrapper">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator
            click={handleClick}
            display={state.next || state.total || '0'}
          />
        </Route>
        <Route exact path="/quote">
          <Quote />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
