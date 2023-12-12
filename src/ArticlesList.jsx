import { useEffect, useState } from "react";
import { getAllArticles } from "./utils";
import ArticlesPreviewCard from "./components /ArticlesPreviewCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <>
    <h1>All Articles</h1>
    {articles.map((article) => {
   return <ArticlesPreviewCard article={article}/>
})}
    </>
  );
};

export default ArticlesList;
