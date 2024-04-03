import React from 'react'
import { Routes, Route } from "react-router-dom"
import Signup from './Signup'
import Home from './Home';
import PrivateRoute from '../Components/PrivateRoute';

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute> <Home /></PrivateRoute>} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}
