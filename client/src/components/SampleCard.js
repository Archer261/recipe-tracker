import React from 'react'
import ReactStars from "react-rating-stars-component"


function SampleCard({ rec }) {

    return (
        <div className='flex flex-col'>
            <div class="grid justify-items-stretch ...">
                <h2 className='justify-self-center text-white'>Sample Recipe Card</h2>
            </div>
            <div className="card card-compact w-96 bg-base-100 drop-shadow-2xl m-3">

                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{rec.recipeName}</h2>
                    <p></p>
                    <div className='pb-2'>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>

                    {/* <p className='overflow-y-hidden h-20'>{rec.description}</p> */}

                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">Open</button>
                        <button className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SampleCard;