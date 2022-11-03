import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('here: ' + formState.email);
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);

            localStorage.setItem('userName', formState.email);
        } catch (e) {
            console.log(e);
        }
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

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleFormSubmit}>
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                            <div className="mb-4">
                                <div className="flex flex-row justify-between">
                                    <h2 className="font-bold text-lg">Sign In</h2>
                                    <label for="my-modal-6" className="btn btn-circle">
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
                                <label className="block text-grey-darker text-sm font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="******************"
                                    onChange={handleChange}
                                />
                                <p className="text-red text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <label
                                    for="my-modal-6"
                                    className="btn bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                                >
                                    <button type="submit">Sign In</button>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
