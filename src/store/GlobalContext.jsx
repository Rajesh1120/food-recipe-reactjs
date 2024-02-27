import { createContext } from "react";
import { useState } from "react";
export const Globalcontext = createContext(null);

export default function GlobalcontextProvider({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData]=useState();
  const [favouritesList,setfavouritesList]=useState([]);
  const [isFavourite,setisFavourite]=useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }
  function handleButton(getCurrentItem){
    

    const index=favouritesList.findIndex(item => item.id === getCurrentItem.id)
    console.log(index,getCurrentItem)
  
    if (index === -1){
      setisFavourite(true);
      setfavouritesList((prevList)=>([
        ...prevList,
      getCurrentItem
      ]))
      
    }else{
      favouritesList.splice(index);
      setisFavourite(false);
    }
    
    
    // let cpyfavourite=[...favouritesList]
    // console.log(cpyfavourite)
    // const index=cpyfavourite.findIndex(item => item.id=getCurrentItem.id)
    // if (index === -1){
    //     cpyfavourite.push(getCurrentItem)
    //     setisFavourite(false)
    // }
    // else{
    //     cpyfavourite.splice(index)
    // }
    // setfavouritesList(cpyfavourite)
    
  }
  
  


  return (
    <Globalcontext.Provider
      value={{ searchParam,
         setSearchParam,
          handleSubmit, 
          recipeList,
          recipeDetailsData,
          setRecipeDetailsData,
           loading,
        favouritesList,
        isFavourite,
        setisFavourite,
    setfavouritesList,handleButton }}
    >
      {children}
    </Globalcontext.Provider>
  );
}
