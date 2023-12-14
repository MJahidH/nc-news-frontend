import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get("https://nc-news-068s.onrender.com/api/articles")
    .then((res) => {
      return res.data.articles;
    });
};
export const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-068s.onrender.com/api/articles/${article_id}`)
    .then((res) => {
      return res.data.data;
    });
};
export const getCommentsById = (id) => {
  return axios
    .get(`https://nc-news-068s.onrender.com/api/articles/${id}/comments`)
    .then((res) => {
      return res.data.data;
    });
};

export const postComment = (comment, id) => {
  return axios
    .post(
      `https://nc-news-068s.onrender.com/api/articles/${id}/comments`,
      comment
    )
    .then((res) => {
      console.log(res);
      return res.data
    }).catch((err) => {
      console.log(err)
    })
};
