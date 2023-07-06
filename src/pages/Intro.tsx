import { useEffect, useRef } from "react";
import styled from "styled-components";

const Intro = () => {  
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const handleLeftMove: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          leftRef.current?.classList.add("fixed");
        } else {
          leftRef.current?.classList.remove("fixed");
        }
      });
    };

    const observer = new IntersectionObserver(handleLeftMove, options);
    observer.observe(leftRef.current!);

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

    const handleRightMove: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          rightRef.current?.classList.add("fixed");
        } else {
          rightRef.current?.classList.remove("fixed");
        }
      });
    };

    const observer = new IntersectionObserver(handleRightMove, options);
    observer.observe(rightRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Wrap>
      <Left ref={leftRef}>
        <Top>
          <Upline />
          <Position>Front_end</Position>
        </Top>
        <Title>PORTFOLIO</Title>
      </Left>
      <Right ref={rightRef}>
        <Name>Ji_hyeon</Name>
        <Downline />
      </Right>
    </Wrap>
  );
};

export default Intro;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Left = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 300px;
  transition: margin-right 0.5s ease-in; 
  &.fixed {
    margin-right: 0px;
  }
`;
const Top = styled.article`
  display: flex;
  width: 100%;
`;
const Upline = styled.div`
  width: 27%;
  height: 30px;
  border-bottom: 2px solid white;
`;
const Position = styled.span`
  font-size: 32px;
  letter-spacing: 1px;
`;
const Title = styled.span`
  font-size: 120px;
  color: #1f485e;
  font-weight: bold;
  -webkit-text-stroke: 4px white;
  font-family: sans-serif;
  letter-spacing: 3px;
`;
const Right = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: 300px;
  transition: margin-left 0.5s ease-in; 
  &.fixed {
    margin-left: 0px;
  }
`;
const Downline = styled.div`
  width: 27%;
  height: 3px;
  border-bottom: 2px solid white;
  height: 30px;
`;
const Name = styled.span`
  font-size: 32px;
  letter-spacing: 1px;
`;
