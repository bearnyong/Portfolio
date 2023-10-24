import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";

import Layout from "../layout/Layout";

<script src="./common/jquery-3.7.0.min.js"></script>

function DetailPage() {

    return (
        <>
            <div className="container">
                <About />
                <Skill />
                <Project />
            </div>
        </>
    )
}

export default DetailPage;