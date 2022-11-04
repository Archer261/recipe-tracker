import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"


function RecipeCard({ rec }) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };



    return (
        <div className="card card-compact w-96 bg-base-100 drop-shadow-2xl m-3">
            <figure><img src={rec.image} alt="Shoes" /></figure>
            <div className="card-body h-auto">
                <h2 className="card-title">{rec.recipeName}</h2>
                <div className='pb-2'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <p className='overflow-y-hidden h-20'>{rec.description}</p>
                <div className="card-actions justify-between">
                    <Link to={`/recipe/${rec._id}`}><button className="btn btn-primary">Open</button></Link>
                    <button className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;