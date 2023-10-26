import { useLocation } from "react-router-dom";

import home from "./images/navbar/home.png"
import about from "./images/navbar/about.png"
import skill from "./images/navbar/skill.png"
import project from "./images/navbar/project.png"

import "./css/navbar.css"

function Navbar() {

    //경로 비교
    const location = useLocation(); //해당 페이지 path 가져오기

    return (
        <>
            <nav>
                <div className="nav-top">
                    <div>
                        {/* 01_about */}
                        <a href='/minyoung#about' className={(location.hash)=="#about" ? "navActive" : ""}>
                            <img src={about} />
                        </a>
                        {/* 02_skill */}
                        <a href='/minyoung#skill' className={(location.hash)=="#skill" ? "navActive" : ""}>
                            <img src={skill} />
                        </a>
                        {/* 03_project */}
                        <a href='/minyoung#project' className={(location.hash)=="#project" ? "navActive" : ""}>
                            <img src={project} />
                        </a>
                    </div>
                </div>
                <div className="nav-bottom">
                    {/* 00_home */}
                    <a href='/' className={({ isActive }) => isActive ? "navActive" : ""}>
                        <img src={home} />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;