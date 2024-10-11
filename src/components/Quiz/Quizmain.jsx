import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import * as Q from './QuizStyle'; // Import the styled components

const Quizmain = () => {
  const navigate = useNavigate(); // Define navigate function
  return (
    <Q.QuizContainer>
      <Q.Button onClick={() => navigate('/quiz')}> 기초 퀴즈</Q.Button>
      <Q.Button onClick={() => navigate('/medium')}> 중급 퀴즈</Q.Button>
      <Q.Button onClick={() => navigate('/advanced')}> 고급 퀴즈</Q.Button>
    </Q.QuizContainer>
  );
}

export default Quizmain;
