import styled from 'styled-components';

export const ConceptWrapper = styled.div`
  padding: 20px;
  margin-top: 10%;
  max-width: 80%;
  margin-left: 10%;

  h1 {
    text-align: left;
    color: #000;
    font-size: 2.2vw;
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
    font-size: 1.5vw;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #007bff;
  }

  .accordion-title.active {
    background-color: #004085;
  }

  .accordion-title span:last-child {
    font-size: 1rem;
  }

  .accordion-content {
    padding: 2vw;
    background-color: #444;
    letter-spacing: 1.4px;
    color: #fff;
    font-size: 1.1vw;
    line-height: 1.8;
    border-top: 1px solid #007bff;
  }
`;

