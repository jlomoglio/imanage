import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import AppStore from './stores/AppStore';
import DashboardStore from './stores/DashboardStore';
import ChatStore from './stores/ChatStore';

const Root = (
  <Provider 
    AppStore={AppStore} 
    DashboardStore={DashboardStore}
    ChatStore={ChatStore}
  >
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
