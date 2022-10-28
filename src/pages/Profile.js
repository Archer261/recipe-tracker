import React from 'react'
import Recipies from '../components/Recipes';

const test = ["test", 'test', 'test'];

function Profile({ test }) {
    return (
        <div>
            <div class="flex flex-wrap justify-center bg-secondary">
                {test.map(ele => (<Recipies />))}
            </div>
        </div>

    );
}

export default Profile;