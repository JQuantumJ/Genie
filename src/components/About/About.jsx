import React from 'react';
import { useNavigate } from 'react-router-dom';
import NIA from '/src/assets/icon/About/nia.svg';
import KQIC from '/src/assets/icon/About/kqic.svg';
import Logo from '/src/assets/icon/About/logo.svg';
import * as A from './AboutStyle';

const About = () => {
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
                <h3>양자 인턴십 3기</h3>
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
              <p>KQIC는 한국의 주요 양자 정보 기술 연구 및 개발을 담당하는 기관입니다. 이 센터는 양자 컴퓨팅, 양자 암호, 양자 통신 등 다양한 양자 기술 분야에서의 연구와 개발을 촉진하며, 국가적인 양자 정보 과학 기술의 진보를 지원합니다. 양자 기술의 상용화 및 기술 전수를 위한 플랫폼 역할을 하면서 산학연 네트워크를 구축하고 있습니다.</p>
            </A.ProductCard>
            <A.ProductCard onClick={()=>navigate('/nia')}>
              <h3>NIA</h3>
              <img src={NIA} alt="Operating Systems" />
              <p>NIA는 대한민국의 정보화를 총괄하는 정부 기관입니다. 이 기관은 정보화 정책의 수립 및 실행, 정보통신 기술(ICT)의 연구 개발을 지원하고, 디지털 격차 해소 및 정보 접근성 향상을 목표로 활동합니다. 또한, 국민의 정보화 역량 강화 및 디지털 전환을 위한 다양한 프로그램과 서비스를 제공하고 있습니다.</p>
            </A.ProductCard>
          </A.ProductGrid>
        </A.ProductSection>
      </A.DocsContainer>
    </A.Feat>
  );
};

export default About;