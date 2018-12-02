import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lobster');

body {
  background-color: #e6e6e6;
  padding: 0;
  margin: 0;
  font-family: 'Lobster', cursive;
}
`;

const Title = styled.h1`
  padding: 30px 20px 5px 0;
  margin-top: -5px;
  background-color: #527a7a;
  border-bottom: 10px solid #ff5c33;
  text-align: right;
  color: #ffffff;
  font-size: 60px;
  text-shadow: 3px 2px #4d4d4d;
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
        <Title>PocketChange</Title>
      </div>
    )
  }
}

export default App;
