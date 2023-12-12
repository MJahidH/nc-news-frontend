import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components /Homepage";
import ArticlesList from "./ArticlesList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList/>} />
      </Routes>
    </>
  );
}

export default App;
