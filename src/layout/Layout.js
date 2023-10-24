import { Outlet } from "react-router-dom";

import Profile from "./Profile";
import Navbar from "./Navbar";

import "./css/layout.css"

function Layout() {

    return (
        <>
            <div className="container">
                <Profile/>
                <Navbar />
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;