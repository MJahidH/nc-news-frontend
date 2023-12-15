import { useParams, Link } from "react-router-dom";
import { getArticleById, patchVotes } from "../utils";

import { useState, useEffect } from "react";
const MainArticleCard = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  const handleClick = (event) => {
    patchVotes({ inc_votes: 1 }, article_id)
      .then(() => {
        setArticle((currArticle) => ({
          ...currArticle,
          votes: currArticle.votes + 1,
        }));
      })
      .catch((err) => {
        setError({ err });
      });
  };

  if (error) {
    return (
      <>
        <p>Comment Faild To Add</p>
      </>
    );
  } else {
    return (
      <div className="main_article_card">
        <h1>{article.title}</h1>
        <h2>{article.author}</h2>
        <img className="main_card_image" src={article.article_img_url} />
        <p>Votes {article.body}</p>
        <p>Votes {article.votes}</p>
        <button onClick={handleClick}>Upvote This Article</button>
        <h3>
        <Link to={`/articles/${article.article_id}/comments`}>Go To Comments</Link>
      </h3>
        <p>{article.created_at}</p>
      </div>
    );
  }
};

export default MainArticleCard;
