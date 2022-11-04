import React from 'react';
import RecipeCard from './RecipeCard';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

function RecipeList() {
    // Grab all recipes related to the user
    const { data, isLoading } = useQuery(QUERY_RECIPES);

    if (data === undefined) {
        return console.log('this is a test');
    }

    // Check the current URL, if we are on the /myrecipes page, render all recipes, othwise, render only 5
    var location = window.location.href;

    if (window.location.href.endsWith('/myrecipes')) {
        return (
            <div className="flex flex-wrap justify-center">
                {data.recipes.map((ele) => (
                    <RecipeCard rec={ele} />
                ))}
            </div>
        );
    } else {
        return (
            <div className="flex flex-wrap justify-center">
                {data.recipes.slice(0, 8).map((ele) => (
                    <RecipeCard rec={ele} />
                ))}
            </div>
        );
    }
}

export default RecipeList;
