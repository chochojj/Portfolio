import styled from "styled-components";
import { useCallback } from 'react';
import { useStore } from '../store/store'
import List from "../component/project/List";

const Project = () => {
  const { viewMode, setViewMode } = useStore();

  const handleScrollView = useCallback(() => {
    setViewMode('scroll');
  }, [setViewMode]);

  const handleTabView = useCallback(() => {
    setViewMode('tab');
  }, [setViewMode]);


  return (
  <Wrap>
     <Top>
        <Title>
          <Text>Project</Text>
          <Line />
        </Title>
        <VeiwButton>
          <ScrollView onClick={handleScrollView} active={viewMode === 'scroll'}>스크롤</ScrollView>
          <TabView onClick={handleTabView} active={viewMode === 'tab'}>탭</TabView>
        </VeiwButton>
      </Top>
      <View>
        {/* 상태값에 따라 다른 내용 표시 */}
        {/* {viewMode === 'scroll' && <p>스크롤 모드 내용</p>}
        {viewMode === 'tab' && <p>탭 모드 내용</p>} */}
        <List/>
      </View>
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
  align-items: flex-end;
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
  margin-bottom: 25px;
  border-bottom: 3px solid white;
  `;

const VeiwButton = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  margin-right:100px;
  margin-bottom:25px;

  button{
    background-color: transparent;
    height: 30px;
    font-size : 20px;
    cursor: pointer;
  }
`

const ScrollView = styled.button<{ active: boolean }>`
  padding-right: 12px;
  border: none;
  color: ${({ active }) => (active ? '#FFDDAB' : 'white')};
  font-weight : ${({ active }) => (active ? 'bold' : 'normal')};
`
const TabView = styled.button<{ active: boolean }>`
  padding-left: 12px;
  border: none;
  border-left: 3px solid white;
  color: ${({ active }) => (active ? '#FFDDAB' : 'white')};
  font-weight : ${({ active }) => (active ? 'bold' : 'normal')};
`

const View = styled.article`
  width: 100%;
  height: calc(100vh - 200px);
  background-color: rgba(255, 255, 255, 0.3);
`