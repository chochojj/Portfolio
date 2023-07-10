import styled from "styled-components";
import { useCallback } from "react";
import { useStore } from "../store/store";
import All from "../component/project/All";
import List from "../component/project/List";
import Tab from "../component/project/Tab";
import projectData from "../data/projectData";
import { useProjectStore } from "../store/store";

const Project = () => {
  const { viewMode, setViewMode } = useStore();
  const { setSelectedProject } = useProjectStore();

  const handleAllView = useCallback(() => {
    setViewMode("all");
    setSelectedProject("portfolio");
  }, [setViewMode, setSelectedProject]);

  const handleTabView = useCallback(() => {
    setViewMode("tab");
    setSelectedProject("portfolio");
  }, [setViewMode, setSelectedProject]);

  return (
    <Wrap>
      <Top>
        <Title>
          <Text>Project</Text>
          <Line />
        </Title>
        <VeiwButton>
          <ScrollView onClick={handleAllView} active={viewMode === "all"}>
            전체보기
          </ScrollView>
          <TabView onClick={handleTabView} active={viewMode === "tab"}>
            상세보기
          </TabView>
        </VeiwButton>
      </Top>
      <View>
        {/* 상태값에 따라 다른 내용 표시 */}
        {viewMode === "all" && <All projectData={projectData} />}
        {viewMode === "tab" && (
          <>
            <List projectData={projectData} />
            <Tab projectData={projectData} />
          </>
        )}
      </View>
    </Wrap>
  );
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

  @media screen and (max-width: 1320px) {
    height: 150px;
  }

  @media screen and (max-width: 850px) {
    height: 100px;
  }
  @media screen and (max-height: 770px) {
    height: 100px;
  }
  @media screen and (max-width: 410px) {
    height: 70px;
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

const VeiwButton = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  margin-right: 100px;
  margin-bottom: 25px;

  @media screen and (max-width: 1320px) {
    margin-right: 50px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 850px) {
    margin-right: 40px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  button {
    background-color: transparent;
    height: 30px;
    font-size: 20px;
    cursor: pointer;

    @media screen and (max-width: 1320px) {
      height: 25px;
      font-size: 18px;
    }

    @media screen and (max-width: 850px) {
      height: 25px;
      font-size: 16px;
    }
    @media screen and (max-width: 500px) {
      height: fit-content;
      font-size: 14px;
    }
  }
`;

const ScrollView = styled.button<{ active: boolean }>`
  padding-right: 12px;
  border: none;
  color: ${({ active }) => (active ? "#FFDDAB" : "white")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  @media screen and (max-width: 500px) {
    padding-right: 8px;
  }
`;
const TabView = styled.button<{ active: boolean }>`
  padding-left: 12px;
  border: none;
  border-left: 3px solid white;
  color: ${({ active }) => (active ? "#FFDDAB" : "white")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  @media screen and (max-width: 500px) {
    padding-left: 8px;
  }
`;

const View = styled.article`
  position: relative;
  width: 100%;
  height: calc(100% - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);

  @media screen and (max-width: 1320px) {
    height: calc(100% - 150px);
  }

  @media screen and (max-width: 850px) {
    height: calc(100% - 100px);
  }

  @media screen and (max-height: 770px) {
    height: calc(100% - 100px);
  }
  @media screen and (max-width: 410px) {
    height: calc(100% - 70px);
  }
`;
