
import { Routes, Route } from "react-router-dom"
import Signup from './Signup'
import PrivateRoute from '../Components/PrivateRoute';
import DashBoard from "./DashBoard.jsx";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute> <DashBoard /></PrivateRoute>} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}
