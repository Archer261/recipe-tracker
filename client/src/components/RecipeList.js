import React from 'react'
import RecipeCard from './RecipeCard'
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

// const recList = [
//     { recipe: 'spaghetti', id: 1, rating: 3 },
//     { recipe: 'pizza', id: 2, rating: 4 },
//     { recipe: 'cake', id: 3, rating: 2 },
//     { recipe: 'cake', id: 3, rating: 3 },
//     { recipe: 'cake', id: 3, rating: 1 },
//     { recipe: 'cake', id: 3, rating: 3 },
//     { recipe: 'cake', id: 3, rating: 4 },
//     { recipe: 'cake', id: 3, rating: 5 },
//     { recipe: 'cake', id: 3, rating: 2 },
//     { recipe: 'cake', id: 3, rating: 3 },
// ]



function RecipeList() {

    const { data, loading, error } = useQuery(QUERY_RECIPES);

    console.log(data)

    // Check the current URL, if we are on the /myrecipes page, render all recipes, othwise, render only 5
    var location = window.location.href

    if (window.location.href.endsWith('/myrecipes')) {
        return (
            <div className='flex flex-wrap justify-center'>
                {data.recipes.map((ele) => (
                    <RecipeCard rec={ele} />
                )
                )}
            </div>
        )
    } else {
        return (
            <div className='flex flex-wrap justify-center'>
                {data.recipes.slice(0, 8).map((ele) => (
                    <RecipeCard rec={ele} />
                )
                )}
            </div>
        );
    }


    ;
}

export default RecipeList;