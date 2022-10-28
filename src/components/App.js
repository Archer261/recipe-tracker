import React from 'react'
import Home from '../pages/Home'
import Navigation from './Navigation'
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';



function App() {
    return (
        <>
            <Navigation />
            <Home />
            <Footer />

        </>
    );
}

export default App;