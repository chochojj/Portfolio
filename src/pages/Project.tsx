import styled from "styled-components";

const Project = () => {
  return (
  <Wrap>
    <Top>
      <Title>
        <Text>Project</Text>
        <Line />
      </Title>
    </Top>
    <List>

    </List>
  </Wrap>)
};

export default Project;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Top = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  width: 380px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Text = styled.span`
  font-size : 80px;
  color: #1f485e;
  font-weight: bold;
  -webkit-text-stroke: 2px white;
  font-family: sans-serif;
  margin-top: 50px;
  padding-right: 30px;
  letter-spacing: 3px;
`;

const Line = styled.div`
  width: 380px;
  height: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 3px solid white;
  `;

const List = styled.article`
  width: 100%;
  height: calc(100vh - 200px);
  background-color: rgba(255, 255, 255, 0.3);
`