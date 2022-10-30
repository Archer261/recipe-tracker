import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Profile from '../pages/Profile'

const navigateToProfile = () => {
    navigateToProfile('/profile')
}

const navigateHome = () => {
    navigateHome('/');
};

const profile = {
    name: "Dustin T.",
    id: 1,
}

function Navigation() {
    return (
        <div className="navbar bg-base-100 w-full flex flex-row gap-x-2 justify-evenly py-1 drop-shadow-md-top">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-white"><Link to={`/`} >🍽️ Recipe Tracker</Link></a>
            </div>



            {/* Hide this div on collapse */}

            <div className="flex-row gap-2">

                <Link to={`/myrecipes`}><button className="btn btn-primary text-white mr-3 hidden lg:block">My Recipies</button></Link>
                <Link to={`/newrecipe`}><button className="btn btn-success text-white mr-3 hidden lg:block">New Recipe</button></Link>

                {/* Profile Name */}
                <h2 className='text-white hidden lg:block'>{profile.name}</h2>


                <div className="dropdown dropdown-end hidden lg:block">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                <Link to={`/profile`} >Profile</Link>
                            </a>
                        </li>
                        <li><a><Link to={`/myrecipes`}>Recipes</Link></a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

            </div>

            {/* Hamburger */}
            <div id className="dropdown dropdown-end lg:hidden">
                <label tabIndex={0} className="btn btn-circle swap swap-rotate">
                    <input type="checkbox" />
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>New Recipe</a></li>
                    <li><a><Link to={`/myrecipes`}>My Recipes</Link></a></li>
                    <li><a><Link to={`/myrecipes`}>Profile</Link></a></li>
                </ul>
            </div>



            {/* <div className="flex-none lg:hidden">
                <label tabIndex={0} htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
             */}



        </div>
    );
}

export default Navigation;