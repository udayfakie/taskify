import React from "react";
import { styled } from "styled-components";
import { Todo } from "../../model";

interface Props {
  todos: Todo[];
}

const Home: React.FC<Props> = ({ todos }) => {
  return (
    <Container>
      {todos.map(todo => (
        <div key={todo.id}>{todo.todo}</div>
      ))}
    </Container>
  );
};


export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: teal;
`;
