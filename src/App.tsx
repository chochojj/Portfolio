import styled from "styled-components";
import Nav from "./component/Nav";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { SectionsContainer, Section } from "react-fullpage";

function App() {
  const options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["One", "Two", "Three", "Four"], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    delay: 1200, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
  };
  return (
    <Wrap>
      <Nav />
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
`;

const Main = styled.article`
  width: 100%;
`;
