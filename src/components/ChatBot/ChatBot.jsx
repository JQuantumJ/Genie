import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* 챗봇 아이콘 버튼 */}
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
            cursor: 'pointer',
          }}
          title="챗봇 열기"
        >
          {isOpen ? "X" : "💬"}
        </button>
      </div>

      {/* iframe 챗봇 표시 */}
      {isOpen && (
    <div style={{ zIndex: '20000', position: 'fixed', bottom: '9rem', right: '10rem' }}>
        <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/87fdfc94-6875-4699-a61e-ee1c7fcc7ab2"></iframe>
    </div>
      )}
    </div>
  );
};

export default ChatBot;
