import React from 'react';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Recipe from '../pages/Recipe';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import NewRecipe from '../pages/NewRecipe';
import MyRecipes from '../pages/MyRecipes';
import AddNewBtn from './AddNewBtn';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div class="">
                <BrowserRouter>
                    <Header />
                    <div className="flex justify-center py-10">
                        {/* <AddNewBtn /> */}
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
        </ApolloProvider>
    );
}

export default App;
