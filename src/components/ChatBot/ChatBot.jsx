import React, { useState } from 'react';
import styled from 'styled-components';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div style={{ zIndex: '20000', position: 'fixed', bottom: '9rem', right: '3rem' }}>
        <button
          onClick={toggleChatbot}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '5rem',
            height: '5rem',
            fontSize: '24px',
            cursor: 'pointer'
          }}
          title="챗봇 열기"
        >
          {isOpen ? "X" : "💬"}
        </button>
      </div>

      {isOpen && (
        <ChatWrapper>
          <StyledIframe
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/87fdfc94-6875-4699-a61e-ee1c7fcc7ab2"
          ></StyledIframe>
        </ChatWrapper>
      )}
    </div>
  );
};

export default ChatBot;

const ChatWrapper = styled.div`
  z-index: 10000;
  position: fixed;
  bottom: 9rem;
  right: 10rem;
  width: 100%;
  @media (max-width: 780px) {
    right: 0;
    left: 0;
    bottom: 2rem;
    width: 95%; 
  }
`;

const StyledIframe = styled.iframe`
  display: block; 
  max-width: 95%;
  width: 400px;
  height: 500px; 
  margin: 0 auto; 
  @media (max-width: 780px) {
    height: 480px;
  }
`;