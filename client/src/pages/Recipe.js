import React from 'react'
import Ingredient from '../components/Ingredient';
import Step from '../components/Step';

const singleRecipe = {
    recipe: 'spaghetti', id: 1, steps: ["Make the food", "Eat food"]
    , ingredients: ["Pasta", "Sauce", "Ground Beef", "Salt", "Pepper"]
};

function Recipe() {


    return (
        <div class="flex justify-center bg-base-100 max-h-screen py-10">
            <div class="container flex flex-col justify-items-stretch ...">
                <div className="hero bg-secondary rounded-2xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{singleRecipe.recipe}</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                            <Step stps={singleRecipe.steps} />
                        </ol>
                    </div>

                    <div className="divider divider-horizontal"></div>

                    {/* Ingredients */}
                    <div className='w-1/2 bg-base-100 h-12 m-5'>
                        <h2 className='text-2xl'>Ingredients:</h2>
                        <div className="divider bg-base-100"></div>
                        <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
                            <Ingredient ings={singleRecipe.ingredients} />
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Recipe;
