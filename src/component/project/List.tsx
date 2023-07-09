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
          <Title>
            <div>
              <h2>{filteredProjectData[0].title}</h2>
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
                  <AiFillGithub color="black" size={24} />
                </span>
              </a>
            </div>
            <Duration>
              <span>{filteredProjectData[0].date}</span>
              <p>
                {"("}
                {filteredProjectData[0].term}
                {")"}
              </p>
            </Duration>
          </Title>
          <Down>
            <Left>
              <Imgbox>
                <img
                  src={getImageSrc(filteredProjectData[0].id)}
                  alt={filteredProjectData[0].title}
                />
              </Imgbox>
              <Stack>
                <span>
                  <p>구현 기능</p> {filteredProjectData[0].role.join(", ")}
                </span>
                <span>
                  <p>기술 스택</p> {filteredProjectData[0].skill.join(", ")}
                </span>
              </Stack>
            </Left>

            <Info>
              <span>
                <p>소개</p> {filteredProjectData[0].content}
              </span>
              <span>
                <p>후기</p> {filteredProjectData[0].review}
              </span>
            </Info>
          </Down>
        </Content>
      )}
    </Wrap>
  );
};

export default List;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  span,
  p {
    color: black;
    white-space: pre-wrap;
  }

  a {
    text-decoration: none;
    color: #1f485e;
  }

  img {
    margin: 5px 0px;
    width: 38%;
    min-width: 450px;
    object-fit: contain;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Down = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
const Left = styled.div`
  width: 30%;
  margin: 0 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h2 {
    font-size: 25px;
    margin-right: 10px;
    font-weight: 600;
    color: #1f485e;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Link = styled.span`
  font-size: 19px;
  margin-right: 7px;
  padding: 0px 3px;
  background-color: #e4a8a8;
  font-weight: 600;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  span {
    margin-right: 5px;
  }
  p {
    font-size: 14px;
    line-height: 25px;
  }
`;

const Imgbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Stack = styled.div``;
const Info = styled.section`
  width: 40%;
`;
