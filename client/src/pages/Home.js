import React from 'react'
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://i.picsum.photos/id/493/3872/2592.jpg?hmac=PWm2bsTKWkChWATD_2AD0F_GNifmGvQDPMHZp2sWhk0)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="container max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">🍽️ Recipes Your Way!</h1>
                    <p className="mb-5"></p>

                    <div className='container flex flex-row justify-center'>
                        {Auth.loggedIn() ? (
                            <>
                                <Link to={`/newrecipe`}>
                                    <button className="btn btn-success text-white mr-3 hidden lg:block">Create New Recipe</button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <label for="my-modal-6" className="btn modal-button text-white bg-primary mx-5">Log In</label>
                                <label for="my-modal-5" className="btn modal-button text-accent-content bg-success text-white mx-2">Sign Up</label>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;