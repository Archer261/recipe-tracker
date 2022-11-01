import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function SignUp() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                firstName: formState.firstName,
                lastName: formState.lastName,
                email: formState.email,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box bg-base-100">
                    <form className="px-8 pt-6 pb-8 mb-4 bg-white" onSubmit={handleFormSubmit}>
                        <div className="flex flex-row justify-between">
                            <h2 className="font-bold text-lg">Sign Up</h2>
                            <label for="my-modal-5" className="btn btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="firstName"
                                name="firstName"
                                placeholder="First Name"
                                className="input shadow appearance-none border rounded w-full max-w-xs bg-white text-grey-darker "
                                onChange={handleChange}
                            />
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                className="input shadow appearance-none border rounded w-full max-w-xs bg-white text-grey-darker "
                                onChange={handleChange}
                            />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input shadow appearance-none border rounded w-full max-w-xs bg-white text-grey-darker"
                                onChange={handleChange}
                            />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter new password"
                                className="input shadow appearance-none border rounded w-full max-w-xs bg-white text-grey-darker"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="modal-action">
                            <button for="my-modal-5" className="btn" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <input type="checkbox" id="my-modal-5" class="modal-toggle" />
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
            </div> */}
        </>
    );
}

export default SignUp;
