import React from 'react'


function Home() {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(https://placeimg.com/1000/800/arch)` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">🍽️ Recipies Your Way!</h1>
                    <p class="mb-5"></p>
                    <label for="my-modal-6" class="btn modal-button text-accent-content bg-primary">Log In</label>
                </div>
            </div>
        </div>
    );
}

export default Home;