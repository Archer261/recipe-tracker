import React from 'react'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Recipe from '../pages/Recipe'
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import NewRecipe from '../pages/NewRecipe';
import MyRecipes from '../pages/MyRecipes';



function App() {
    return (
        <div class="flex flex-col h-screen justify-between">
            <BrowserRouter>
                <Header />
                <div className='relative mt-10'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="recipe/:id" element={<Recipe />} />
                        <Route path="newrecipe" element={<NewRecipe />} />
                        <Route path="myrecipes" element={<MyRecipes />} />
                    </Routes>
                </div>
            </BrowserRouter>

            <Footer />

        </div>
    );
}

export default App;