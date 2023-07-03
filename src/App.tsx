import styled from "styled-components";
import Intro from "./pages/Intro";

function App() {
  return (
    <Wrap>
      <Intro />
    </Wrap>
  );
}

export default App;

const Wrap = styled.main`
  width: 100%;
  overflow: hidden;
`;
