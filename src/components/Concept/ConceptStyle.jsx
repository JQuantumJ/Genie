import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 150vh;
    max-height: 150vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
    @media(max-width: 600px){
      height: 110vh;
      max-height: 110vh; 
    }
`

export const Wrapper2 = styled.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
    @media(max-width: 600px){
      height: 250vh;
      max-height: 250vh; 
    }
`

export const CatWrapper = styled.div`
  max-width: 100%;
  margin-top: 10%;
  border-radius: 0.7vw;
  position: relative;
  margin-bottom: 30%;
   p{
    font-size: 2rem;
    margin-top: 2%;
   }
   h1{
    margin-left: 5%;
    font-size: 2.2rem;
      @media(max-width: 900px){
        margin-top: 15%;
        font-size: 1.9rem;
      }
      @media(max-width: 900px){
        margin-top: 18%;
      }
   }
`

export const ConceptWrapper = styled.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;


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

  .accordion-item {
    border: 1px solid #007bff;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #333;
  }

  .accordion-title {
    padding-top: 2%;
    padding-bottom: 1.5%;
    letter-spacing: 2px;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    font-size: 2rem;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #007bff;
    @media (max-width: 900px) {
      padding-top: 3.5%;
      padding-bottom: 2.3%;
      padding-left: 4.5%;
      padding-right: 4.5%;
    }
      
  }

  .accordion-title.active {
    background-color: #004085;
  }

  .accordion-title span:last-child {
    font-size: 1rem;
  }

  .accordion-content {
    padding: 3%;
    background-color: #444;
    letter-spacing: 1.4px;
    color: #eee;
    font-size: 1.5rem;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    h1{
      fontSize: 1.7rem;
       @media (max-width: 900px) {
          font-size: 1.2rem;
       }
    }
    p{
       @media (max-width: 900px) {
          font-size: 1rem;
       }
    }
    a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 5%;
    }
      @media (max-width: 900px) {
        padding: 5%;
      }
  }
  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 3%;
    font-size: 1.2rem;
    line-height: 1.7;
    a{
      color: #007bff;
      font-size: 1.6rem;
      padding-left: 40%;
    }
  }
  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;
    font-size: 1rem;
  }
`;


