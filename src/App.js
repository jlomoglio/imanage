import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Shell from './components/shell/Shell'
import EditImageModal from './components/EditImageModal/EditImageModal';

@inject('UserProfileStore')
@observer
class App extends Component {
  render() {
    //const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div``;

    return (
      <Styles>
        <Shell />
        <EditImageModal />
      </Styles>
    );
  }
}

export default App;
