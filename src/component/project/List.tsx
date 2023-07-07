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

const Lists = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    overflow: scroll;
    white-space: nowrap;
`
const Content = styled.div`
    width: 100vw;
    height: 100%;
`