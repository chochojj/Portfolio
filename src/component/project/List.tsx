import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { Project } from "../../types/project";
import portfolio from "../../images/portfolio.png";
import soomo from "../../images/soomo.png";
import todolist from "../../images/todolist.png";
import { useProjectStore } from "../../store/store";

const List = ({ projectData }: { projectData: Project[] }) => {
  const { selectedProject } = useProjectStore();

  const getImageSrc = (projectId: string) => {
    switch (projectId) {
      case "portfolio":
        return portfolio;
      case "soomo":
        return soomo;
      case "todolist":
        return todolist;
      default:
        return ""; // 해당하는 이미지가 없는 경우 빈 문자열 반환
    }
  };

  const filteredProjectData = projectData.filter(
    (project) => project.id === selectedProject
  );

  return (
    <Wrap>
      {filteredProjectData.length > 0 && (
        <Content>
          <Left>
            <div>
              <Title>
                <h2>{filteredProjectData[0].title}</h2>
                <div>
                  <Link>
                    <a
                      href={filteredProjectData[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      배포 링크
                    </a>
                  </Link>
                  <a
                    href={filteredProjectData[0].git}
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
              <span>{filteredProjectData[0].date}</span>
              <p>
                {"("}
                {filteredProjectData[0].term}
                {")"}
              </p>
            </Duration>
            <Imgbox>
              <img
                src={getImageSrc(filteredProjectData[0].id)}
                alt={filteredProjectData[0].title}
              />
            </Imgbox>
          </Left>
          <Info>
            <span>
              <p>구현 기능</p> {filteredProjectData[0].role.join(", ")}
            </span>
            <span>
              <p>기술 스택</p> {filteredProjectData[0].skill.join(", ")}
            </span>
          </Info>
        </Content>
      )}
    </Wrap>
  );
};

export default List;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
    width: 80%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div``;

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
  }
  p {
    font-size: 14px;
    line-height: 25px;
  }
`;

const Imgbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  p {
    width: fit-content;
    color: white;
    font-size: 18px;
    padding: 0px 4px;
    background-color: #1f485e;
    margin-top: 10px;
    margin-bottom: 4px;
  }
`;
