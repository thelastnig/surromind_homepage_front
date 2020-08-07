import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configure from './store/configure';
import App from './App';
import transit from 'transit-immutable-js';

const preloadedState = window.__PRELOADED_STATE__ && transit.fromJSON(window.__PRELOADED_STATE__);

const store = configure(preloadedState);

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

export default Main;