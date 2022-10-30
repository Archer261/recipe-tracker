import React from 'react'


function Step({ stps }) {
    return (
        <>
            {stps.map((ele) => (
                <li>{ele}</li>
            )
            )}
        </>
    );
}

export default Step;