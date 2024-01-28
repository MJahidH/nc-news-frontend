import { Link } from "react-router-dom";

const ArticlesPreviewCard = ({ article }) => {
  return (
    <div className="articles_preview_card">
      <h1>{article.title}</h1>
      <img className="article_preview_card" src={article.article_img_url} />
      <p>Votes {article.votes}</p>

      <button
        className="main_article_card_button"
        onClick={() => {
          window.location.href = `/articles/${article.article_id}`;
        }}
      >
        Go To Article
      </button>
      <p>{article.created_at}</p>
    </div>
  );
};

export default ArticlesPreviewCard;
