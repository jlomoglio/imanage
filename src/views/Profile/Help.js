import React from 'react';
import styled from 'styled-components';

const Help = (props) => {

  const Styles = styled.div`
    .view-contents {
      padding: 20px;
    }
  `;

  return (
    <Styles>
      <div className="view-contents">
        <h2>Help</h2>
      </div>
    </Styles>
  );
}

export default Help;