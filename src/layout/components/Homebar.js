import { useLocation } from "react-router-dom";

import home from "../images/navbar/home.png"

import "../css/navbar.css"

function Homebar() {

    //경로 비교
    const location = useLocation(); //해당 페이지 path 가져오기

    return (
        <>
            <nav>
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

export default Homebar;