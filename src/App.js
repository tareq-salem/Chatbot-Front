import React, { Component } from 'react';

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import steps from './config/steps';

import './App.css';
import logo_chatbot from './assets/images/react-simple-chatbot.svg';
import icon_user from './assets/images/avatar.png';
import './assets/css/main.css';
import './assets/css/bootstrap-grid.min.css';

import './modal-register/modal-register';

import chat_styles from './config/chatstyles'

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <iframe
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/ff3b5b69-84fe-48b2-9d5e-781b86eeabc3">
        </iframe>
      </div>
    );
  }
}

export default App;
