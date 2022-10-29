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

    console.log(profile)
    return (
        <div className="navbar bg-base-100 w-full flex flex-row gap-x-2 justify-evenly py-1 drop-shadow-md-top">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-white"><Link to={`/`} >🍽️ Recipe Tracker</Link></a>
            </div>
            <div className="flex-none gap-2">

                <Link to={`/myrecipes`}><button className="btn btn-primary text-white mr-3">My Recipies</button></Link>
                <Link to={`/newrecipe`}><button className="btn btn-success text-white mr-3">New Recipe</button></Link>

                {/* Profile Name */}
                <h2 className='text-white'>{profile.name}</h2>


                <div className="dropdown dropdown-end">
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
                        <li><a><Link to={`/myrecipes`}>Recipies</Link></a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;