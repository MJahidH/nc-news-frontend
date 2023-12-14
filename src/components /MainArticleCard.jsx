import { useParams } from "react-router-dom";
import { getArticleById, patchVotes } from "../utils";
import { useState, useEffect } from "react";

const MainArticleCard = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  const handleClick = (event) => {
    patchVotes({ inc_votes: 1 }, article_id).then((res) => {
      setArticle(res);
    });
  };

  return (
    <div className="main_article_card">
      <h1>{article.title}</h1>
      <h2>{article.author}</h2>
      <img className="main_card_image" src={article.article_img_url} />
      <p>Votes {article.body}</p>
      <p>Votes {article.votes}</p>
      <button onClick={handleClick}>Upvote This Article</button>
      <p>{article.created_at}</p>
    </div>
  );
};

export default MainArticleCard;
