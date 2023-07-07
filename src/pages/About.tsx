import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import treat from "../images/treat.svg";

const About = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null)

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
            <img ref={imageRef} src={treat} alt="hi, i'll be an interactive web developer !"/>
          </Circle>
        </Round>
        <Outline ref={titleRef}>
          <Title>About</Title>
          <Line />
          <Text>프론트엔드 개발자 조지현 입니다. </Text>
          <Text>동적인 화면을 구현하며 사용자와 상호작용하는 것에 매력을 느껴 </Text>
          <Text> 개발자로서의 꿈을 키워나가고 있습니다. 한계가 없는 아이디어를 </Text>
          <Text> 화면에 구현하기 위해 새로운 기술을 배우는 도전을 두려움 없이 </Text>
          <Text> 시도하고 있습니다. </Text>
        </Outline>
      </Up>
      <Info>
        <Category>Profile</Category>
        <Profile>
          <div>
            <span>이름</span>
            <span>조지현</span>
          </div>
          <div>
            <span>E-mail</span>
            <span>hyechojj@gmail.com</span>
          </div>
          <div>
            <span>이름</span>
            <span>조지현</span>
          </div>
        </Profile>
        <Category>Stack</Category>
        <Stack>

        </Stack>
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
`;

const Up = styled.section`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: space-between;
`;
const Round = styled.article`
  width: 600px;
  height: 100%;
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

  img{
    position: absolute;
    top: -320px;
    left: -85px;
    width: 800px;
    height: 800px;
    padding-bottom: 150px;
    object-fit: contain;
    transform:rotate(-155deg);
    animation: ${rotateAnimation} 25s linear infinite;
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
  &.fixed {
    padding-left: 100px; 
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
`;

const Line = styled.div`
  width: 100%;
  height: 10px;
  margin-bottom: 15px;
  border-bottom: 3px solid white;
`;

const Text = styled.span`
  padding-left: 20px;
  font-size: 22px;
  margin-bottom: 5px;
`;

const Info = styled.section`
  width: 1300px;
  height: 450px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.3);
`

const Category = styled.h2``

const Profile = styled.article`

  
-webkit-user-select: text;
-moz-user-select: text;
-ms-user-select: text;
user-select: text;
  
`

const Stack = styled.article``