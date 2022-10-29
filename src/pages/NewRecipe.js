import React from 'react'
import { Outlet, Link } from 'react-router-dom'


function NewRecipe() {

    let recObj = {}

    return (
        <>
            <div class="grid justify-items-stretch my-5 ...">
                <h1 className='justify-self-center'>Create New Recipe</h1>
            </div>
            <div className='flex flex-col mx-5 my-5'>

                <div class="form-control">
                    <span class="label-text">Recipe Name</span>
                    <input type="text" placeholder="Type here"
                        class="input input-md input-bordered input-info w-full max-w-sm m-2 bg-white" />

                    <input type="text" placeholder="Type here"
                        class="input input-md input-bordered input-info w-full max-w-sm m-2 bg-white" />
                </div>

                <div className="divider"></div>


                <h2 className='justify-self-center'>Steps</h2>
                <div class="form-control">
                    <input type="text" placeholder="Type here"
                        class="input input-md input-bordered input-info w-full max-w-sm m-2 bg-white" />

                    <input type="text" placeholder="Type here"
                        class="input input-md input-bordered input-info w-full max-w-sm m-2 bg-white" />
                </div>

                <div class="flex justify-between ...">
                    <button class="btn btn-lg bg-primary-focus m-10">Cancel</button>
                    <button class="btn btn-lg bg-primary-focus m-10">Save</button>
                </div>

            </div>
        </>
    );
}

export default NewRecipe;