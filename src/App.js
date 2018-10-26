import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import './App.css';
import { Body, AppHeader, AppContainer } from './components/globalStyle';
import { theme } from './shared/theme';
import PostalCodeContainer from './container/postalCode';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Body>
            <AppContainer>
              <AppHeader>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">React Tech Challenge</h1>
              </AppHeader>
              <PostalCodeContainer />
            </AppContainer>
          </Body>
      </ThemeProvider>
    );
  }
}

export default App;
