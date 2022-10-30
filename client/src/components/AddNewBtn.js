import React from "react";
import { Link } from "react-router-dom";

function AddNewBtn() {

    return (

        <a className="top-0:hidden fixed bottom-40 right-20 z-50 w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto">
            <Link to={`/newrecipe`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </Link>
        </a>
    );
}

export default AddNewBtn;