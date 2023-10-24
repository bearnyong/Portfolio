import { NavLink } from "react-router-dom";

import "./css/main.css"

import bear from './images/bear.png'

function Main() {

    return (
        <>
            <header>
                <div class="main-board">
                    <div>Hello!</div>
                    <div class="main-flex">
                        <p>I'm</p>
                        <div class="main-roller">
                            <div className="main-roller-ani">
                                <div className="marT20">indefatigable</div>
                                <div>Passionate</div>
                                <div>interacting</div>
                            </div>
                        </div>
                        <div>
                            <p>Web Developers</p>
                        </div>
                    </div>
                    <div>Ko, Min-young!</div>
                    <NavLink to='detail'>
                        <img className="bearimg" src={bear} alt="click me" />
                    </NavLink>
                    <div className="arrow">▴</div>
                    <div className="click-me">Click me!</div>
                </div>
            </header>
        </>
    )
}

export default Main;