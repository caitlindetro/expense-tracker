import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lobster');

body {
  background-color: "D5D5D5";
  padding: 0;
  margin: 0;
  font-family: 'Lobster', cursive;
}
`;

const Title = styled.h1`
  color: #9099A2;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: ''
    };
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>PocketChange</h1>
      </div>
    )
  }
}

export default App;
