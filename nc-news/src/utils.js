import axios from "axios"

export const getAllArticles = () => {

return axios.get("https://nc-news-068s.onrender.com/api/articles").then((res)=>{
    return res.data.articles
})

}