import styled from "styled-components";

const Contact = () => {
  return (
  <Wrap>
    <Title>
      <Text>Contact</Text>
      <Line />
    </Title>
  </Wrap>
  );
};

export default Contact;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
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
