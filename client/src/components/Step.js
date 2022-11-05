import React from 'react'


function Step({ stps }) {
    return (
        <>
            {stps.map((ele) => {
                return <li key={ele.stepText} className='pt-2'>
                    {ele.stepText}
                </li>
            }
            )}
        </>
    );
}

export default Step;