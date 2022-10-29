import React from 'react'
import RecipeList from '../components/RecipeList';


function MyRecipes() {

    return (
        <div class="bg-secondary">
            <div class="grid justify-items-stretch ...">
                <h1 className="justify-self-center text-3xl md:text-4xl font-medium mb-2 text-white">My Recipies</h1>
            </div>
            <RecipeList />

        </div >
    );
}

export default MyRecipes;