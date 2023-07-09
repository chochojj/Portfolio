import { Project } from "../types/project";

const projectData: Project[] = [
  {
    id: "portfolio",
    title: "포트폴리오",
    date: "2023.7",
    term: "1 주",
    content:
      "반응형 웹으로 제작되었으며, 팀 프로젝트에서 동적인 화면 구성을 구현하는 부분이 부족한 것을 보완하기 위해 fullpage.js를 활용하여 부드러운 스크롤 효과를 적용했습니다. 또한, intersectionObserverAPI를 사용하여 페이지 내 요소들의 등장 애니메이션을 추가하였습니다. \n프로젝트 조회 방식은 zustand를 이용하여 전역 상태로 관리 하였습니다. 이를 통해 다양한 방식으로 프로젝트를 조회하고 보여줄 수 있게 되었습니다. 또한, 프로젝트 데이터를 별도의 객체로 관리하여 추후 작업물이 추가되어도 CSS를 크게 수정하지 않아도 되는 장점이 있습니다. 이를 통해 유연하게 프로젝트를 관리할 수 있습니다.",
    role: ["반응형 웹", "애니메이션 효과", "전체/상세보기", "CI/CD"],
    skill: ["React", "TypeScript", "Styled-Component", "zustand"],
    review: "dd",
    link: "https://hyejj-portfolio.vercel.app/",
    git: "https://github.com/chochojj?tab=repositories",
  },
  {
    id: "soomo",
    title: "SOOMO",
    date: "2023.5",
    term: "4 주",
    content: "",
    role: [
      "반응형 웹",
      "게시판 및 댓글 crud",
      "페이지네이션",
      "무한스크롤",
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
    review: "dd",
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
