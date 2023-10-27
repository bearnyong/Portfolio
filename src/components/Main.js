import { NavLink } from "react-router-dom";

import "./css/main.css"

import bear from './images/bear.png'

function Main() {

    return (
        <>
            <header>
                <div class="main-board">
                    <div className="main-marB2">Hello!</div>
                    <div class="middle">
                        <div>
                            <p>I'm</p>
                        </div>
                        <div class="roller">
                            <span id="rolltext">
                                indefatigable<br />
                                passionate<br />
                                interacting<br />
                                thinking
                            </span>
                        </div>
                        <div class="web">
                            <p>Web Developers</p>
                        </div>
                    </div>
                    <div className="main-marT2">Ko, Min-young!</div>
                    <NavLink to='minyoung'>
                        <img className="bearimg" src={bear} alt="click me" />
                    </NavLink>
                    {/* <div className="arrow">▴</div> */}
                    <div className="click-me">Click me!</div>
                </div>
            </header>
        </>
    )
}

export default Main;