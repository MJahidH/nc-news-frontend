

const ArticlesPreviewCard = ({article}) => {

return (
<div className="articles_preview_card">
<h1>{article.title}</h1>
<img src={article.article_img_url}/>
<p>Votes {article.votes}</p>
<p>{article.created_at}</p>

</div>
)

}

export default ArticlesPreviewCard