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


export const patchVotes = (inc_votes,article_id) => {

    return axios.patch(`https://nc-news-068s.onrender.com/api/articles/${article_id}`,inc_votes).then((res) => {
    console.log(res.data,"utiles")
    return res.data.data
})

}