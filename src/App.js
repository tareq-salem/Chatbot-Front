import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import Axios from 'axios';

class BotResponse extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  getResponseBot(search) {
      return Axios.post('http://localhost:8000/botman', { message: search });
  }

  componentWillMount() {
    // const self = this;
    const { steps } = this.props;
    this.setState({ loading: true });
    const search = steps.search.value;
    console.log(search);
    this.getResponseBot(search)
        .then(res => {
            this.response = res.data.response.queryResult.fulfillmentText
            this.triggetNext(this.response);
        });
  }

  triggetNext(botResponse) {
    this.setState({ trigger: true, response: botResponse, loading: false }, () => {
      console.log(this.state.response)
      this.props.triggerNextStep();
    });
  }

  render() {
    const { loading, result, trigger } = this.state;
    console.log('render res ', result )
    return (
        <div>
        { loading ? <Loading /> : result }
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            {
              !trigger &&
              <button
                onClick={() => this.triggetNext()}
              >
                Search Again
              </button>
            }
          </div>
        }
      </div>
    );
  }
}

BotResponse.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

BotResponse.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

const GeekBot = () => (
  <ChatBot
    steps={[
      {
        id: '1',
        message: 'Hello my name is Geekbot, what can I do for you ?',
        trigger: 'search'
      },
      {
        id: 'search',
        user: true,
        trigger: '2',
      },
      {
        id: '2',
        component: <BotResponse />,
        waitAction: true,
        trigger: 'search',
      },
    ]}
  />
);

export default GeekBot;