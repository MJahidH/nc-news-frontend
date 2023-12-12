import ArticlesList from "../ArticlesList"
import {Link } from "react-router-dom"


const HomePage = () => {

return (
<div>
<h1> Welcome To NC News!</h1>
<nav>
<Link to="/articles" element={ArticlesList}>
All Articles 
</Link>

</nav>

</div>
)


}

export default HomePage