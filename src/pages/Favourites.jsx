
import { Globalcontext } from "../store/GlobalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Favourites() {
    const {favouritesList}=useContext (Globalcontext)
    return (
        <>
        <ul>
            {favouritesList.map((item=> <li key={item.publisher}>
                <img src={item?.image_url} alt={item?.title} />
                <p>{item?.publisher}</p>
                <h3>{item?.title}</h3>
                <Link to ={`/recipe-item/${item.id}`}>
                   Recipe Details
                </Link>
            </li>))}
        </ul>
        </>
    )
}