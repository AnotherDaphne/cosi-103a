import ReactDOM from "react-dom/client";
import useState from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import AddRecipe from './pages/addrecipe/addrecipe.js';
import Layout from "./pages/layout.js";
import Home from "./pages/home.js";
import Menemen from "./pages/menemen.js";
import Waffles from "./pages/waffles.js";
import Cheesecake from "./pages/cheesecake.js";
import ChickenSalad from "./pages/chickensalad.js";
import KungPaoChicken from "./pages/kungpaochicken.js";
import Spaghetti from "./pages/spaghetti.js";
import CinnamonRolls from "./pages/cinnamonrolls.js";

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
import RecipePage from "./pages/addrecipe/addrecipe.js";

// import AddRecipe from './pages/addrecipe/addrecipe.js';

export default function App() {
  const [newRecipes] = useState([]);
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
          <Route path="/addrecipe" element={<AddRecipe />} />
          {/* add this back when we have the recipe page figured out */}
          {/* <Route path="/recipe/:id" element={<Recipe />} /> */}
          <Route path="/recipes/:id" render={(props) => <RecipePage {...props} recipes={newRecipes} />} />


           <Route path="*" element={<NoPage />} />

         </Route>
       </Routes>
     </BrowserRouter>
  );
}

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,

//     children: [
//       { path: '/', element: <Home /> },
//       { path: 'menemen', element: <Menemen /> },
//       { path: 'waffles', element: <Waffles /> },
//       { path: 'cheesecake', element: <Cheesecake /> },
//       { path: 'chickensalad', element: <ChickenSalad /> },
//       { path: 'kungpaochicken', element: <KungPaoChicken /> },
//       { path: 'spaghetti', element: <Spaghetti /> },
//       { path: 'cinnamonrolls', element: <CinnamonRolls /> },
//       { path: 'team', element: <Team /> },

//       { path: 'cheesecakeCooking', element: <CheesecakeCooking /> },
//       { path: 'chickensaladCooking', element: <ChickensaladCooking /> },
//       { path: 'cinnamonrollsCooking', element: <CinnamonrollsCooking /> },
//       { path: 'spaghettiCooking', element: <SpaghettiCooking /> },
//       { path: 'kungpaoCooking', element: <KungpaoCooking /> },
//       { path: 'wafflesCooking', element: <WafflesCooking /> },
//       { path: 'menemenCooking', element: <MenemenCooking /> },
//       { path: '*', element: <NoPage /> },
//       { path: 'recipes/:id', element: <AddRecipe />}

//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);