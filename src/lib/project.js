import ImgProject1 from '../images/project1.jpg';
import ImgProject2 from '../images/project2.jpg';
import ImgProject3 from '../images/project3.jpg';

import carModelCla from '../images/carModelCla.png';

import robotAutoDri1 from '../images/robotAutoDri1.jpg';
import robotAutoDri2 from '../images/robotAutoDri2.png';
import robotAutoDri3 from '../images/robotAutoDri3.png';
import robotAutoDri4 from '../images/robotAutoDri4.png';

import humanCareRobot1 from '../images/humanCareRobot1.png';
import humanCareRobot2 from '../images/humanCareRobot2.png';


const project = [
  {
    id: 'car-model-classification',
    url: '/project/content/car-model-classification',
    type: 'PROJECT',
    title: '고효율/고성능 자동차 모델 분류 엔진 개발',
    titleS: '자동차 모델 분류',
    subTitle: 'Project A detail',
    image: ImgProject2,
    contents_overview: [
      {
        type: 'textNormal',
        desc: `"시각데이터의 인식 및 분류기술" 개발 목적은 고객의 문제에 특화된 맞춤형 인식 및 분류 기술 개발하는데 있습니다. 영상에 담긴 객체, 장면, 사건 등을 인식하고 분류하는 강력한 인공지능 엔진을 제공하고자 합니다. 구체적인 분야는 수요가 많은 것을 우선으로 개발하고 있습니다. 첫번째 사례로 자동차 모델을 구분하는 인공지능 엔진을 개발하였습니다.`
      },
      {
        type: 'textNormal',
        desc: `사용 목적에 따라 두 가지 종류의 엔진을 개발하였고 더 발전시켜 가고 있습니다. 현장에서 스마트 폰으로 바로 촬영하여 사용할 수 있는 "Mobile On-Device AI 자동차 구분 엔진"과 "관리 시스템용 고성능 AI 자동차 구분 엔진"입니다. `
      },
      {
        type: 'subTitle',
        desc: `Mobile On-Device AI(Light, 35MB) 자동차 430종 분류 88%`
      },
      {
        type: 'subTitle',
        desc: `관리 시스템용 고성능 AI 자동차 430종 분류 96%`
      },
      {
        type: 'image',
        src: carModelCla
      },
    ]
  },
  {
    id: 'robot-indoor-autodrive',
    url: '/project/content/robot-indoor-autodrive',
    type: 'PROJECT',
    title: '로봇 상황 판단 및 실내 자율 주행 인공지능',
    titleS: '로봇 실내 자율 주행',
    subTitle: 'Project A detail',
    image: ImgProject3,
    contents_overview: [
      {
        type: 'textNormal',
        desc: `로봇의 상황 판단과 실내 자율 주행 기술 개발`
      },
      {
        type: 'textNormal',
        desc: `로봇의 상황 판단과 실내 자율 주행 기술을 개발하고 있습니다. 그 중 하나의 프로젝트 사례는 일본 소프트뱅크 사에서 만든 로봇 'Pepper'를 이용하여 매장내 진열대에 있는 고객에게 접근하고, 대화하여 고객이 요청하는 상품정보 및 위치를 안내하고 상품 쿠폰을 제공하는 것입니다. 이 서비스를 위해 "로봇 위치 추정 및 지도 생성", "딥러닝 기반 고객 탐지", "최적 경로 계산 및 주행 기술", "장애물 인식 및 회피 기술"을 개발 하였습니다.`
      },
      {
        type: 'image',
        src: robotAutoDri1
      },
      {
        type: 'subTitle',
        desc: `매장 내 로봇 위치 추정`
      },
      {
        type: 'textNormal',
        desc: `• SLAM`
      },
      {
        type: 'textNormal',
        desc: `• Waypoint Management`
      },
      {
        type: 'image',
        src: robotAutoDri2
      },
      {
        type: 'subTitle',
        desc: `고객 진입 및 체류 탐지`
      },
      {
        type: 'textNormal',
        desc: `• Deep Learning / ConvNet`
      },
      {
        type: 'textNormal',
        desc: `• Human Recognition`
      },
      {
        type: 'image',
        src: robotAutoDri3
      },
      {
        type: 'subTitle',
        desc: `최적 경로 계산 및 주행`
      },
      {
        type: 'textNormal',
        desc: `• Map-based Navigation`
      },
      {
        type: 'textNormal',
        desc: `• Smart Approach`
      },
      {
        type: 'image',
        src: robotAutoDri4
      },
      {
        type: 'subTitle',
        desc: `장애물 인식 및 회피`
      },
      {
        type: 'textNormal',
        desc: `• Collision Avoidance`
      },
      {
        type: 'textNormal',
        desc: `• Safe Reflexing`
      },
    ]
  },
  {
    id: 'video-human-care-robot',
    url: '/project/content/video-human-care-robot',
    type: 'PROJECT',
    title: '영상 분석 휴먼 케어 로봇 기술 개발',
    titleS: '휴먼 케어 로봇',
    subTitle: 'Project A detail',
    image: ImgProject1,
    contents_overview: [
      {
        type: 'textNormal',
        desc: `사람을 케어하기 위해서는 사람이 느끼는 감정을 같이 느끼고 좋아하는 것을 공감하고 이야기를 나눌 필요가 있습니다. 특히, 혼자 사는 노인 분들에게는 꼭 필요한 인공지능 기술입니다. 본 프로젝트에서는 노인 분들이 많이 보시는 TV 영상을 분석하여 같은 감정을 느끼고 공유하고자 하는 목적으로 개발하였습니다.`
      },
      {
        type: 'textNormal',
        desc: `인물의 정서적 행동을 인식하는 기술을 개발하였습니다. 행동에 나타나는 특징을 포착하여 6종류의 감정상태를 89%의 인식률로 추출하는 기술을 개발하였습니다. 해당 인식 결과를 음성, 얼굴, 언어 표현 등에서 나타나는 정서 정보와 종합하여 사용자가 시청하는 영상에 드러나는 인물의 정서를 파악하고 이를 기반으로 로봇이 사용자와 공감을 표현하는 다양한 액션을 취할 수 있습니다. 또한, 고령자의 정서적 행동 인식에도 적용하여 보호자에게 정보를 전달하는 목적으로도 적용할 수 있습니다.`
      },
      {
        type: 'textNormal',
        desc: `고령자의 선호 컨텐츠 분석을 위한 기반 기술로서 영상의 멀티모달 정보를 취합하여 컨텐츠의 스토리를 학습하는 기술과 이미지 피처 추출 고도화를 위한 convolution 블록을 개발하였습니다.`
      },
      {
        type: 'textNormal',
        desc: `또한, 가족들에게 즐겁고 큰 행사인 결혼식 사진을 이용하여 이야기를 생성하는 기술을 개발하였습니다. 여러 장의 사진에 Stacked Bi-LSTM을 적용하여 BERT 모델 대비 적은 메모리를 이용하여 자연스러운 설명 문장을 생성할 수 있습니다.`
      },
      {
        type: 'image',
        src: humanCareRobot1
      },
      {
        type: 'image',
        src: humanCareRobot2
      },
    ]
  },
]

export default project;