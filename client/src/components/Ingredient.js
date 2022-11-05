import React from 'react'


function Ingredient({ ings }) {
    return (
        <>
            {ings.map((ele) => (
                <li>
                    {ele.ingredientName}
                </li>
            )
            )
            }
        </>
    );
}

export default Ingredient;