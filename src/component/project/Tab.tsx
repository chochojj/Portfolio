import styled from "styled-components";
import { Project } from "../../types/project";
import { useCallback } from "react";
import { useProjectStore } from "../../store/store";

const Tab = ({ projectData }: { projectData: Project[] }) => {
  const { selectedProject, setSelectedProject } = useProjectStore();

  const handleProjectClick = useCallback(
    (projectId: string) => {
      setSelectedProject(projectId);
    },
    [setSelectedProject]
  );

  return (
    <Wrap>
      {projectData.map((project) => (
        <div
          key={project.id}
          onClick={() => handleProjectClick(project.id)}
          className={selectedProject === project.id ? "active" : ""}
        />
      ))}
    </Wrap>
  );
};

export default Tab;

const Wrap = styled.div`
  position: absolute;
  width: 40px;
  left: 37px;

  div {
    width: 100%;
    height: 14px;
    margin-bottom: 7px;
    background-color: white;
    border: 2px solid #1f485e;
    border-radius: 3px;
  }

  .active {
    background-color: #1f485e;
  }
`;
