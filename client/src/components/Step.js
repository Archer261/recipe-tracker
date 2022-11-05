import React from 'react'


function Step({ stps }) {
    return (
        <>
            {stps.map((ele) => {
                return <li key={ele.stepText}>{ele.stepText}</li>
            }
            )}
        </>
    );
}

export default Step;