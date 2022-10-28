import React from 'react'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Navigation from './Navigation'
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';



function App() {
    return (
        <>
            <Navigation />
            <Profile />
            <Footer />

        </>
    );
}

export default App;