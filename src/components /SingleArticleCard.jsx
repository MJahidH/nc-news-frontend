import { useEffect, useState } from "react";
import { getArticlesById } from "../utils";

const SingleArticleCard = () => {
  const { article, setArticle } = useState([]);

  useEffect(() => {
    getArticlesById().then((article) => {
      setArticle(article);
    });
  }, []);
};

export default SingleArticleCard;
