import ImgDev from '../images/careersDevelopment.png';
import ImgMar from '../images/careersMarketing.png';
import ImgPlan from '../images/careersPlanning.png';


const careers = [
  {
    id: 'development',
    type: 'CAREERS',
    date: '2020.08.03',
    title: '개발자 채용',
    image: ImgDev,
    contents: [
      {
        type: 'subTitle',
        desc: `채용직무(신입/경력)`,
      },
      {
        type: 'normal',
        desc: `Machine Learning Researcher`,
      },
      {
        type: 'normal',
        desc: `Machine Learning Engineer`,
      },
      {
        type: 'normal',
        desc: `Software Engineer-ML`,
      },
      {
        type: 'normal',
        desc: `Software Engineer`,
      },
      {
        type: 'subTitle',
        desc: `우대사항`,
      },
      {
        type: 'normal',
        desc: `Kubernetes 사용경험`,
      },
      {
        type: 'normal',
        desc: `Frontend 서비스 경험`,
      },
      {
        type: 'normal',
        desc: `Deep learning / machine learning 논문 작성 경험`,
      },
      {
        type: 'normal',
        desc: `Deep learning 모델 서비스 개발 경험 (시스템 구성, 연산 최적화, 모델 경량화 등)`,
      },
      {
        type: 'subTitle',
        desc: `기타사항`,
      },
      {
        type: 'normal',
        desc: `직무 선정시에는 직원 본인의 의향을 최우선적으로 고려합니다. 그렇지만 각각의 직무에서 필요한 기술 스택과 이에 따른 자격요건을 만족하지 못 할 경우에는 해당직무 수행을 보장하지 않습니다.`,
      },
      {
        type: 'normal',
        desc: `2년마다 직무 변경의 기회가 제공되며, 직무변경 심사 시 자격요건을 만족하면 직무전환이 가능합니다.`,
      },
      {
        type: 'normal',
        desc: `신입채용의 경우에는 마지막 페이지에 설명되어 있는 인턴쉽 프로그램 이수 필수. (인턴쉽 프로그램 수행중에도 정규직으로 급여 100% 지급)`,
      },
    ]
  },
  {
    id: 'planning',
    type: 'CAREERS',
    date: '2020.08.03',
    title: '기획/PM(신입/경력) 채용',
    image: ImgPlan,
    contents: [
      {
        type: 'subTitle',
        desc: `역할`,
      },
      {
        type: 'normal',
        desc: `인공지능 분야는 전문인력의 부족으로 인해서 기술에 대한 이해가 없이 기획 및
        컨설팅이 이루어지는 경우가 다수 있습니다. 다양한 R&D 경험을 통해서 인공지능
        기술에 대한 폭넓은 이해에 기반한 기획 및 과제 관리를 수행하는 것을 목표로 합니다.`,
      },
      {
        type: 'subTitle',
        desc: `담당업무`,
      },
      {
        type: 'normal',
        desc: `인공지능 관련 정부 R&D 과제 기획 및 일정관리`,
      },
      {
        type: 'normal',
        desc: `기업체 R&D 과제 일정관리`,
      },
      {
        type: 'normal',
        desc: `인공지능 솔루션 기획 및 컨설팅`,
      },
      {
        type: 'subTitle',
        desc: `우대사항`,
      },
      {
        type: 'normal',
        desc: `정부 R&D 과제 수행 경험자`,
      },
      {
        type: 'normal',
        desc: `석사/박사 학위 소지자`,
      },
      {
        type: 'normal',
        desc: `인공지능 관련 직무 경험자`,
      },
    ]
  },
  {
    id: 'marketing',
    type: 'CAREERS',
    date: '2020.08.03',
    title: '마케팅(신입/경력) 채용',
    image: ImgMar,
    contents: [
      {
        type: 'subTitle',
        desc: `역할`,
      },
      {
        type: 'normal',
        desc: `현재 마케팅의 목표는 브랜딩을 통한 방향성 정립과 신뢰도 확보입니다. 이를 통해서 인재 확보 및
        고객사를 확보하고 내부 구성원들의 결속을 목표로 합니다.`,
      },
      {
        type: 'subTitle',
        desc: `담당업무`,
      },
      {
        type: 'normal',
        desc: `콘텐츠 기획 및 운영관리`,
      },
      {
        type: 'normal',
        desc: `사내 인공지능 관련 기술 컨텐츠로 기술 블로그 운영`,
      },
      {
        type: 'normal',
        desc: `홈페이지 기획 및 운영`,
      },
      {
        type: 'normal',
        desc: `기타 온라인 홍보방안 기획 및 수행`,
      },
      {
        type: 'normal',
        desc: `내부 브랜딩을 위한 전략기획 및 수행`,
      },
      {
        type: 'subTitle',
        desc: `우대사항`,
      },
      {
        type: 'normal',
        desc: `스타트업 마케팅 직무 경험이 있으신 분`,
      },
      {
        type: 'normal',
        desc: `인공지능 기술에 대한 이해도가 높으신 분`,
      },
      {
        type: 'normal',
        desc: `콘텐츠 편집이 가능하신 분`,
      },
    ]
  },
]

export default careers;