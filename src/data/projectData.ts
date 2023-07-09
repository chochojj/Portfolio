import { Project } from "../types/project";

const projectData: Project[] = [
  {
    id: "portfolio",
    title: "포트폴리오",
    date: "2023.7",
    term: "1 주",
    content: "ss",
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
    content: "ss",
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
