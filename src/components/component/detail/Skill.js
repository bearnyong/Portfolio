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
                                    <p>Java 기본 문법 이해, Spring Framework를 활용한 웹 사이트 구현</p>
                                    <p>mvc 구조로 사용자 인터페이스와 비지니스 로직 분리개발</p>
                                    <p>Spring RESTful API를 활용한 [퇴근길] 프로젝트</p>
                                    <p>Thymeleaf를 활용하여 서버에서 HTML을 동적 렌더링한 [알고레] 프로젝트</p>
                                </span>
                            </li>
                            <li className='skill-flex'>
                                <div>
                                    <h4>Database</h4>
                                    <h5>Oracle, MySQL, (JAVA- JDBC, MyBatis)</h5>
                                </div>
                                <span class="hover-text">
                                    <p>Mybatis 및 JDBC를 통한 db연결 데이터 전달 숙달</p>
                                    <p>MySQL 및 Oracle의 기본 쿼리문을 활용하여 데이터베이스와 대화 가능</p>
                                </span>
                            </li>
                            <li className='skill-flex'>
                                <div>
                                    <h4>React</h4>
                                    <h5>JavaScript, HTML, CSS</h5>
                                </div>
                                <span class="hover-text">
                                    <p>JavaScript 라이브러리인 React를 활용한 [퇴근길] 프로젝트</p>
                                    <p>Thymeleaf 템플릿 문법을 이용해서 데이터를 원하는 위치에 삽입</p>
                                    <p>HTML 페이지 설계 및 기본적인 태그와 css 활용능력 향상</p>
                                    <p>부트스트랩을 활용해서 만든 뒤 CSS로 세부 속성 조절</p>
                                </span>
                            </li>
                            <li className='skill-flex'>
                                <h4>GitHub, Figma, miro</h4>
                                <span class="hover-text">
                                    <p>GitHub Organizations를 통한 협업 및 Git Flow 전략 사용</p>
                                    <p>Figma를 이용한 레이아웃 UI 설계 및 웹 디자인</p>
                                    <p>miro를 활용한 Domain Driven Design 설계 경험</p>
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