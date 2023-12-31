import styled from "styled-components";
import { Project } from "../../types/project";
import { AiFillGithub } from "react-icons/ai";
import portfolio from "../../images/portfolio.png";
import soomo from "../../images/soomo.png";
import todolist from "../../images/todolist.png";
import { useStore } from "../../store/store";
import { useProjectStore } from "../../store/store";
import { useCallback } from "react";

const All = ({ projectData }: { projectData: Project[] }) => {
  const { setViewMode } = useStore();
  const { selectedProject, setSelectedProject } = useProjectStore();

  const handleDetailView = useCallback(
    (project: string) => {
      setViewMode("tab");
      setSelectedProject(project);
    },
    [setViewMode, setSelectedProject]
  );

  const getImageSrc = (projectId: string) => {
    switch (projectId) {
      case "portfolio":
        return portfolio;
      case "soomo":
        return soomo;
      case "todolist":
        return todolist;
      default:
        return "";
    }
  };
  console.log(selectedProject);

  return (
    <Wrap>
      {projectData.map((project) => (
        <Content key={project.id}>
          <div>
            <div>
              <Title>
                <h2>{project.title}</h2>
                <div>
                  <Link>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      배포 링크
                    </a>
                  </Link>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <AiFillGithub color="black" size={20} />
                    </span>
                  </a>
                </div>
              </Title>
            </div>
            <Duration>
              <span>{project.date}</span>
              <p>
                {"("}
                {project.term}
                {")"}
              </p>
            </Duration>
            <img src={getImageSrc(project.id)} alt={project.title} />
            <Info>
              <p>구현 기능</p> {project.role.join(", ")}
              <p>기술 스택</p> {project.skill.join(", ")}
            </Info>
          </div>
          <button onClick={() => handleDetailView(project.id)}>상세보기</button>
        </Content>
      ))}
    </Wrap>
  );
};

export default All;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  span,
  p {
    color: black;
  }

  a {
    text-decoration: none;
    color: #1f485e;
  }

  img {
    margin: 5px 0px;
    width: 100%;
    object-fit: contain;

    @media screen and (max-width: 850px) {
      display: none;
    }
  }

  button {
    border: none;
    padding: 7px 0px;
    border-radius: 3px;
    background-color: #1f485e;
    font-size: 16px;

    @media screen and (max-width: 850px) {
      padding: 4px 0px;
      font-size: 13px;
    }
  }

  button:hover {
    background-color: #2f3b5d;
  }
`;
const Content = styled.div`
  width: 25%;
  min-width: 280px;
  height: 520px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1320px) {
    height: 450px;
  }

  @media screen and (max-width: 850px) {
    height: 300px;
  }

  @media screen and (max-width: 580px) {
    width: 80%;
    height: fit-content;
    margin: 5px 0px 2px 0px;
    padding: 10px 20px;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h2 {
    font-size: 24px;
    margin-right: 10px;
    font-weight: 600;
    color: #1f485e;

    @media screen and (max-width: 580px) {
      font-size: 20px;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Link = styled.span`
  font-size: 18px;
  margin-right: 7px;
  padding: 0px 3px;
  background-color: #e4a8a8;
  font-weight: 600;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 5px;
    @media screen and (max-width: 580px) {
      font-size: 13px;
    }
  }
  p {
    font-size: 14px;
    line-height: 25px;
    @media screen and (max-width: 580px) {
      font-size: 11px;
    }
  }
`;

const Info = styled.div`
  @media screen and (max-width: 1320px) {
    font-size: 15px;
  }
  @media screen and (max-width: 850px) {
    font-size: 14px;
  }
  @media screen and (max-width: 580px) {
    padding: 5px 0px;
  }
  p {
    width: fit-content;
    color: white;
    font-size: 18px;
    padding: 0px 4px;
    background-color: #1f485e;
    margin-top: 10px;
    margin-bottom: 4px;

    @media screen and (max-width: 850px) {
      font-size: 16px;
    }
    @media screen and (max-width: 580px) {
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 14px;
    }
  }
`;
