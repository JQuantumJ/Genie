import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as Q from './QuizStyle'; 

const Quizmain = () => {
  const navigate = useNavigate(); 
  return (
    <Q.QuizContainer>
      <Q.Button onClick={() => navigate('/quiz')}> 기초 퀴즈</Q.Button>
      <Q.Button onClick={() => navigate('/medium')}> 중급 퀴즈</Q.Button>
      <Q.Button onClick={() => navigate('/advanced')}> 고급 퀴즈</Q.Button>
    </Q.QuizContainer>
  );
}

export default Quizmain;
