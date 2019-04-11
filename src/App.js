import React, { Component } from 'react';

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import steps from './config/steps';

import './App.css';
import logo from './assets/images/Chatbot-logo.png';
import logo_chatbot from './assets/images/react-simple-chatbot.svg';
import icon_user from './assets/images/avatar.png';
import './assets/css/main.css';
import './assets/css/bootstrap-grid.min.css';

import chat_styles from './config/chatstyles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
        </header>
        <div className="container content">
          <div className="row justify-content-md-center">
            <div className="col">
              <ThemeProvider theme={chat_styles}>
                <ChatBot
                  steps={steps}
                  headerTitle="HOC - Chatbot"
                  placeholder="Type away..."
                  customDelay="500"
                  botAvatar={logo_chatbot}
                  userAvatar={icon_user}
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
        <footer className="Footer">
          <p className="credit">Shoutout to <a href="https://lucasbassetti.com.br/react-simple-chatbot/" className="chatbot"><img src={logo_chatbot} alt="React Simple Chatbot" /></a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
