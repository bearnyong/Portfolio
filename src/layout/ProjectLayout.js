import { Outlet } from "react-router-dom";

import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Homebar from "./components/Homebar";

import "./css/layout.css"

function ProjectLayout() {

    return (
        <>
            <div className="container">
                <Profile/>
                <Homebar/>
                <Outlet/>
            </div>
        </>
    )
}

export default ProjectLayout;