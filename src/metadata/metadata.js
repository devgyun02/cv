module.exports = {
  name: '정민균',
  title: 'AI & Software Engineer',
  facts: {
    'Residence': 'South Korea',
    'Email': 'devgyun@gmail.com',
    'Birth': '2002. 01. 10'
  },
  education: [
    {
      institution: '경상국립대학교',
      major: '학사과정 컴퓨터공학부',
      status: '졸업예정',
      period: '2027 졸업 예정'
    },
    {
      institution: '한국폴리텍VII대학 창원캠퍼스',
      program: '하이테크과정 (비학위과정) AI융합전자과',
      status: '이수',
      period: '2024'
    }
  ],
  awards: [
    {
      title: '우수논문상',
      organization: '사단법인 한국정보통신학회 (KIICE)',
      paperTitle: '성격 기반 지능형 모임 추천시스템',
      authors: '문창배, 최승훈, 정민균, 최동혁, 허태우, 조보람 (한국폴리텍VII대학 창원캠퍼스)',
      date: '2024년 10월 25일',
      details: '2024년 추계종합학술대회 우수논문 선정 (제 24-111호)'
    }
  ],
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
  experience: [
    {
      company: '더하지',
      role: '소프트웨어 개발자 (코드: 133)',
      period: '2025. 03. 12 ~ 재직 중',
      contents: `소프트웨어 개발자로서 AI/SW 솔루션 및 시스템 개발 업무 수행.`
    }
  ],
  projects: [
    {
      title: 'CareConnect',
      category: '맞벌이 부부 및 지역 사회 돌봄 자원 실시간 매칭 안드로이드 & AI 백엔드 플랫폼',
      period: '2026',
      contents: `
- [비전 및 문제 해결] 퇴근 지연 등 부모의 갑작스러운 위기 상황 시 까다로운 예약 방식 문제 해결을 위해 실시간 지도 매칭 및 '긴급 공지' 기능 제안
- [AI 태그 추출] Google Gemini 2.5 Flash 모델을 연동하여 공지글 작성 시 빠른 검색과 접근성을 높이는 핵심 키워드/태그 자동 추출 기능 구현
- [부모/구직자 매칭 기능] 돌봄 구인 공고/구직 프로필 CRUD, 활동 지역·시간·시급 조건 명시, 지도 기반 탐지 및 즉시 전화 연결(ACTION_DIAL) 연동
- [안드로이드 클라이언트] Kotlin 기반 Jetpack Compose 선언형 UI, Material 3, ViewModel, Coroutines를 활용한 비동기 상태 관리 및 인터페이스 구현
- [네트워크 & 위치 서비스] Retrofit2/OkHttp3 기반 JWT 인터셉터 구현, Google Maps SDK 및 Geocoder를 활용한 주소-좌표 변환 및 지도 마커 표시
- [백엔드 & DB 아키텍처] Node.js/Express RESTful API 서버 구축, MySQL Connection Pool 및 InnoDB 외래키 기반 데이터 무결성 보장
`
    },
    {
      title: 'AIS (AI-based Industrial Security)',
      category: '산업 인프라 실시간 위협 탐지 및 이상 탐지 파이프라인 시스템',
      period: '2026',
      contents: `
- Recurrent Autoencoder (LSTM/GRU) 기반 5-Timestep 시계열 컨텍스트 비지도 이상 탐지 모델 구현
- XGBoost 기반 다중 위협 분류 파이프라인 및 Streamlit 인터랙티브 실시간 관제 UI 구축
- Z-score 슬라이더 기반 동적 임계값 조정 및 스마트 방화벽 ACL 자동 배포 시뮬레이션 기능 제공
- AUC-ROC, PR-AUC, Confusion Matrix 등 학술 표준 지표 기반 종합 성능 검증 리포트 구성
`
    }
  ]
};