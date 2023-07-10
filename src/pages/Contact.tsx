import styled from "styled-components";

const Contact = () => {
  return (
    <Wrap>
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

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  width: 60%;
  height: 70%;
  background-color: white;
`;
