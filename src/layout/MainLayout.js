import { Outlet } from "react-router-dom";

import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Homebar from "./components/Homebar";

import "./css/layout.css"

function MainLayout() {

    return (
        <>
            <div className="container">
                <Profile/>
                <Navbar />
                <Homebar/>
                <Outlet/>
            </div>
        </>
    )
}

export default MainLayout;