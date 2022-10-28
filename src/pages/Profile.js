import React from 'react'
import RecipeCard from '../components/RecipeCard';
import RecipeList from '../components/RecipeList';


function Profile({ test }) {

    return (
        <div>

            <div class="flex flex-wrap justify-center bg-secondary">
                <RecipeList />
            </div>
        </div>

    );
}

export default Profile;