import React from 'react'
import { Routes, Route } from "react-router-dom"
import Signup from './Signup'
import Home from './Home';

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}
