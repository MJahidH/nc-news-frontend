import axios from "axios";

const baseLink = "https://nc-news-backend.vercel.app";

export const getAllArticles = () => {
  return axios.get(baseLink + "/api/articles").then((res) => {
    return res.data.articles;
  });
};
export const getArticleById = (article_id) => {
  return axios.get(baseLink + `/api/articles/${article_id}`).then((res) => {
    return res.data.data;
  });
};

export const getCommentsById = (id) => {
  return axios.get(baseLink + `/api/articles/${id}/comments`).then((res) => {
    return res.data.data;
  });
};

export const patchVotes = (inc_votes, article_id) => {
  return axios
    .patch(baseLink + `/api/articles/${article_id}`, inc_votes)

    .then((res) => {
      return res.data.data;
    });
};

export const postComment = (comment, id) => {
  return axios
    .post(baseLink + `/api/articles/${id}/comments`, comment)
    .then((res) => {
      return res.data.comment;
    })
    .catch((err) => {});
};

export const deleteComment = (comment_id) => {
  return axios.delete(baseLink + `/api/comments/${comment_id}`);
};
