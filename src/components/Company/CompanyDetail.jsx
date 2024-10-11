import React from 'react';
import { useParams } from 'react-router-dom';
import * as C from './CompanyStyle';
import idq from '/src/assets/image/Company/idq.svg';
import ibm from '/src/assets/image/Company/ibm.svg';
import dwave from '/src/assets/image/Company/dwave.svg';
import banner from '/src/assets/image/Company/banner.svg';
import rigetti from '/src/assets/image/Company/rigetti.svg';
import honeywell from '/src/assets/image/Company/honeywell.svg';
import google from '/src/assets/image/Company/google.svg';
import microsoft from '/src/assets/image/Company/microsoft.svg';
import jininfra from '/src/assets/image/Company/jininfra.svg';
import intel from '/src/assets/image/Company/intel.svg';
import alibaba from '/src/assets/image/Company/alibaba.svg';

const companyDetails = {
  ibm: {
    title: 'IBM',
    description: 'IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.', 
    imgSrc: ibm,
  },
  dwave: {
    title: 'D-Wave',
    description: 'D-Wave는 양자 어닐링(annealing) 기반 시스템을 제공하며, 최적화 문제 해결에 특화된 양자 컴퓨터를 개발합니다.',
    imgSrc: dwave,
  },
  rigetti: {
    title: 'Rigetti Computing',
    description: 'Rigetti Computing은 양자 회로 기반 시스템을 개발하며, 하이브리드 양자-클래식 컴퓨팅을 통해 양자 컴퓨팅을 상용화하려고 합니다.',
    imgSrc: rigetti,
  },
  honeywell: {
    title: 'Honeywell',
    description: 'Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.',
    imgSrc: honeywell,
  },
  google: {
    title: 'Google',
    description: 'Google Quantum AI는 시너지 효과를 노리며, 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 연구 중입니다.',
    imgSrc: honeywell,
  },
  microsoft: {
    title: 'Microsoft',
    description: 'Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.',
    imgSrc: microsoft,
  },
  intel: {
    title: 'Intel',
    description: 'Intel은 양자 컴퓨팅 하드웨어와 소프트웨어 생태계를 구축하고 있으며, 상용화 가능한 양자 프로세서를 개발 중입니다.',
    imgSrc: intel,
  },
  alibaba: {
    title: 'Alibaba',
    description: 'Alibaba는 클라우드 기반의 양자 컴퓨팅 서비스를 제공하며, 양자 암호화 및 인공지능 연구에 집중하고 있습니다.',
    imgSrc: alibaba,
  },
  jininfra: {
    title: 'JinInfra', 
    description: 'JinInfra는 양자 네트워크 인프라와 보안 솔루션을 개발하여 양자 통신 기술 상용화에 주력하고 있습니다.',
    imgSrc: jininfra,
  },
};

const CompanyDetail = () => {
  const { companyName } = useParams();
  const company = companyDetails[companyName.toLowerCase()]; 

  if (!company) {
    return <p>존재하지 않는 기업입니다.</p>;
  }

  return (
    <C.Container>
      <C.Header>
        <C.Title>{company.title}</C.Title>
      </C.Header>
      <C.ArticleCard>
        <C.ArticleContent>
          <C.ArticleTitle>{company.title}</C.ArticleTitle>
          <C.ArticleDescription>{company.description}</C.ArticleDescription>
        </C.ArticleContent>
      </C.ArticleCard>
    </C.Container>
  );
};

export default CompanyDetail;
