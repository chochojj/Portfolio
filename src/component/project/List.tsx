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
                  <p>사용 기술</p> {filteredProjectData[0].skill.join(", ")}
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

  @media screen and (max-width: 1320px) {
    padding: 15px;
  }

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

    @media screen and (max-width: 1210px) {
      min-width: 400px;
    }

    @media screen and (max-width: 850px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 530px) {
      min-width: 350px;
      margin-bottom: 20px;
    }

    @media only screen and (max-height: 770px) {
      min-width: 220px;
      margin: 0px;
    }
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

  @media screen and (max-width: 1210px) {
    justify-content: space-between;
    padding: 10px 0px;
    position: relative;
  }

  @media screen and (max-width: 530px) {
    justify-content: center;
  }
`;

const Down = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1210px) {
    flex-direction: column;
    height: fit-content;
  }

  p {
    width: fit-content;
    color: white;
    font-size: 20px;
    padding: 0px 4px;
    background-color: #1f485e;
    margin-top: 10px;
    margin-bottom: 4px;
    @media screen and (max-width: 850px) {
      font-size: 18px;
    }

    @media screen and (max-width: 530px) {
      font-size: 15px;
    }
    @media only screen and (max-height: 770px) {
      font-size: 12px;
    }
  }
`;
const Left = styled.div`
  width: 35%;
  margin: 0 20px;

  @media screen and (max-width: 1320px) {
    width: 38%;
    margin: 0 20px;
  }
  @media screen and (max-width: 1210px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1210px) {
    height: fit-content;
  }

  h2 {
    font-size: 26px;
    margin-right: 10px;
    font-weight: 600;
    color: #1f485e;
    @media screen and (max-width: 1210px) {
      font-size: 18px;
      line-height: 20px;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1320px) {
      height: fit-content;
    }
  }
  @media only screen and (max-height: 770px) {
    flex-direction: row;
  }
`;
const Link = styled.span`
  font-size: 19px;
  margin-right: 7px;
  padding: 0px 3px;
  background-color: #e4a8a8;
  font-weight: 600;

  @media screen and (max-width: 530px) {
    font-size: 15px;
  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  span {
    margin-right: 5px;

    @media only screen and (max-height: 770px) {
      font-size: 13px;
      margin-left: 5px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  p {
    font-size: 14px;
    line-height: 25px;

    @media screen and (max-width: 530px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

const Imgbox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 1210px) {
    justify-content: center;
    margin-bottom: 0px;
  }
`;

const Stack = styled.div`
  width: 430px;
  @media screen and (max-width: 1210px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 850px) {
    padding: 0px 5px;
  }

  span {
    width: 400px;

    @media screen and (max-width: 1210px) {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 20px;
    }
    @media screen and (max-width: 530px) {
      font-size: 12px;
    }

    @media only screen and (max-height: 770px) {
      margin-bottom: 0px;
    }
  }
`;
const Info = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1320px) {
    width: 550px;
  }

  @media screen and (max-width: 1210px) {
    width: 800px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 0px 5px;
  }

  @media only screen and (max-height: 770px) {
    margin-bottom: 10px;
  }

  span {
    margin-bottom: 10px;

    @media screen and (max-width: 1210px) {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 20px;
    }

    @media screen and (max-width: 530px) {
      font-size: 12px;
    }

    @media only screen and (max-height: 770px) {
      margin-bottom: 0px;
    }
  }
`;
