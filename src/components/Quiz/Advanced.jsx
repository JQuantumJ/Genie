// Quiz.jsx
import React, { useState } from 'react';
import * as Q from './QuizStyle'; // Import the styled components
import Genie1 from '/src/assets/image/Character/sad.svg'; // Genie1 이미지 import
import Genie2 from '/src/assets/image/main/Genie2.svg'; // Genie2 이미지 import

const Advanced = () => {
    const questions = [
      { question: '', correctAnswer: '', explanation: ' ' },
      { question: '', correctAnswer: 'O', explanation: '' },
      { question: '', correctAnswer: 'O', explanation: '' },
      { question: '', correctAnswer: 'X', explanation: '' },
      { question: '', correctAnswer: 'X', explanation: ' ' },
      { question: '', correctAnswer: 'X', explanation: '' }
    ];
  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [popupExplanation, setPopupExplanation] = useState('');
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    let popupDuration = 1500; 
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setPopupContent('정답입니다!');
      setPopupExplanation('');
    } else {
      setPopupContent('오답입니다!');
      setPopupExplanation(currentQuestion.explanation);
      popupDuration = 3000; 
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizComplete(true);
      }
    }, popupDuration); 
  };

  return (
    <Q.QuizContainer>
      {quizComplete ? (
        <Q.FinalScoreContainer>
          <h2>퀴즈 완료!</h2>
          <p>총 <span style={{color: '#0015ff'}}>{questions.length}문제</span> 중 <span style={{color: '#0015ff'}}>{score}문제</span> 맞추셨습니다.</p>
          {/* 점수에 따라 이미지를 조건부로 렌더링 */}
          {score < 5 ? (
            <img src={Genie1} alt="Genie1" />
          ) : (
            <img src={Genie2} alt="Genie2" />
          )}
        </Q.FinalScoreContainer>
      ) : (
        <>
          <Q.Question>{questions[currentQuestionIndex].question}</Q.Question>
          <div>
            <Q.AnswerButton onClick={() => handleAnswer('O')}>O</Q.AnswerButton>
            <Q.AnswerButton onClick={() => handleAnswer('X')}>X</Q.AnswerButton>
          </div>
          {showPopup && (
            <Q.Popup>
              <p>{popupContent}</p>
              {popupExplanation && <small>{popupExplanation}</small>}
            </Q.Popup>
          )}
        </>
      )}
    </Q.QuizContainer>
  );
};

export default Advanced;
