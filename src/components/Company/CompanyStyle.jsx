import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`;

export const ConceptWrapper = styled.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
  p{
    font-size: 2rem;
    margin-top: 2%;
   }

  h1 {
    text-align: left;
    color: #000;
    font-size: 2.8rem;
  }

  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
  }

  
  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 2%;
    font-size: 1.2rem;
    line-height: 1.7;
  }

  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;
  
    
     a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 40%;
  }
`;
