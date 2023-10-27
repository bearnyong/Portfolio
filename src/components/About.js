import "../layout/css/layout.css"
import "./css/about.css"

function About() {

    return (
        <>
            <section id="about" className="about page about-section">
                <div className="about-board">
                    <div class="about-intro">
                        <div className="about-pageTitle">About Me”</div>
                        <div>
                            <p className="about-me">
                                내일 더 발전할 모습을 위해<br />
                                오늘 더 생각하는 고민영입니다 :)</p>
                            <p className="about-comment">개발 과정에서 오류를 찾아냈을 때의 그 순간은, 저에게 가장 매력적으로 다가옵니다.<br />
                                결과를 위해 오랜 시간이 걸리더라도 끈기와 열정으로 끊임없이 미로를 탐험하는 개발자로 성장하겠습니다.</p>
                        </div>
                        <hr />
                    </div>
                    <div class="sec1_bottom">
                        <h2>“ 키워드로 표현하는 저는?</h2>
                        <div>
                            <h4>#열정적인</h4>
                            <h6>#INFP</h6>
                            <h6>#끈기</h6>
                        </div>
                        <div>
                            <h5>#긍정적</h5>
                            <h4>#의사소통</h4>
                            <h3>#앞으로_전진!</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;