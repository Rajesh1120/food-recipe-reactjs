import { NavLink } from "react-router-dom";
import { Globalcontext } from "../store/GlobalContext"
import { useContext } from "react";

export default function NavBar() {
  const {searchParam, setSearchParam , handleSubmit}=useContext(Globalcontext);
  
  return (
    <nav>
      <div className="recipe-input">
        <h2>
          <NavLink to={"/"}>Food Recipe</NavLink>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value ={searchParam} 
            onChange={(event)=>setSearchParam(event.target.value)}
            placeholder="enter the items" />
      </form>
      <div className="home-favourites">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/favourites"}>Favourites</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
