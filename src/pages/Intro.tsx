import styled from "styled-components";

const Intro = () => {
  return (
    <Wrap>
      <Left>
        <Top>
          <Upline></Upline>
          <Position>Front_end</Position>
        </Top>
        <Title>PORTFOLIO</Title>
      </Left>
      <Right>
        <Name>Ji_hyeon</Name>
        <Downline></Downline>
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
  width: 100%;
`;
const Upline = styled.div``;
const Position = styled.span`
  font-size: 35px;
`;
const Title = styled.span`
  font-size: 150px;
  color: #1f485e;
  font-weight: 600;
  -webkit-text-stroke: 5px white;
  letter-spacing: 2px;
`;
const Right = styled.section`
  width: 100%;
  display: flex;
`;
const Downline = styled.div``;
const Name = styled.span`
  font-size: 35px;
`;
