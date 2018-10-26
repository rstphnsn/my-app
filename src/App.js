import React, { Component, Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';

const LazyThing = lazy(() => import('./components/Thing'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello
          </p>
          <Suspense fallback={<div>Loading…</div>}>
            <LazyThing lazy />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
