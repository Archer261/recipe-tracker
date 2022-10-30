
import React from 'react'


function Login() {
    return (
        <>
            {/* <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h2 class="font-bold text-lg">Log In</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Submit</label>
                    </div>
                </div>
            </div> */}

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <div className="mb-4">
                            <div className='flex flex-row justify-between'>
                                <h2 className="font-bold text-lg">Sign In</h2>
                                <label for="my-modal-6" className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </label>
                            </div>
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                            <p className="text-red text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <label for="my-modal-6" className="btn bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                                Sign In
                            </label>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Login;




