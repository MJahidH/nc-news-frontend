import ArticlesList from "../components /ArticlesList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage_container">
      <h1> Welcome To NC News!</h1>
      <nav>
        <Link to="/articles">All Articles</Link>
      </nav>
    </div>
  );
};

export default HomePage;
