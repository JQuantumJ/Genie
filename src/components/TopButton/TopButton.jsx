// TopButton.jsx
import React from 'react';
import Img from '/src/assets/icon/NavFooter/topbtn.svg';
import styled from 'styled-components';

export const Add = styled.img`
  width: 3.5vw;
  height: 3.5vw;
  cursor: pointer;
  position: fixed;
  right: 2vw;
  bottom: 2vw;
  z-index: 100;
`;

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Add onClick={scrollToTop} src={Img} alt="Scroll to top" />
    </>
  );
}

export default TopButton;
