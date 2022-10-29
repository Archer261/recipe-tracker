import React from 'react'
import RecipeCard from './RecipeCard'

const recList = [
    { recipe: 'spaghetti', id: 1 },
    { recipe: 'pizza', id: 2 },
    { recipe: 'cake', id: 3 },
    { recipe: 'cake', id: 3 },
    { recipe: 'cake', id: 3 },
    { recipe: 'cake', id: 3 },
    { recipe: 'cake', id: 3 },
    { recipe: 'cake', id: 3 },
    { recipe: 'cake', id: 3 },
    { recipe: 'cake', id: 3 },
]

function RecipeList() {
    return (
        <div className='flex flex-wrap justify-center'>
            {recList.map((ele) => (
                <RecipeCard rec={ele} />
            )
            )}
        </div>
    );
}

export default RecipeList;