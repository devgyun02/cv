module.exports = {
  name: '정민균',
  title: 'AI & Software Engineer',
  facts: {
    'Residence': 'South Korea',
    'Email': 'devgyun@gmail.com',
    'Birth': '2002. 01. 10'
  },
  skills: [
    ['Kotlin'],
    ['Jetpack Compose'],
    ['Node.js'],
    ['Express.js'],
    ['MySQL'],
    ['Python'],
    ['PyTorch'],
    ['C++'],
    ['JavaScript'],
    ['TypeScript'],
    ['OpenCV'],
    ['XGBoost'],
    ['Streamlit']
  ],
  positions: [
    {
      title: 'CareConnect (맞벌이 부부 및 지역 사회 돌봄 자원 실시간 매칭 안드로이드 & AI 백엔드 플랫폼)',
      period: '2026',
      skills: ['Kotlin', 'Jetpack Compose', 'Node.js', 'Express.js', 'MySQL', 'Gemini 2.5 Flash'],
      contents: `
- **비전 및 문제 해결:** 퇴근 지연 등 부모의 위기 상황 시 실시간 지도 매칭 및 '긴급 공지' 기능 제안
- **AI 태그 추출:** Google Gemini 2.5 Flash 연동으로 빠른 검색용 핵심 키워드/태그 자동 추출
- **부모/구직자 매칭:** 구인 공고/프로필 CRUD, 조건 명시, 지도 기반 탐지 및 즉시 전화 연결(ACTION_DIAL)
- **안드로이드 클라이언트:** Kotlin 기반 Jetpack Compose, Material 3, ViewModel, Coroutines 비동기 상태 관리
- **네트워크 & 백엔드:** Retrofit2/OkHttp3 JWT 인터셉터, Google Maps SDK, Node.js/Express, MySQL Connection Pool 및 InnoDB 외래키 적용
`
    },
    {
      title: 'AIS (AI-based Industrial Security - 산업 인프라 실시간 위협 탐지 및 이상 탐지 파이프라인)',
      period: '2026',
      skills: ['Python', 'PyTorch', 'Streamlit', 'XGBoost', 'Plotly', 'CIC-IDS2018'],
      contents: `
- Recurrent Autoencoder (LSTM/GRU) 기반 5-Timestep 시계열 컨텍스트 비지도 이상 탐지 모델 구현
- XGBoost 기반 다중 위협 분류 파이프라인 및 Streamlit 인터랙티브 실시간 관제 UI 구축
- Z-score 슬라이더 기반 동적 임계값 조정 및 스마트 방화벽 ACL 자동 배포 시뮬레이션 기능
- AUC-ROC, PR-AUC, Confusion Matrix 등 학술 표준 지표 기반 성능 검증 리포트 구성
`
    },
    {
      title: 'uniOn (AI 기반 학내 소모임 추천 매칭 플랫폼 - 팀 프로젝트)',
      period: '2026',
      skills: ['Node.js', 'Express.js', 'Gemini 3.1 Flash Lite', 'Algorithm Design'],
      contents: `
- **역할 및 팀 정보:** 백엔드 & AI 알고리즘 개발 전담 (Team 공백 / 경상국립대학교 GNU PBL II)
- **Gemini 3.1 Flash Lite 기반 AI 키워드 추출 파이프라인:** 저비용·저지연 LLM을 연동하여 자유 텍스트 형태의 자기소개서에서 관심사/취미/성향 키워드(5~10개) 추출 프롬프트 엔지니어링 및 JSON 응답 구조화 파싱 개발
- **Cosine + Jaccard 하이브리드 추천 엔진 설계:**
  - Cosine Similarity: 유저 벡터와 모임 회원 평균 벡터 간 방향성 비교를 통해 특정 회원의 과도한 활동량으로 인한 추천 편향 및 데이터 왜곡 방지
  - Jaccard Similarity: 유저-모임 태그 집합 간 중첩 비율을 계산하여 선호도 정밀 반영
  - 두 유사도를 결합한 Final Score 추천 수식 구현 및 정확도 검증 완료
`
    }
  ],
  experience: [
    {
      header: 'Professional Experience (경력)',
      skills: ['TypeScript', 'JavaScript', 'HTML/CSS', 'Software Assistance'],
      contents: `
**더하지** | 개발 보조 (아르바이트)
*2025. 03. 12 ~ 재직 중*
- 실무 주력 언어인 TypeScript 기반 웹 UI/컴포넌트 개발 환경 학습 및 화면 구현 보조 (TypeScript 68.2%, HTML 27%, CSS 1.9%)
- JavaScript 기반 스크립트 작성 및 로직 수정을 통해 기존 시스템 모듈의 유지보수 및 개발 업무 지원 (JavaScript 99.2%)
`
    },
    {
      header: 'Education (학력)',
      skills: ['Computer Science', 'AI Electronics'],
      contents: `
- **경상국립대학교** | 컴퓨터공학부 학사과정 (2027년 졸업 예정)
- **한국폴리텍VII대학 창원캠퍼스** | 하이테크과정 AI융합전자과 (2024 이수)
`
    },
    {
      header: 'Awards (수상 경력)',
      skills: ['KIICE', 'Best Paper Award'],
      contents: `
- **우수논문상** | 사단법인 한국정보통신학회 (KIICE) (2024. 10. 25)
  - *성격 기반 지능형 모임 추천시스템* (2024년 추계종합학술대회 우수논문 선정 제 24-111호)
`
    }
  ]
};