import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from './Header';
import Sidebar from './sidebar/Sidebar';
import View from './View';
import Viewbar from './Viewbar';

@inject('AppStore') 
@observer
class Shell extends Component {

  render() {
    //const AppStore = this.props.AppStore;

    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <Viewbar  />
        <View  />
      </React.Fragment>
    );
  }
}

export default Shell;