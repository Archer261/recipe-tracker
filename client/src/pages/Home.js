import React from 'react'


function Home() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://placeimg.com/1000/800/arch)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">🍽️ Recipies Your Way!</h1>
                    <p className="mb-5"></p>
                    <label for="my-modal-6" className="btn modal-button text-accent-content bg-primary">Log In</label>
                </div>
            </div>
        </div>
    );
}

export default Home;