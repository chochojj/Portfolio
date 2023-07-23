import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import treat from "../images/treat.svg";

const About = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const ImgRotate: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageRef.current!.style.animationPlayState = "running";
        } else {
          imageRef.current!.style.animationPlayState = "paused";
        }
      });
    };

    const observer = new IntersectionObserver(ImgRotate, options);
    observer.observe(imageRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add("fixed");
        } else {
          titleRef.current?.classList.remove("fixed");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(titleRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Wrap>
      <Up>
        <Round>
          <Circle>
            <img
              ref={imageRef}
              src={treat}
              alt="hi, i'll be an interactive web developer !"
            />
          </Circle>
        </Round>
        <Outline ref={titleRef}>
          <Title>About</Title>
          <Line />
          <Text>프론트엔드 개발자 조지현 입니다. </Text>
          <Text>
            동적인 화면을 구현하며 사용자와 상호작용하는 것에 매력을 느껴
          </Text>
          <Text>
            개발자로서의 꿈을 키워나가고 있습니다. 한계가 없는 아이디어를
          </Text>
          <Text>
            화면에 구현하기 위해 새로운 기술을 배우는 도전을 두려움 없이
          </Text>
          <Text> 시도하고 있습니다. </Text>
        </Outline>
      </Up>
      <Info>
        <Category>Profile</Category>
        <Profile>
          <div>
            <span>Name</span>
            <span>조지현</span>
          </div>
          <div>
            <span>E-mail</span>
            <span>hyechojj@gmail.com</span>
          </div>
          <div>
            <span>Phone</span>
            <span>010-6522-4733</span>
          </div>
          <div>
            <span>blog</span>
            <span>
              <a
                href="https://www.notion.so/chochojj/TIL-512e6f89bf1f41228a69b97a1336b37e"
                target="_blank"
                rel="noreferrer"
              >
                notion 블로그 방문
              </a>
            </span>
          </div>
        </Profile>
        <Category>Skill</Category>
        <Skill>
          <div>
            <div>
              <Field>Frontend</Field>
              <Stack>
                <img
                  src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=htnl5&logoColor=white"
                  alt="html5"
                />

                <img
                  src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="css3"
                />

                <img
                  src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
                  alt="javascript"
                />

                <img
                  src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"
                  alt="react"
                />

                <img
                  src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"
                  alt="styled_component"
                />

                <img
                  src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="typescript"
                />

                <img
                  src="https://img.shields.io/badge/Redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white"
                  alt="Redux_toolkit"
                />

                <img
                  src="https://img.shields.io/badge/zustand-302683?style=for-the-badge&logo=zustand&logoColor=white"
                  alt="zustand"
                />
              </Stack>
            </div>
            <div>
              <Field>etc</Field>
              <Stack>
                <img
                  src="https://img.shields.io/badge/git-181717?style=for-the-badge&logo=git&logoColor=white"
                  alt="git"
                />

                <img
                  src="https://img.shields.io/badge/figma-5B0BB5?style=for-the-badge&logo=figma&logoColor=white"
                  alt="figma"
                />

                <img
                  src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
                  alt="postman"
                />

                <img
                  src="https://img.shields.io/badge/AWS S3-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"
                  alt="AWS S3"
                />
              </Stack>
            </div>
          </div>
        </Skill>
      </Info>
    </Wrap>
  );
};

export default About;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 700px) {
    justify-content: space-around;
  }

  span {
    display: flex;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const Up = styled.section`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
  }

  @media only screen and (max-height: 770px) {
    height: 42%;
    margin-bottom: 10px;
  }
`;
const Round = styled.article`
  width: 600px;
  height: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 730px;
  height: 730px;
  overflow: hidden;

  img {
    position: absolute;
    top: -320px;
    left: -85px;
    width: 800px;
    height: 800px;
    padding-bottom: 150px;
    object-fit: contain;
    transform: rotate(-155deg);
    animation: ${rotateAnimation} 25s linear infinite;

    @media screen and (max-width: 1320px) {
      width: 650px;
      height: 650px;
    }

    @media screen and (max-width: 980px) {
      width: 600px;
      height: 600px;
    }
  }
`;

const Outline = styled.article`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 50px;
  padding-left: 250px;
  transition: padding-left 1s ease-in;

  @media screen and (max-width: 1320px) {
    width: 800px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding-left: 100px;
    height: fit-content;
  }

  @media only screen and (max-height: 770px) {
    margin-top: 10px;
  }

  &.fixed {
    padding-left: 100px;

    @media screen and (max-width: 900px) {
      padding-left: 20px;
    }
  }
`;

const Title = styled.span`
  font-size: 80px;
  color: #1f485e;
  font-weight: bold;
  -webkit-text-stroke: 2px white;
  font-family: sans-serif;
  padding-left: 20px;
  letter-spacing: 3px;

  @media screen and (max-width: 1320px) {
    font-size: 70px;
  }

  @media screen and (max-width: 980px) {
    font-size: 50px;
  }

  @media screen and (max-width: 500px) {
    font-size: 40px;
    -webkit-text-stroke: 1px white;
  }

  @media only screen and (max-height: 770px) {
    font-size: 50px;
  }

  @media only screen and (max-height: 770px) and (max-width: 500px) {
    font-size: 35px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 10px;
  margin-bottom: 15px;
  border-bottom: 3px solid white;

  @media screen and (max-width: 500px) {
    height: 7px;
    border-bottom: 2px solid white;
  }
  @media only screen and (max-height: 770px) {
    height: 5px;
    border-bottom: 2px solid white;
    margin-bottom: 5px;
  }
`;

const Text = styled.span`
  padding-left: 20px;
  font-size: 22px;
  margin-bottom: 5px;

  @media screen and (max-width: 1320px) {
    font-size: 18px;
  }

  @media screen and (max-width: 980px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }

  @media only screen and (max-height: 770px) {
    font-size: 15px;
  }

  @media only screen and (max-height: 770px) and (max-width: 500px) {
    font-size: 13px;
  }
`;

const Info = styled.section`
  width: 1300px;
  height: fit-content;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 1320px) {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    padding: 10px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-height: 770px) and (max-width: 500px) {
    padding: 5px;
    margin-bottom: 40px;
  }
`;

const Category = styled.h2`
  font-size: 24px;
  margin-top: 25px;
  margin-bottom: 15px;

  @media screen and (max-width: 900px) {
    margin-top: 15px;
  }
`;

const Profile = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-around;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }

  div {
    width: 23%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0px;
    margin: 0px 15px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);

    @media screen and (max-width: 900px) {
      width: 48%;
      margin: 0px 2px;
      padding: 10px 10px;
      margin-bottom: 4px;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 500px) {
      height: 50%;
      flex-direction: column;
    }
  }
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    color: #1f485e;
    margin-bottom: 5px;

    @media screen and (max-width: 900px) {
      font-size: 16px;
      margin-bottom: 0px;
    }

    @media screen and (max-width: 700px) {
      font-size: 15px;
    }
  }
  span:last-child {
    font-size: 17px;

    @media screen and (max-width: 900px) {
      font-size: 14px;
    }

    @media screen and (max-width: 700px) {
      font-size: 12px;
    }
  }
`;

const Skill = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    width: 98%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 5px;
    padding: 15px 20px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Field = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #1f485e;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;
