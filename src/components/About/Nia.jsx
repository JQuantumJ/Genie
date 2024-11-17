import React from 'react';
import { useNavigate } from 'react-router-dom';
import NIA from '/src/assets/icon/About/nia.svg';
import KQIC from '/src/assets/icon/About/kqic.svg';
import Logo from '/src/assets/icon/About/logo.svg';
import * as A from './AboutStyle';

const Nia = () => {
  const navigate = useNavigate();

  return (
    <A.Feat>
      <A.DocsContainer>
        <A.DocsHeader>
          <A.DocsHeaderContent>
            <A.DocsLogo src={Logo} alt="CS Logo" />
            <div>
              <A.TitleH1>양자 인턴십 소개</A.TitleH1>
              <A.DescriptionP>
                양자 인턴십 3기
              </A.DescriptionP>
            </div>
          </A.DocsHeaderContent>
        </A.DocsHeader>
        <A.MobileMedia>
          <A.DescriptionP>
          국내 양자기술 관련 기업의 인턴 수요 조사를 통해 국내 대학과 연계 매칭으로 신진 유입인력 확보하기 위한 목적.
          </A.DescriptionP>
        </A.MobileMedia>

        <A.GettingStarted>
          <A.HeadingH2>KQIC 양자기술 인력양성 프로그램</A.HeadingH2>
          <A.DescriptionP>
            미래 양자인재 양성을 위한 인턴십<br/>
            ICT 전공 대학(원)생 대상으로 국내 기업 연계 인턴십 프로그램 운영
          </A.DescriptionP>
        </A.GettingStarted>

        <A.ProductSection>
          <A.HeadingH2>기관 소개</A.HeadingH2>
          <A.ProductGrid>
            <A.ProductCard onClick={()=>navigate('/kqic')}>
              <h3>KQIC</h3>
              <img src={KQIC} alt="Operating Systems" />
              <p>kqic.</p>
            </A.ProductCard>
            <A.ProductCard onClick={()=>navigate('/nia')}>
              <h3>NIA</h3>
              <img src={NIA} alt="Operating Systems" />
              <p>nia.</p>
            </A.ProductCard>
            {/* Add other ProductCard components similarly */}
          </A.ProductGrid>
        </A.ProductSection>
      </A.DocsContainer>
    </A.Feat>
  );
};

export default Nia;