
import React from 'react'


function SignUp() {
    return (
        <>
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box bg-base-100">
                    <form class="px-8 pt-6 pb-8 mb-4">
                        <h2 class="font-bold text-lg">Sign Up</h2>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Example: Bob Smith" class="input input-bordered w-full max-w-xs bg-info" />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email" class="input input-bordered w-full max-w-xs bg-info" />
                            <label class="label">
                                <span class="label-text">Username</span>
                            </label>
                            <input type="email" placeholder="Enter your username" class="input input-bordered w-full max-w-xs bg-info" />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Enter new password" class="input input-bordered w-full max-w-xs bg-info" />
                        </div>
                        <div class="modal-action">
                            <label for="my-modal-5" class="btn">Submit</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;




