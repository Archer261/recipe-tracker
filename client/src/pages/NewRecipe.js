import { from } from '@apollo/client';
import { React, useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import FileUpload from '../components/FileUpload';
import SampleCard from '../components/SampleCard';
import NewRecipeForm from '../components/NewRecipeForm';







function NewRecipe() {
    const navigate = useNavigate();

    let recObj = {}

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    return (
        <>
            <div class="grid justify-items-stretch my-5 ...">
                <h1 className='justify-self-center text-3xl md:text-4xl font-medium mb-2 text-white'>Create New Recipe</h1>
            </div>
            <div className='flex flex-col mx-5 my-5'>


                <div class="form-control shadow-2xl p-10  bg-secondary rounded-md">
                    <div className='flex flex-row justify-between mx-10 items-center'>
                        <div className='flex flex-col shadow-2x p-10 w-full'>
                            <label className="input-group input-group-sm my-2 text-white">
                                <span>Recipe Name</span>
                                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs my-2 bg-white" />
                            </label>

                            <label className="input-group input-group-sm my-2 text-white">
                                <span>Description</span>
                                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs my-2 bg-white" />
                            </label>

                            <FileUpload />
                        </div>
                        <SampleCard />
                    </div>
                </div>



                <div className="divider"></div>


                <NewRecipeForm />

                <div class="flex justify-between ...">
                    <button class="btn btn-lg bg-primary-focus m-10" onClick={() => navigate(-1)}>Cancel</button>
                    <button class="btn btn-lg bg-primary-focus m-10">Save</button>
                </div>

            </div>
        </>
    );
}

export default NewRecipe;