/**
 * @format
 */

import {name as appName} from './app.json';
import App from './src/App';
import store from './src/store';
import theme from './src/theme';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
