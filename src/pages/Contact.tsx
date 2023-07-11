import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";

interface BubbleProps {
  randomNumber: number;
}

const Contact = () => {
  const bubbleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const BubbleUp: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bubbleRef.current!.style.animationPlayState = "running";
        } else {
          bubbleRef.current!.style.animationPlayState = "paused";
        }
      });
    };

    const observer = new IntersectionObserver(BubbleUp, options);
    observer.observe(bubbleRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);
  const randomNumbers = Array.from(
    { length: 26 },
    () => Math.floor(Math.random() * 17) + 10
  );

  return (
    <Wrap>
      <Bubble>
        {randomNumbers.map((randomNumber, index) => (
          <BubbleSpan
            ref={bubbleRef}
            key={index}
            data-i={index}
            className={String(index)}
            randomNumber={randomNumber}
          />
        ))}
      </Bubble>
      <Title>
        <Text>Contact</Text>
        <Line />
      </Title>
      <Content>
        <Info></Info>
      </Content>
    </Wrap>
  );
};

export default Contact;

const bubble = keyframes`
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
`;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const Bubble = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  z-index: -10;
`;

const BubbleSpan = styled.span<BubbleProps>`
  position: relative;
  width: 30px;
  height: 30px;
  background: #e4a8a8;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #e4a8a844, 0 0 50px #e4a8a8, 0 0 100px #e4a8a8;
  animation: ${bubble} 15s linear infinite;
  animation-duration: ${(props) => `calc(125s / ${props.randomNumber})`};

  &:nth-child(even) {
    background: #ffddab;
    box-shadow: 0 0 0 10px #ffddab44, 0 0 50px #ffddab, 0 0 100px #ffddab;
  }
`;

const Title = styled.div`
  width: 380px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 1320px) {
    width: 320px;
  }

  @media screen and (max-width: 850px) {
    width: 240px;
  }

  @media screen and (max-width: 410px) {
    width: 180px;
  }
  @media screen and (max-width: 410px) {
    width: 150px;
  }
`;

const Text = styled.span`
  font-size: 80px;
  color: #1f485e;
  font-weight: bold;
  -webkit-text-stroke: 2px white;
  font-family: sans-serif;
  margin-top: 50px;
  padding-right: 30px;
  letter-spacing: 3px;

  @media screen and (max-width: 1320px) {
    font-size: 50px;
    margin-top: 20px;
  }
  @media screen and (max-width: 850px) {
    -webkit-text-stroke: 1px white;
    margin-top: 10px;
    font-size: 40px;
    padding-right: 15px;
  }

  @media screen and (max-width: 410px) {
    font-size: 25px;
    color: white;
    font-weight: normal;
  }
`;

const Line = styled.div`
  width: 380px;
  height: 10px;
  margin-top: 15px;
  margin-bottom: 25px;
  border-bottom: 3px solid white;

  @media screen and (max-width: 850px) {
    margin-top: 5px;
    margin-bottom: 15px;
  }

  @media only screen and (max-height: 770px) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Info = styled.section`
  width: 700px;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
`;
