import { Project } from "../types/project";

const projectData: Project[] = [
  {
    id: "portfolio",
    title: "포트폴리오",
    date: "2023.7",
    term: "1 주",
    content:
      "반응형 웹으로 제작되었으며, 팀 프로젝트에서 동적인 화면 구현이 부족했던 점이 아쉬움으로 남아 fullpage.js를 활용하여 부드러운 스크롤 효과를 적용했습니다. 또한, intersection ObserverAPI를 사용하여 페이지 내 요소들의 등장 애니메이션을 추가하였습니다. \n 프로젝트 조회 방식은 zustand를 이용하여 전역 상태로 관리 하였습니다. 이를 통해 다양한 방식으로 프로젝트를 조회하고 보여줄 수 있게 되었습니다. 또한, 프로젝트 데이터를 별도의 객체로 관리하여 추후 작업물이 추가되어도 CSS를 크게 수정하지 않아도 되는 장점이 있습니다. 이를 통해 유연하게 프로젝트를 관리할 수 있습니다.",
    role: ["반응형 웹", "애니메이션 효과", "전체/상세보기", "CI/CD"],
    skill: [
      "React",
      "TypeScript",
      "Styled-Component",
      "fullpage.js",
      "zustand",
    ],
    review:
      "새로운 기술에 대한 열정을 보여주기 위해 TypeScript와 Zustand를 학습하고 처음 도입한 프로젝트입니다. 짧은 개발 기간 동안 학습과 병행하여 개발에 대한 효율적인 진행을 고민 하고 계획 수립을 진행했습니다. 이 경험을 통해 개발 역량과 성장에 대한 즐거움을 얻을 수 있었습니다. 포트폴리오 프로젝트는 제 자신을 표현하고 새로운 도전을 기록하는 소중한 기회였습니다.",
    link: "https://hyejj-portfolio.vercel.app/",
    git: "https://github.com/chochojj?tab=repositories",
  },
  {
    id: "soomo",
    title: "SOOMO",
    date: "2023.5",
    term: "4 주",
    content:
      "<SOOMO>는 수영 이모저모를 줄인말로, 수영인들을 위한 매일 수영 기록을 관리하기 위한 플랫폼입니다. 이 플랫폼을 통해 수영인들은 달력에 매일 수영 기록을 입력하고, 게시판에서 달력의 하루 운동 기록을 받아와 공유할 수 있습니다. 특히, 한 달간의 운동 기록을 공유하는 캘린더 자랑 기능을 제공하여 매달 마지막 주에는 꾸준한 운동 기록을 자랑할 수 있습니다. \n운동 기록은 자동으로 받아오는 방식으로 편리하게 기록을 공유할 수 있으며, 게시판 조회 방식은 리스트와 대시보드 형식으로 제공되어 상황에 맞게 게시글을 탐색할 수 있습니다. ",
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
      "백엔드와 함께 의견을 조율하고 restAPI를 설계하여 문서화하였으며, 프로젝트를 통해 협업의 중요성과 팀원들과의 원활한 의사소통의 필요성을 깨달았습니다. 프로젝트 진행 중에 발생한 문제들을 팀원들과 함께 해결하고, 서로의 아이디어를 공유하며 프로젝트를 발전시킬 수 있었습니다. 또한, 사용자들의 피드백을 수렴하고 반영하는 과정에서 지속적인 개선과 성장을 이룰 수 있었습니다. \n이번 프로젝트를 통해 협업 능력과 문제 해결 능력을 향상시키는 데 많은 도움이 되었고, 앞으로의 프로젝트에서도 이러한 경험을 적극적으로 활용하고자 합니다.",
    link: "http://soo-mo.s3-website.ap-northeast-2.amazonaws.com/",
    git: "https://github.com/chochojj/SOOMO",
  },
  {
    id: "todolist",
    title: "나만의 기록장",
    date: "2023.3",
    term: "2 주",
    content: "ss",
    role: ["Todo CRUD", "간단한 일기 CRUD", "페이지 이동"],
    skill: ["React", "Styled-Component", "JavaScript"],
    review: "dd",
    link: "https://chochojj.github.io/todolist/",
    git: "https://github.com/chochojj/todolist",
  },
];

export default projectData;
