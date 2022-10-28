import React from 'react'
import Ingredient from '../components/Ingredient';
import Step from '../components/Step';


const singleRecipe = {
    recipe: 'spaghetti', id: 1, steps: ["Make the food", "Eat food"]
    , ingredients: ["Pasta", "Sauce", "Ground Beef", "Salt", "Pepper"]
};

function Recipe() {

    console.log(singleRecipe.steps)
    return (
        <div class="bg-secondary max-h-screen">
            <div class="grid justify-items-stretch ...">
                <div className="hero bg-base-100">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{singleRecipe.recipe}</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Edit</button>

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
                        <ol className='text-white'>
                            <Step stps={singleRecipe.steps} />
                        </ol>
                    </div>

                    <div className="divider divider-horizontal"></div>

                    {/* Ingredients */}
                    <div className='w-1/2 bg-base-100 h-12 m-5'>
                        <h2 className='text-2xl'>Ingredients:</h2>
                        <div className="divider bg-base-100"></div>
                        <ul className='text-white'>
                            <Ingredient ings={singleRecipe.ingredients} />
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Recipe;
