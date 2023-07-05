import styled from "styled-components";

const Intro = () => {
  return (
    <Wrap>
      <Left>
        <Top>
          <Upline />
          <Position>Front_end</Position>
        </Top>
        <Title>PORTFOLIO</Title>
      </Left>
      <Right>
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
  -webkit-text-stroke: 5px white;
  font-family: sans-serif;
  letter-spacing: 3px;
`;
const Right = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
