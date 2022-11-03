import React, { useState } from 'react'
import RecipeCard from './RecipeCard'
import { useQuery } from '@apollo/client'
import QUERY_RECIPES from '../utils/queries'




const recList = [
    { recipe: 'spaghetti', id: 1, rating: 3 },
    { recipe: 'pizza', id: 2, rating: 4 },
    { recipe: 'cake', id: 3, rating: 2 },
    { recipe: 'cake', id: 3, rating: 3 },
    { recipe: 'cake', id: 3, rating: 1 },
    { recipe: 'cake', id: 3, rating: 3 },
    { recipe: 'cake', id: 3, rating: 4 },
    { recipe: 'cake', id: 3, rating: 5 },
    { recipe: 'cake', id: 3, rating: 2 },
    { recipe: 'cake', id: 3, rating: 3 },
]

function RecipeList() {

    const { data } = useQuery(QUERY_RECIPES);

    console.log(data)

    var location = window.location.href

    if (window.location.href.endsWith('/myrecipes')) {
        console.log(data)

        location = <div className='container flex flex-wrap justify-center'>
            {data.map((ele) => (
                <RecipeCard rec={ele} />
            )
            )}
        </div>;
    } else {
        location = <div className='container flex flex-wrap justify-center'>
            {data.slice(0, 8).map((ele) => (
                <RecipeCard rec={ele} />
            )
            )}
        </div>;
    }

    console.log(data)


    return (
        <>
            {location}
        </>

    );
}

export default RecipeList;