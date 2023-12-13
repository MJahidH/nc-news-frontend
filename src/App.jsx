import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components /Homepage";
import ArticlesList from "./components /ArticlesList";
import MainArticleCard from "./components /MainArticleCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList/>} />
        <Route path="/articles/:article_id" element={<MainArticleCard/>} />
      </Routes>
    </>
  );
}

export default App;
