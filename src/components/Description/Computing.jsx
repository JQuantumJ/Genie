import React from 'react';
import * as D from './DescriptionStyle'; 
import Back from '/src/assets/icon/back.svg';


const Computing = () => {
    return (
        <D.Wrapper2>
        <D.ImageWrap>
            <a href="/description"><img src={Back} alt="Back to main" /></a>
        </D.ImageWrap>
        <D.ComputeWrapper>
        <h1>양자 컴퓨팅과 계산 복잡도 이론</h1>
        <hr />
        </D.ComputeWrapper>
        </D.Wrapper2>
    );
};

export default Computing;
