import styled from "styled-components";

const About = () => {
  return (
    <Wrap>
      <Up>
        <RoundText></RoundText>
      </Up>
    </Wrap>
  );
};

export default About;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
`;

const Up = styled.section``;
const RoundText = styled.article``;
