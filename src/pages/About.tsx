import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import treat from "../images/treat.svg";

const About = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
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
    const options = {
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
          <Info>프론트엔드 개발자 조지현 입니다. 동적인 화면을 구현하고</Info>
          <Info>사용자와 상호작용하는 것에 매력을 느껴 개발자를 꿈꾸게 되었습니다</Info>
          <Info>저쩌구</Info>
          <Info>어쩌구</Info>
        </Outline>
      </Up>
    </Wrap>
  );
};

export default About;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
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
  width: 600px;
  height: 600px;
  overflow: hidden;

  img{
    position: absolute;
    top: -160px;
    left: -120px;
    width: 650px;
    height: 650px;
    padding-bottom: 150px;
    object-fit: contain;
    transform:rotate(-155deg);
    animation: ${rotateAnimation} 17s linear infinite;
  }

`;

const Outline = styled.article`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 250px;
  padding-bottom: 30px;
  transition: padding-left 1s ease-in; 
  &.fixed {
    padding-left: 100px; 
  }
`;

const Title = styled.span`
  font-size: 90px;
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

const Info = styled.span`
  padding-left: 20px;
  font-size: 22px;
  margin-bottom: 5px;
`;
