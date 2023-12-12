import { useEffect, useState } from "react";
import { getAllArticles } from "../utils";
import ArticlesPreviewCard from "./ArticlesPreviewCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
      setLoading(!loading);
    });
  }, []);

  return (
    <>
      <h1>All Articles</h1>
      {loading === true ? 
        <h1>Loading Now</h1>
       : (
        articles.map((article) => {
          return <ArticlesPreviewCard article={article} />;
        })
      )}
    </>
  );
};

export default ArticlesList;
