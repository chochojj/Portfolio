import styled from "styled-components";

const List = () => {

  return (
    <Lists>
        <Content>ddd1</Content>
        <Content>ddd2</Content>
        <Content>ddd3</Content>
        <Content>ddd4</Content>
        <Content>ddd5</Content>
        <Content>ddd6</Content>
    </Lists>
  )}

  
export default List;

const Lists = styled.ul`
    position: absolute;
    height: 100%;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
`
const Content = styled.li`
    width: 100vw;
    height: 100%;
`