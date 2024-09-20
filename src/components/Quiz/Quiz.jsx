// Quiz.jsx
import React, { useState } from 'react';
import * as Q from './QuizStyle'; // Import the styled components

const Quiz = () => {
  const questions = [
    { question: 'The sky is blue.', correctAnswer: 'O', explanation: 'The sky appears blue due to Rayleigh scattering.' },
    { question: 'The Earth is flat.', correctAnswer: 'X', explanation: 'The Earth is an oblate spheroid, not flat.' },
    { question: 'The sun rises in the west.', correctAnswer: 'X', explanation: 'The sun rises in the east.' },
    { question: 'Humans can breathe underwater without equipment.', correctAnswer: 'X', explanation: 'Humans need equipment like scuba gear to breathe underwater.' },
    { question: 'There are seven days in a week.', correctAnswer: 'O', explanation: 'There are seven days: Monday through Sunday.' }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [popupExplanation, setPopupExplanation] = useState('');
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setPopupContent('정답입니다!');
      setPopupExplanation('');
    } else {
      setPopupContent('오답입니다!');
      setPopupExplanation(currentQuestion.explanation);
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizComplete(true);
      }
    }, 2000); // Popup disappears after 2 seconds
  };

  return (
    <Q.QuizContainer>
      {quizComplete ? (
        <Q.FinalScoreContainer>
          <h2>퀴즈 완료!</h2>
          <p>총 {questions.length}문제 중 {score}문제 맞추셨습니다.</p>
        </Q.FinalScoreContainer>
      ) : (
        <>
          <h1>OX 퀴즈</h1>
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

export default Quiz;
