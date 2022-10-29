import React from 'react'


function Step({ stps }) {
    return (
        <>
            {stps.map((ele) => (
                <li className='border'>{ele}</li>
            )
            )}
        </>
    );
}

export default Step;