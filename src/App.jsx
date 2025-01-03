import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import EditTask from "./components/EditTask";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddTask />} />
      <Route path="/edit/:id" element={<EditTask />} />
    </Routes>
  );
};

export default App;
