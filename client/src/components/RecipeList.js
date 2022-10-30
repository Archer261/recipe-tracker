import React from 'react'
import RecipeCard from './RecipeCard'

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

    // Check the current URL, if we are on the /myrecipes page, render all recipes, othwise, render only 5
    var location = window.location.href

    if (window.location.href.endsWith('/myrecipes')) {
        location = <div className='flex flex-wrap justify-center'>
            {recList.map((ele) => (
                <RecipeCard rec={ele} />
            )
            )}
        </div>;
    } else {
        location = <div className='flex flex-wrap justify-center'>
            {recList.slice(0, 8).map((ele) => (
                <RecipeCard rec={ele} />
            )
            )}
        </div>;
    }


    return (
        <>
            {location}
        </>

    );
}

export default RecipeList;