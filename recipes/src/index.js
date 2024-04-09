import ReactDOM from "react-dom/client";
import Layout from "./pages/layout.js";
import Home from "./pages/home.js";
import Menemen from "./pages/menemen.js";
import Waffles from "./pages/waffles.js";
import Cheesecake from "./pages/cheesecake.js";
import ChickenSalad from "./pages/chickensalad.js";
import KungPaoChicken from "./pages/kungpaochicken.js";
import Spaghetti from "./pages/spaghetti.js";
import CinnamonRolls from "./pages/cinnamonrolls.js";

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import RecipeApp from './pages/addrecipe/recipeAddApp.js'; 
import AddRecipe from './pages/addrecipe/addrecipe.js';
import CheesecakeCooking from "./pages/cookingModepages/cheesecakeCooking.js";
import ChickensaladCooking from "./pages/cookingModepages/chickensaladCooking.js";
import CinnamonrollsCooking from "./pages/cookingModepages/cinnamonrollsCooking.js";
import SpaghettiCooking from "./pages/cookingModepages/spaghettiCooking.js";
import MenemenCooking from "./pages/cookingModepages/menemenCooking.js";
import KungpaoCooking from "./pages/cookingModepages/kungpaoCooking.js";
import WafflesCooking from "./pages/cookingModepages/wafflesCooking.js";

import Team from "./pages/team.js";
import NoPage from "./pages/nopage.js";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menemen" element={<Menemen />}/>
          <Route path="waffles" element={<Waffles />} />
          <Route path="cheesecake" element={<Cheesecake />} />
          <Route path="chickensalad" element={<ChickenSalad />} />
          <Route path="kungpaochicken" element={<KungPaoChicken />} />
          <Route path="spaghetti" element={<Spaghetti />} />
          <Route path="cinnamonrolls" element={<CinnamonRolls />} />
          <Route path="Team" element={<Team />} />

          <Route path= "cheesecakeCooking" element ={<CheesecakeCooking />} />
          <Route path= "chickensaladCooking" element ={<ChickensaladCooking />} />
          <Route path= "cinnamonrollsCooking" element ={<CinnamonrollsCooking />} />
          <Route path= "spaghettiCooking" element ={<SpaghettiCooking />} />
          <Route path= "kungpaoCooking" element ={<KungpaoCooking />} />
          <Route path= "wafflesCooking" element ={<WafflesCooking />} />
          <Route path= "menemenCooking" element ={<MenemenCooking />} />
          {/* <Route path="/addrecipe" element={<AddRecipe />} /> */}
          <Route path= "./pages/addrecipe/recipeAddApp.js" element={<RecipeApp />} />
          <Route path="/" element={<Layout />} />
          <Route path="/add-recipe" element={<AddRecipe />} />    
          {/* add this back when we have the recipe page figured out */}
          {/* <Route path="/recipe/:id" element={<Recipe />} /> */}
          

          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);