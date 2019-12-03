import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import Navigation from './navigation/AppNavigator';

export default class RootApp extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
