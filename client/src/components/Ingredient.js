import React from 'react'


function Ingredient({ ings }) {
    return (
        <>
            {ings.map((ele) => (
                <li className='pt-2'>
                    {ele.ingredientName}
                </li>
            )
            )
            }
        </>
    );
}

export default Ingredient;