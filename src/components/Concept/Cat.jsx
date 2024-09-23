// Cat.jsx
import React, { useState } from 'react';
import Catimg from '/src/assets/image/Concept/cat.svg';
import Cat2img from '/src/assets/image/Concept/cat2.svg';
import bunker from '/src/assets/image/Concept/bunker.svg';
import bottle1 from '/src/assets/image/Concept/bottle1.svg';
import bottle2 from '/src/assets/image/Concept/bottle2.svg';
import * as C from './ConceptStyle';
const Cat = () => {
    return(
    <>
        <C.Wrapper >
        <C.ConceptWrapper>
        <h1>슈뢰딩거의 고양이</h1>
            <img src={bunker} />
            <img src={bottle1} />
            <img src={Catimg} />

            <img src={bottle1} />
            <img src={bottle2} />

            <img src={Catimg} />
            <img src={Cat2img} />
        </C.ConceptWrapper>
        </C.Wrapper>
    </>
    );
};
  

export default Cat;
