import React from 'react'


function Ingredient({ ings }) {
    return (
        <>
            {ings.map((ele) => (
                <li className='border'>
                    {ele}
                </li>
            )
            )
            }
        </>
    );
}

export default Ingredient;