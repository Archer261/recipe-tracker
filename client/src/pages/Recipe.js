import React, { useEffect, useState } from 'react'
import Ingredient from '../components/Ingredient';
import Step from '../components/Step';
import { useParams } from 'react-router-dom';
import { QUERY_RECIPE } from '../utils/queries';
import { useQuery } from '@apollo/client';



function Recipe() {

    const { id } = useParams()



    const { data, isLoading } = useQuery(QUERY_RECIPE, {
        variables: { _id: id }
    })
    if (isLoading)
        return (<div>page loading</div>)



    if (data) return console.log(data.recipeName)
        (


            <div class="flex justify-center bg-base-100 max-h-screen py-10">
                <div class="container flex flex-col justify-items-stretch ...">
                    <div className="hero bg-secondary rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">{data.recipe.recipeName}</h1>
                                <p className="py-6">{data.recipeName}</p>
                                <button className="btn btn-warning">Edit</button>

                            </div>
                        </div>
                    </div>


                    {/* Divider */}
                    <div className="divider bg-base-100"></div>
                    {/* Divider */}

                    <div className="flex bg-base-200 max-h-full">
                        {/* Steps */}
                        <div className='w-1/2 bg-base-200 h-12 m-5'>
                            <h2 className='text-2xl'>Steps:</h2>
                            <div className="divider bg-base-100"></div>
                            <ol role="list" class='list-decimal marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400'>
                                <Step stps={data.recipe.steps} key={data.recipe._id} />
                            </ol>
                        </div>

                        <div className="divider divider-horizontal"></div>

                        {/* Ingredients */}
                        <div className='w-1/2 bg-base-100 h-12 m-5'>
                            <h2 className='text-2xl'>Ingredients:</h2>
                            <div className="divider bg-base-100"></div>
                            <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
                                <Ingredient ings={data.recipe.ingredients} key={data.recipe._id} />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
}
// }

export default Recipe;
