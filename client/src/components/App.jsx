import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      month: ''
    };
  }

  var Title = styled.h1`
    color: 'white';
  `;

  render() {
    return (
      <Title>PocketChange</Title>
    )
  }
}

export default App;
