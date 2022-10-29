import { from } from '@apollo/client';
import { React, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import FileUpload from '../components/FileUpload';
import SampleCard from '../components/SampleCard';







function NewRecipe() {

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


                <div class="form-control shadow-2xl p-5">
                    <div className='flex flex-row justify-between mx-10'>
                        <div className='flex flex-col'>
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


                <h2 className='justify-self-center'>Steps</h2>
                <div class="form-control shadow-2xl p-5">
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs m-2 bg-white" />

                    <button onClick={handleClick}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button>
                    {Array.from(Array(counter)).map((c, index) => {
                        return <div className='flex'><input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs m-2 bg-white" /> <button className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button></div>;
                    })}
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