import '../../css/ditail/skill.css'

function Skill() {

    return (
        <>
            <section id="skill" className="skill page project-section">
                <div class="skill-section">
                    <div>
                        <div className="skillTitle">_ Skill</div>
                        <ul class="skill-list">
                            <li className='skill-flex'>
                                <div>
                                    <h4>JAVA</h4>
                                    <h5>Spring, JPA, Servlet, Thymeleaf, JUnit, RestAPI</h5>
                                </div>
                                <span class="hover-text">
                                    <p>Java 기본 문법 이해, Spring boot를 활용한 동적 웹 사이트 구현</p>
                                    <p>Spring RESTful API를 활용하여 [퇴근길] 웹 서비스를 개발.</p>
                                    <p>Thymeleaf를 활용하여 스프링 서버에서 HTML을 동적으로 렌더링하여 [알고레] 프로젝트를 진행하였습니다.</p>
                                    <p>mvc 구조로 사용자 인터페이스와 비지니스 로직을 분리개발</p>
                                    <p>sql문이 아닌 method를 통해 db 조작 비지니스 로직 구성</p>
                                </span>
                            </li>
                            <li className='skill-flex'>
                                <div>
                                    <h4>Databace</h4>
                                    <h5>Oracle, MySQL, (JAVA- JDBC, MyBatis)</h5>
                                </div>
                                <span class="hover-text">
                                    <p>mybatis를 이용 db연결 데이터전달 숙달</p>
                                    <p>MySQL의 기본 쿼리문을 활용하여 데이터베이스와 대화할 수 있습니다.</p>
                                    <p></p>
                                    <p></p>
                                </span>
                            </li>
                            <li className='skill-flex'>
                                <div>
                                    <h4>React</h4>
                                    <h5>JavaScript, HTML, CSS</h5>
                                </div>
                                <span class="hover-text">
                                    <p>JavaScript 라이브러리인 React를 활용하여 </p>
                                    <p>html의 기본적인 태그와 css 활용능력 향상</p>
                                    <p>HTML 페이지를 설계하고 Thymeleaf 템플릿 문법을 이용해서 데이터를 원하는 위치에 넣을 수 있습니다.</p>
                                    <p>부트스트랩을 활용해서 만든 뒤 자세한 설정은 CSS로 조절할 수 있도록 훈련했습니다. 모바일에서는 조금 부족하여 완성도 높은 서비스를 위해 기본적인 반응형에 대해 공부하고 있습니다.</p>
                                </span>
                            </li>
                            <li className='skill-flex'>
                                <h4>GitHub, Figma, miro</h4>
                                <span class="hover-text">
                                    <p>GitHub Organizations를 통한 협업 및 Git Flow 전략을 사용하여 프로젝트 진행</p>
                                    <p>GitHub를 이용한 배포와 CLI 기반 GitBash 사용 가능</p>
                                    <p></p>
                                    <p></p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill;