import ImgRND1 from '../images/rnd1.jpg';
import ImgRND2 from '../images/rnd2.jpg';
import ImgRND3 from '../images/rnd3.jpg';

import XAIImage1 from '../images/XAIImage1.png';
import XAIImage2 from '../images/XAIImage2.png';
import XAIImage3 from '../images/XAIImage3.png';


const mainRND = [
  {
    id: 1,
    type: 'R&D',
    url: '/rnd/list/1',
    title: 'Auto DL',
    titleS: 'Auto DL',
    subTitle: 'Auto DL detail',
    image: ImgRND1,
  },
  {
    id: 'explainable-artificial-intelligence',
    type: 'R&D',
    url: '/rnd/content/explainable-artificial-intelligence',
    title: 'XAI (Explainable Artificial Intelligence, 설명가능 인공지능)',
    titleS: 'XAI',
    subTitle: 'Explainable Artificial Intelligence',
    image: ImgRND2,
    contents_overview: [
      {
        type: 'textNormal',
        desc: `설명가능한 AI(XAI)는 인공지능 기술(AI) 적용 시 솔루션 결과를 사람이 이해할 수 있도록 하는 방법과 기법을 말한다. 설계자조차 AI가 왜 특정 결정에 도달했는지 설명하지 못하는 머신러닝(machine learning)의 '블랙박스' 개념과 대비된다.`
      },
    ],
    contents_detail: [
      {
        type: 'imageWithCaption',
        src: XAIImage1
      },
      {
        type: 'imageCaption',
        desc: `그림 1. 설명가능 AI (출처: XAI 튜토리얼, AAAI 2020 학술대회)`
      },
      {
        type: 'textNormal',
        desc: `미래의 고객이 차세대 AI 애플리케이션을 이해하고 신뢰하며 효과적으로 관리하려면 설명 가능한 AI가 필수적이다. 특히 설명 가능한 머신러닝 기술이 뒷받침되어야 한다.`
      },
      {
        type: 'textNormal',
        desc: `• 인공지능 기술이 주요 의사결정 과정에 적용되려면 법적인 요구조건과 제한사항을 충족시키는 이유를 제시할 필요가 있다. 인공지능의 공정성과 투명성 확보가 중요하다.`
      },
      {
        type: 'textNormal',
        desc: `• 인공지능 시스템 사용자는 시스템 작동 결과가 정당함이 보장하고, 필요시 인공지능 시스템의 작동 과정을 검증할 수 있는 정보를 제공받기를 원한다. 의료, 보험, 금융, 마케팅, 물류 등의 분야에서 특히 이러한 요구사항이 강하다.`
      },
      {
        type: 'textNormal',
        desc: `• AI 개발자들 역시 AI 모델의 추적 가능성을 필요로 한다. 개발 중인 인공지능 모델이 설명이 가능하고 해석이 가능한 추가의 특성을 갖고 있다면, 모델 개발자는 모델을 검증하고 디버깅을 잘 할 수 있으며, 대상 문제에 대한 보다 상세하고 새로운 통찰력을 얻을 수 있다.`
      },
    ],
    contents_feature: [
      {
        type: 'subTitle',
        desc: `연구개발 주제`
      },
      {
        type: 'textNormal',
        desc: `• 높은 수준의 학습 성능을 유지하면서 설명 가능성이 보다 큰 모델을 생산할 수 있는 기계 학습 기술 제품군 만들기`
      },
      {
        type: 'textNormal',
        desc: `• 심층 설명: 설명 가능한 특징을 학습하기 위한 심층 학습 기법을 수정 연구`
      },
      {
        type: 'textNormal',
        desc: `• 해석 가능한 모형: 보다 체계적이고 해석 가능한 인과적 모형을 학습하는 기법`
      },
      {
        type: 'textNormal',
        desc: `• 모델 유도: 임의의 블랙박스 모델로부터 설명 가능한 모델을 추론하는 기법`
      },
      {
        type: 'textNormal',
        desc: `• AI 제품의 라이프 사이클에서 "설명 가능한 설계 요소"`
      },
      {
        type: 'imageWithCaption',
        src: XAIImage2
      },
      {
        type: 'imageCaption',
        desc: `그림 2. XAI의 발전 방향`
      },
      {
        type: 'imageWithCaption',
        src: XAIImage3
      },
      {
        type: 'imageCaption',
        desc: `그림 3. 가용성을 보장하기 위한 기계 학습 응용 프로그램의 단계별 워크플로우 작업 예제 (출처: XAI 튜토리얼, AAAI 2020 학술대회)`
      },
    ]
  },
  {
    id: 3,
    type: 'R&D',
    url: '/rnd/list/1',
    title: 'AI Platform',
    titleS: 'AI Platform',
    subTitle: 'AI Platform detail',
    image: ImgRND3,
  },
]

export default mainRND;