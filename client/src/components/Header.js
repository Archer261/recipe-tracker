import React from 'react'
import Navigation from './Navigation';


function Header() {
    return (
        <div>
            <header className="top-0 shadow-md bg-white w-full">
                <Navigation />
            </header>
        </div>
    );
}

export default Header;