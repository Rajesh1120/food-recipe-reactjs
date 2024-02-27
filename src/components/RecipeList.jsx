import { Link } from "react-router-dom"
export default function RecipeList({ item }){
    return(
        
        <div className="recipeitems">
            <div className="image-container">
                <img src={item?.image_url} alt={item?.title} />
            </div>
                <p>{item?.publisher}</p>
                <h3>{item?.title}</h3>
                <Link to ={`/recipe-item/${item.id}`}>
                Recipe Details
                </Link>
            
        </div>
    )
}