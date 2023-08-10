import styled from "styled-components";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import PinkDot from "./component/Pinkdot";
import { SectionsContainer, Section } from "react-fullpage";

function App() {
  const options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["Intro", "About", "Project", "Contact"], // the anchors for each sections
    arrowNavigation: false, // use arrow keys
    delay: 1200, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
  };
  return (
    <Wrap>
      <PinkDot />
      <Main>
        <SectionsContainer {...options}>
          <Section>
            <Intro />
          </Section>
          <Section>
            <About />
          </Section>
          <Section>
            <Project />
          </Section>
          <Section>
            <Contact />
          </Section>
        </SectionsContainer>
      </Main>
    </Wrap>
  );
}

export default App;

const Wrap = styled.main`
  width: 100%;
  display: flex;
  cursor: none;
`;

const Main = styled.article`
  width: 100%;
`;
