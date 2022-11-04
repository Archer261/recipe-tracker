import React from 'react'
import Navigation from './Navigation';


function Header() {
    return (
        <div>
            <header className="fixed z-40 shadow-md bg-white w-screen">
                <Navigation />
            </header>
        </div>
    );
}

export default Header;