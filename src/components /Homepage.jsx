import ArticlesList from "../components /ArticlesList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage_container">
      <h1 className="homepage_title"> Welcome To NC News!</h1>
      <button
        className="all_articles_button"
        onClick={() => {
          window.location.href = `/articles`;
        }}
      >
        All Articles
      </button>
    </div>
  );
};

export default HomePage;
