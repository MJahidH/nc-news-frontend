import { Link } from "react-router-dom";

const ArticlesPreviewCard = ({ article }) => {
  return (
    <div className="articles_preview_card">
      <h1>{article.title}</h1>
      <img className="article_preview_card" src={article.article_img_url} />
      <p>Votes {article.votes}</p>
      <h3>
        <Link to={`/articles/${article.article_id}`}>Go To Article</Link>
      </h3>
      <p>{article.created_at}</p>
    </div>
  );
};

export default ArticlesPreviewCard;
