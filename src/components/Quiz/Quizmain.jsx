import React, { useState } from 'react';
import React from 'react'
import * as Q from './QuizStyle'; // Import the styled components

const Quizmain = () => {
  return (
    <Q.QuizContainer>
    <Button style={{cursor: 'pointer'}} onClick={e=>navigate('/quiz')}> 기초 퀴즈</Button>
    <Button style={{cursor: 'pointer'}} onClick={e=>navigate('/medium')}> 중급 퀴즈</Button>
    <Button style={{cursor: 'pointer'}} onClick={e=>navigate('/advanced')}> 고급 퀴즈</Button>
    </Q.QuizContainer>
  )
}

export default Quizmain