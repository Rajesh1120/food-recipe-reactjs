import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Favourites from "./pages/Favourites.jsx";
import {Route, Routes} from "react-router-dom"
import NavBar from "./components/Navbar.jsx";
import "./index.css"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
              <Route 
                    path ="/"
                    element={<Home />}></Route>
              <Route
                    path="/recipe-item/:id"
                    element={<Details />}></Route>
              <Route 
                    path="/favourites"
                    element={<Favourites />}>
                    </Route>
      </Routes>
    </div>
  );
}

export default App;
