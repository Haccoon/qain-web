import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import ConnectedIntlProvider from './connectedIntlProvider';
import { addLocaleData } from 'react-intl';

import './styles/index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import store from './redux/configureStore';

import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';

addLocaleData([...en, ...ko])

ReactDOM.render(
  <Provider store={store}>
   <ConnectedIntlProvider>
      <App />
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
