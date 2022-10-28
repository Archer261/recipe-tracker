import React from 'react'

function RecipeCard({ rec }) {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"></h2>
                <p>Italian Dish</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Open</button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;