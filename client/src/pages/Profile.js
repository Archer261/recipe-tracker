import React from 'react'
import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';


function Profile() {

    const userName = localStorage.getItem('userName')

    return (
        <div class="bg-secondary">
            <div className='container flex lg:flex-row px-10 py-20 w-min lg:w-screen justify-center lg:justify-around h-auto lg:h-content'>
                <div className='container flex flex-col max-w-min lg:mx-20 my-10 justify-center text-white pl-10'>
                    <img className="mask mask-squircle h-auto max-w-fit" src="https://placeimg.com/160/160/arch" />
                    <div className='container flex flex-col my-2 w-full bg-primary'>
                        <span className='w-auto'>Username: {userName}</span>
                        <span className='w-auto'>Number of Recipes: 5</span>
                    </div>
                </div>
                <div className="container max-w-sm h-auto bg-base-100 shadow-xl lg:mx-20 rounded-lg ">
                    <div className="card-body">
                        <h2 className="card-title">Bio:</h2>
                        <p>I enjoy discovering new recipes and putting my own spin on them.</p>

                    </div>
                </div>
            </div>



            <div className="divider"></div>


            <div class="grid justify-items-stretch ...">
                <h1 className="justify-self-center text-3xl md:text-4xl font-medium mb-2 text-white"><span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">My Recipies</span></h1>
            </div>
            <RecipeList />
            <div class="grid justify-items-stretch ...">
                <div className='justify-self-center pb-20 my-10'><Link to={`/myrecipes`}><button className="btn btn-wide">Show All Recipes</button></Link></div>
            </div>
        </div>

    );
}

export default Profile;