import React from 'react'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Recipe from '../pages/Recipe'
import Header from './Header';
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';



function App() {
    return (
        <div class="flex flex-col h-screen justify-between">
            <Header />
            <div className='flex-1'>
                <Recipe />
            </div>
            <Footer />

        </div>
    );
}

export default App;