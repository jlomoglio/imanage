import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import AppStore from './src/stores/AppStore';
import DashboardStore from './src/stores/DashboardStore';

const Root = (
  <Provider 
    AppStore={AppStore} 
    DashboardStore={DashboardStore}
  >
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
