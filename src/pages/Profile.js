import React from 'react'
import RecipeList from '../components/RecipeList';


function Profile() {

    return (
        <div class="bg-secondary">
            <div class="grid justify-items-stretch ...">
                <h1 className="justify-self-center text-2xl text-white">My Recipies</h1>
            </div>
            <RecipeList />

        </div>

    );
}

export default Profile;