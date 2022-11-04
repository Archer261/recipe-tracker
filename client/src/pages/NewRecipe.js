import { from } from '@apollo/client';
import { React, useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import FileUpload from '../components/FileUpload';
import SampleCard from '../components/SampleCard';
import NewRecipeForm from '../components/NewRecipeForm';

function NewRecipe() {


    return (
        <div className='container flex flex-col py-10'>
            <div class="grid justify-items-stretch my-5 ...">
                <h1 className='justify-self-center text-3xl md:text-4xl font-medium mb-2 text-white'>Create New Recipe</h1>
            </div>
            <div className='flex flex-col mx-5 my-5'>

                <NewRecipeForm />


            </div>
        </div>
    );
}

export default NewRecipe;