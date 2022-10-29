import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function RecipeCard({ rec }) {
    // console.log(rec.recipe)
    return (
        <div className="card card-compact w-96 bg-base-100 drop-shadow-2xl m-3">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{rec.recipe}</h2>
                <p>Italian Dish</p>

                <div className="card-actions justify-between">
                    <Link to={`/recipe/${rec.id}`}><button className="btn btn-primary">Open</button></Link>
                    <button className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;