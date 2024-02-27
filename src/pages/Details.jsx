import { useParams } from "react-router-dom"
import { Globalcontext } from "../store/GlobalContext";
import { useContext, useEffect } from "react";

export default function Details() {
    const  {id} = useParams();
    const {recipeDetailsData,favouritesList,setRecipeDetailsData,handleButton} =useContext(Globalcontext);
    

    useEffect(()=>{
        async function getrecipeDetails(){
            const res=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await res.json();
            try{
                if(data?.data?.recipe){
                    setRecipeDetailsData(data?.data)
                }
            }catch(e){
                console.log(e);
            }
        }
        getrecipeDetails();
    },[id,setRecipeDetailsData]);
    

    
    return (
        <div className="details-container">
            <img src={recipeDetailsData?.recipe?.image_url} alt={recipeDetailsData?.recipe?.title}/>
            <div className="details">
                <h2>{recipeDetailsData?.recipe?.title}</h2>
                <p>{recipeDetailsData?.recipe?.publisher}</p>
                <button onClick={()=>handleButton(recipeDetailsData?.recipe)}>
                    {
                        favouritesList.findIndex(item => item.id ===recipeDetailsData?.recipe?.id) !== -1 ?'Remove as favourites' : "Save as favourites"
                }</button>
                <p>Ingredients:</p>
                
                    {recipeDetailsData?.recipe?.ingredients.map((item,index) => 
                        <li key={index}>
                            <span>{item.quantity}{item.unit}</span>
                            <span>{item.description}</span>
                        </li>
                    )}
                
            </div>
            
        </div>
    )
}