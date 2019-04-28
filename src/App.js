import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Shell from './components/shell/Shell'
import EditImageModal from './components/EditImageModal/EditImageModal';
import PayInfoModal from './components/UserProfile/PayInfoModal';

@inject('UserProfileStore')
@observer
class App extends Component {
  render() {

    const Styles = styled.div``;

    return (
      <Styles>
        <Shell />
        <EditImageModal />
        <PayInfoModal />
      </Styles>
    );
  }
}

export default App;
