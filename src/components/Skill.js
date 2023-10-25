import './css/skill.css'

function Skill() {

    return (
        <>
            <section id="skill" className="skill page project-section">
                <div className="pageTitle">Skill</div>
                <div class="sec2 flex column">
                    <ul class="skill_list flex column">
                        <li class="flex">
                            <div>
                            <h4>JAVA & Spring</h4>
                            <div>JDBC, MyBatis, Servlet, Thymeleaf, JUnit, JPA</div>
                            </div>
                            <span class="hidden">
                                <p>웹 접근성을 고려한 시맨틱 태그, flex, grid, position 사용</p>
                                <p>미디어쿼리를 적용한 반응형 웹 / 태블릿 / 모바일 화면 제작, 다양한 이벤트, 애니메이션 구현</p>
                            </span>
                        </li>
                        <li class="flex">
                            <h4>Oracle, MySQL</h4>
                            <span class="hidden">
                                <p>자바스크립트 기본 문법 이해, ES6+ 문법 자바스크립트 활용</p>
                                <p>비동기 통신 ​Ajax를 이용한 JSON 데이터 활용</p>
                            </span>
                        </li>
                        <li class="flex">
                            <h4>JavaScript(React), HTML, CSS</h4>
                            <span class="hidden">
                                <p> VSCode / Figma</p>
                                <p><strong>ADOBE</strong> Photoshop, Illustrator, Indesign, Premiere Pro, After Effects, XD
                                </p>
                            </span>
                        </li>
                        <li class="flex">
                            <h4>GitHub, Figma, miro</h4>
                            <span class="hidden">
                            <p>웹 접근성을 고려한 시맨틱 태그, flex, grid, position 사용</p>
                                <p>미디어쿼리를 적용한 반응형 웹 / 태블릿 / 모바일 화면 제작, 다양한 이벤트, 애니메이션 구현</p>
                                <p>Git으로 코드 버전 관리 및 GitHub Organizations를 통한 협업 가능</p>
                                <p>GitHub를 이용한 배포와 CLI 기반 GitBash 사용 가능</p>
                            </span>
                        </li>
                        <li class="flex">
                            <h4>Eclipse, IntelliJ, VSCode</h4>
                            <span class="hidden">
                                <p>퍼블리싱 웹페이지 구축 카페24 웹사이트 관리 UX / Ui 디자인</p>
                                <p>책자 브로셔 지류 편집 및 카드뉴스 배너 상세페이지 등 그래픽 디자인 외 영상편집</p>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Skill;