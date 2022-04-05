import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage';
import SearchRecipes from "./components/SearchRecipes";
import Detailrecipes from './components/Detailrecipes';

function App() {
  return (
    <BrowserRouter>
   
   <SearchRecipes />
    <Routes> 
     
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/home/:id' element={<Detailrecipes />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
