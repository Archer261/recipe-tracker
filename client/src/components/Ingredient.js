import React from 'react'


function Ingredient({ ings }) {
    return (
        <>
            {ings.map((ele) => (
                <li>
                    {ele}
                </li>
            )
            )
            }
        </>
    );
}

export default Ingredient;