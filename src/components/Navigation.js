import React from 'react'

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
                <a className="btn btn-ghost normal-case text-xl">🍽️ Recipe Tracker</a>
            </div>
            <div className="flex-none gap-2">

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
                                Profile
                            </a>
                        </li>
                        <li><a>Recipies</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;