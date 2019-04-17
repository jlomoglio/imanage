import React from 'react';
import styled from 'styled-components';

const Icons = (props) => {

  const Styles = styled.div`
    .view-contents {
      padding: 20px;
    }
  `;

  return (
    <Styles>
      <div className="view-contents">
        <h2>Icons</h2>
      </div>
    </Styles>
  );
}

export default Icons;