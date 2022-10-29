import React from 'react'
import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';


function Profile() {

    return (
        <div class="bg-secondary">
            <div className="artboard artboard-horizontal phone-2 drop-shadow-2xl">
                <div className='flex flex-row px-10 py-20 w-screen justify-between'>
                    <div className='flex flex-col mx-20 my-10 justify-center text-white pl-10'>
                        <img className="mask mask-squircle h-auto" src="https://placeimg.com/160/160/arch" />
                        <span>Name</span>
                        <span>Created Recipes: 50</span>
                        <span>Saved Recipes: 50</span>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl mx-20 ">
                        <div className="card-body">
                            <h2 className="card-title">Bio:</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div class="grid justify-items-stretch ...">
                <h1 className="justify-self-center text-3xl md:text-4xl font-medium mb-2 text-white">My Recipies</h1>
            </div>
            <RecipeList />
            <div class="grid justify-items-stretch ...">
                <div className='justify-self-center pb-20 my-10'><Link to={`/myrecipes`}><button className="btn btn-wide">Show All Recipes</button></Link></div>
            </div>
        </div>

    );
}

export default Profile;