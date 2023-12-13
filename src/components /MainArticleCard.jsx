import { useParams,Link } from "react-router-dom";
import { getArticleById } from "../utils";
import { useState, useEffect } from "react";

const MainArticleCard = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <div className="main_article_card">
      <h1>{article.title}</h1>
      <h2>{article.author}</h2>
      <img className="main_card_image" src={article.article_img_url} />
      <p>Votes {article.body}</p>
      <p>Votes {article.votes}</p>
      <p>{article.created_at}</p>
      <Link to={`/articles/${article.article_id}/comments`}> Show Comments</Link>
    </div>
  );
};

export default MainArticleCard;
