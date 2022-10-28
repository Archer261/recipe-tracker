import React from 'react'
import RecipeCard from './RecipeCard'

const recList = [
    { recipe: 'spaghetti', id: 1 },
    { recipe: 'pizza', id: 2 },
    { recipe: 'cake', id: 3 }
]

function RecipeList() {
    return (
        <div>
            {recList.map((ele) => (
                <RecipeCard rec={ele} />
            )
            )}
            {/* <RecipeCard rec={recList} /> */}
        </div>
    );
}

export default RecipeList;