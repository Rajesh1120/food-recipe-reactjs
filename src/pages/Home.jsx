import { Globalcontext } from "../store/GlobalContext";
import {useContext} from 'react';
import RecipeList from "../components/RecipeList";
export default function Home() {
    const {recipeList,loading}=useContext(Globalcontext);
    
    if(loading) return <p>Loading.....pleasewait</p>
    return (
        <div id="recipes">
           {recipeList && recipeList.length > 0 ? 
           recipeList.map((item) => <li  className= "listRecipe" key={item.id}><RecipeList  item={item}/></li>)
           :<h1>Nothing is selected</h1>} 
        </div>
    )
}