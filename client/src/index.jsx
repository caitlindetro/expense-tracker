import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

// Global style
// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lobster');

  body {
    background-color: violet;
    padding: 0;
    margin: 0;
    font-family: 'Lobster', cursive;
  }
`
