import styled from "styled-components";

const About = () => {
  return (
    <Wrap>
      <Up>
        <Round>
          <Circle>
            <Text>Hello, I will be an interactive web developer!</Text>
          </Circle>
        </Round>
        <Outline>
          <Title>About</Title>
          <Line />
          <Info>어쩌구</Info>
          <Info>어쩌구</Info>
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
`;
const Round = styled.article`
  width: 50%;
  height: 100%;
  background-color: aliceblue;
`;

const Circle = styled.div`
  width: 400px;
  height: 400px;
  shape-outside: path(circle(50% at 50% 50%));
  clip-path: path(circle(50% at 50% 50%));
  overflow: hidden;
  position: relative;
`;
const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  white-space: nowrap;
`;

const Outline = styled.article`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;
const Title = styled.span`
  font-size: 90px;
  color: #1f485e;
  font-weight: bold;
  -webkit-text-stroke: 4px white;
  font-family: sans-serif;
  padding-left: 20px;
  letter-spacing: 3px;
`;
const Line = styled.div`
  width: 100%;
  height: 10px;
  margin-bottom: 15px;
  border-bottom: 5px solid white;
`;
const Info = styled.span`
  padding-left: 20px;
  font-size: 22px;
`;
