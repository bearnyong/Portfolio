import { NavLink } from "react-router-dom";

import home from "./images/navbar/home.png"
import about from "./images/navbar/about.png"
import skill from "./images/navbar/skill.png"
import project from "./images/navbar/project.png"

import "./css/navbar.css"

function Navbar() {
    return (
        <>
            <nav>
                <div>
                    {/* 00_home */}
                    <a href='/' className={({ isActive }) => isActive ? "navActive" : ""}>
                        <img src={home} />
                    </a>
                    {/* 01_about */}
                    <a href='#about' className={({ isActive }) => isActive ? "navActive" : ""}>
                        <img src={about} />
                    </a>
                    {/* 02_skill */}
                    <a href='#skill' className={({ isActive }) => isActive ? "navActive" : ""}>
                        <img src={skill} />
                    </a>
                    {/* 03_project */}
                    <a href='#project' className={({ isActive }) => isActive ? "navActive" : ""}>
                        <img src={project} />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;