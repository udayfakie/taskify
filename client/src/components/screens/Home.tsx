import React from "react";
import { styled } from "styled-components";

interface HomeProps {
  todo: string;
}


const Home: React.FC<HomeProps> = ({ todo }) => {
  return <Container>hgshsghgfhgfh</Container>;
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: teal;
`;
