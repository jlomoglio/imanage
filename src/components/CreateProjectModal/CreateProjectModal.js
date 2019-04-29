import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('ProjectsStore')
@observer
class CreateProjectModal extends Component {
  render() {

    const props = this.props;
    const ProjectsStore = props.ProjectsStore;

    const Styles = styled.div`
    
    `;

    return (
      <Styles>

      </Styles>
    );
  };
};

export default CreateProjectModal;