// QuizStyle.jsx
import styled from 'styled-components';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  max-height: 160vh;
  margin-top: -5%;
  margin-bottom: -10%;
  background-color: #eee;
`
  

export const Question = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
    @media (max-width: 700px) {
    margin-left:3%;
    font-size:20px;
    margin-top:-100%;
    padding:10px;
    }
`;

export const AnswerButton = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  margin: 10px;
  border: 2px solid #333;
  background-color: white;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

  &:focus {
    outline: none;
    background-color: #bbb;
  }
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  p {
    font-size: 18px;
    margin: 0;
  }

  small {
    font-size: 14px;
    display: block;
    margin-top: 10px;
    color: #ddd;
  }
     @media (max-width: 700px) {
      width:60%;
      small{
        display:absolute;
        margin-top:20px;
        }
    }
`;
export const Grid2 = styled.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
  @media (max-width: 700px) {
    grid-template-areas: 
      "textWrapper"  
      "leftHalfCircle";  
  }
`
export const FinalScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
    color: #666;
  }
     @media (max-width: 700px) {
      margin-top:-100%;
    }
`;
