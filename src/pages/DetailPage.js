import About from "../components/component/detail/About"
import Skill from "../components/component/detail/Skill"
import Project from "../components/component/detail/Project"

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