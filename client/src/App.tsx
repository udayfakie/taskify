import React from "react";
import StoredData from "./StoredData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Panda from "./components/screens/Panda";
import Home from "./components/screens/Home";
import { Todo } from "./model";

const App: React.FC = () => {
  const todos: Todo[] = [{ id: 1, todo: "Buy groceries", isDone: false }];
  return (
    <Router>
      <StoredData/>
      {/* <NavBar />  */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home todos={todos} />} /> 
        <Route path="/todo" element={<StoredData />} />
        <Route path="/panda" element={<Panda />} /> 
      </Routes> */}
    </Router>
  );
};

export default App;
