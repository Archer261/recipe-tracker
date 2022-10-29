import React from 'react'
import RecipeList from '../components/RecipeList';


function MyRecipes() {

    return (
        <div className='flex flex-col items-center'>
            <div class="bg-secondary py-40">
                <div class="grid pt-20 justify-items-stretch ...">
                    <h1 className="justify-self-center text-3xl md:text-4xl font-medium mb-2 text-white">My Recipies</h1>
                </div>
                <RecipeList />

            </div >
        </div>
    );
}

export default MyRecipes;