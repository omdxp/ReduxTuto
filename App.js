import React from 'react';
import Home from './app/components/home';
import {Provider} from 'react-redux';
import store from './app/redux/store/configure-store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
