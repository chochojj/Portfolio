export type Project = {
    id: string;
    title: string;
    date: string;
    term: string;
    content: string;
    role: string[];
    skill: string[];
    review: string;
    link: string;
    git: string;
  };

const projectData: Project[] = [
  {
    id: "portfolio",
    title: "포트폴리오",
    date: "2025.3",
    term: "3 일",
    content:
      "반응형 웹으로 제작되었으며 useEffect와 timeout을 이용하여 간단한 타이밍 애니메이션을 적용해 동적인 효과를 주었습니다. 프로젝트 리스트를 통해 간단한 프로젝트 이력을 확인할 수 있고 팝업 모달으로 상세 프로젝트 내역을 확인할 수 있습니다 또한, 프로젝트 데이터를 별도의 객체로 관리하고 grid 레이아웃을 활용하여 추후 작업물이 추가되어도 CSS를 크게 수정하지 않아도 되는 장점이 있습니다. 이를 통해 유연하게 프로젝트를 관리할 수 있습니다.",
    role: ["반응형 웹", "타이핑 애니메이션", "프로젝트 상세보기"],
    skill: [
      "React",
      "Nextjs",
      "TypeScript",
      "tailwindcss"
    ],
    review:
      "2023.05 제작된 기존 포트폴리오에 실무에서 사용하는 기술을 담아 새롭게 작성한 프로젝트 입니다. React로 작성하고 styled-component로 스타일링 한 과거 프로젝트에 Nextjs를 더하고 스타일링 방식을 tailwindcss로 변경하여 새롭게 만들었습니다. 이전 포트폴리오 프로젝트가 제 자신을 표현하고 새로운 도전을 기록하는 소중한 기회였다면 이번 포트폴리오는 과거의 작업을 돌아보고 좀 더 발전한 자신을 느낄 수 있는 좋은 경험이였습니다",
    link: "https://hyejj-portfolio.vercel.app/",
    git: "https://github.com/chochojj/Portfolio",
  },
  {
    id: "popomon",
    title: "포포몬",
    date: "2023.9 - 2025.4",
    term: "1 년 7 개월",
    content:
      "광고주와 인플루언서를 연결하는 매칭 시스템 플랫폼으로, 업체 홍보가 필요한 광고주들에게 광고 인플루언서를 손쉽게 찾을 수 있도록 도와주는 서비스를 제공합니다. 전반적인 서비스를 확인하고 유저 정보를 손쉽게 관리할 수 있는 메인페이지, 원하는 사람을 모집하기 위한 공고 등록 기능, 다중 필터와 무한스크롤로 쉽게 회원을 찾을 수 있는 탐색 기능, 유저 간 약속 잡기 후 일정 공유를 위한 채팅 기능 등 다양한 서비스를 제공하고 있습니다.",
    role: ['프론트엔드 신규 개발', '화면 유지 보수','신규 기술 전환','공통 컴포넌트 설계',''],
    skill: [
      "React",
      "Nextjs",
      "TypeScript",
      "tailwindcss",
      'PHP',
        'AWS',
        'GIT'
    ],
    review:
      "실시간으로 서비스 되는 플랫폼의 프론트엔드 개발자 역할을 수행하며 다양한 서비스 장애 대응 경험을 쌓을 수 있었습니다. php에서 nextjs로 프론트엔드 부분의 기술 전환을 수행하며 웹 접근성 및 최적화를 수행하여 유저들의 사용성을 개선한 경험이 있으며, 여러 해상도에 대응하는 반응형 웹을 구현하였습니다. 실제 유저의 다양한 피드백이 들어오는 만큼 잦은 변경사항이 있는 상황이 많았는데 이러한 경험을 통해 기술적으로 많이 성장할 수 있었습니다",
    link: "https://popomon.com/",
    git: null,
  },
  {
    id: "soomo",
    title: "SOOMO",
    date: "2023.5",
    term: "4 주",
    content:
      "<SOOMO>는 수영 이모저모를 줄인말로, 수영인들을 위한 매일 수영 기록을 관리하기 위한 플랫폼입니다. \n캘린더에 기록한 매일 운동 기록과 한달 운동기록을 게시판에서 자동으로 받아와 쉽게 공유할 수 있으며, 게시판 조회 방식은 리스트와 대시보드 형식으로 제공되어 상황에 맞게 게시글을 탐색할 수 있습니다. ",
    role: [
      "반응형 웹",
      "게시판 및 댓글 crud",
      "페이지네이션",
      "무한스크롤",
      "이미지 업로드 기능",
      "게시판 정렬",
    ],
    skill: [
      "React",
      "JavaScript",
      "Styled-Component",
      "Axios",
      "Redux-toolkit",
      "AWS S3",
    ],
    review:
      "백엔드와 함께 의견을 조율하고 RestAPI를 설계하여 문서화하였으며, 프로젝트를 통해 협업의 중요성과 팀원들과의 원활한 의사소통의 필요성을 깨달았습니다. 프로젝트 진행 중에 발생한 문제들을 팀원들과 함께 해결하고, 서로의 아이디어를 공유하며 프로젝트를 발전시킬 수 있었습니다. 또한, 사용자들의 피드백을 수렴하고 반영하는 과정에서 지속적인 개선과 성장을 이룰 수 있었습니다. \n이번 프로젝트를 통해 협업 능력과 문제 해결 능력을 향상시키는 데 많은 도움이 되었고, 앞으로의 프로젝트에서도 이러한 경험을 적극적으로 활용하고자 합니다.",
    link: "http://soo-mo.s3-website.ap-northeast-2.amazonaws.com/",
    git: "https://github.com/chochojj/SOOMO",
  },
  {
    id: "todolist",
    title: "나만의 기록장",
    date: "2023.3",
    term: "2 주",
    content:
      "초기에는 간단한 할일 목록을 관리하는 기능만을 가졌으나, 페이지 이동과 사용자들이 간단한 일기를 작성할 수 있는 기능 등을 추가하여 프로젝트를 확장하였습니다. 로그인 없이 영구적으로 데이터를 보관하기 위해 로컬스토리지를 이용하였고, useRef를 활용하여 목록을 쉽게 수정할 수 있습니다. 할일의 완료 여부를 체크하여 진행 상황을 시각적으로 확인할 수 있고, 실시간으로 남은 할일의 개수를 표시하여 사용자 경험을 향상시켰습니다.",
    role: ["Todo CRUD", "간단한 일기 CRUD", "페이지 이동"],
    skill: ["React", "Styled-Component", "JavaScript"],
    review:
      "피그마와 프론트엔드 기술을 활용하여 디자인과 개발을 조합하고 기능을 확장하는 경험을 할 수 있었던 프로젝트 입니다. 아쉬웠던 점은 react-calendar 라이브러리를 적극적으로 활용하지 못한 것이었으며, 이후 리팩토링을 통해 작성일자를 전역 상태로 관리하여 달력에 연동하는 계획이 있습니다.",
    link: "https://chochojj.github.io/todolist/",
    git: "https://github.com/chochojj/todolist",
  },
];

export default projectData;