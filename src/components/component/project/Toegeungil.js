import "../../../layout/css/layout.css"

import { NavLink } from 'react-router-dom';

import "../../css/project/project.css"
import toegeungilTitle from '../../images/project/toegeungil/toegeungilTitle.png'
import toegeungilColor from '../../images/project/toegeungil/toegeungilColor.png'
import toegeungilArchitecture from '../../images/project/toegeungil/toegeungilArchitecture.png'
import toegeungilConfiguration from '../../images/project/toegeungil/toegeungilConfiguration.png'
import toegeungilGit from '../../images/project/toegeungil/toegeungilGit.png'

// back skill
import java from "../../images/skill/back/back-java.png"
import jpa from "../../images/skill/back/back-jpa.png"
import node from "../../images/skill/back/back-node.png"
import security from "../../images/skill/back/back-security.png"
import spring from "../../images/skill/back/back-spring.png"

// database
import mysql from "../../images/skill/database/back-mysql.png"

// front skill
import css from "../../images/skill/front/front-css.png"
import html from "../../images/skill/front/front-html.png"
import react from "../../images/skill/front/front-react.png"
import js from "../../images/skill/front/front-js.png"

//dev tool
import intellij from "../../images/skill/devtool/dev-intellij.png"
import vscode from "../../images/skill/devtool/dev-vscode.png"

//collabo tool
import figma from "../../images/skill/collabo/col-figma.png"
import github from "../../images/skill/collabo/col-github.png"
import miro from "../../images/skill/collabo/col-miro.png"


function Toegeungil() {

    return (
        <>
            <div className="algore-section projectnout page">
                {/* header */}
                <div className="project-header">
                    <div class="header_wrap">
                        <img src={toegeungilTitle} alt="퇴근길 로고" />
                        <div class="headertxt">
                            <div>
                                <h1>퇴근길(Toe-geun-gil)</h1>
                                <h2>: Restful API를 활용한 직장인들을 위한 취미 공유 플랫폼</h2>
                                <ul class="headertxt-ul">
                                    <li>2023.09.01 - 2023.09.24</li>
                                    <li>팀 프로젝트 (100%) </li>
                                </ul>
                                <div class="viewbtn right-flex">
                                    <a href="https://github.com/Teddybear-6/.github/files/12898340/PPT.pdf" target="_blank">Presentation</a>
                                    <a href="https://github.com/Teddybear-6" target="_blank">View github</a>
                                    <a href="http://toegeungil.shop/" target="_blank">toegeungil.shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* overview */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after">Overview</h1>
                        <div class="overview_txt">
                            <ul class="overview_txt_ul" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li>작업기간
                                    <p>2023.09.01 - 2023.09.24</p>
                                </li>
                                <li>역할
                                    <a href="http://toegeungil.shop/social" target="_blank" className="left-flex">
                                        <p>소셜(Social)</p>
                                        <div className="project-veiw">
                                            <a href="http://toegeungil.shop/social" target="_blank">▶</a>
                                        </div>
                                    </a>
                                </li>
                                <li>기여도
                                    <div className="project-border">100%</div>
                                </li>
                                <li class="dot">프로젝트 목표
                                    <p>
                                        <strong>Restful API</strong>를 활용하여 <strong> 취미생활</strong>을 갖고자 하는 직장인들에게 <br />다양한 <strong>취미와 여가 생활의 방향성</strong>을 제시하며,
                                    </p>
                                    <p>
                                        <strong>취미</strong>가 비슷하거나 같은 사용자들끼리의 <strong>모임 형성 및 참여</strong>와<br />
                                        <strong>취미에 대한 고민과 방법</strong>을 나눌 수 있는 커뮤니티 형성을 <br />제공하고자 하였습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* technology */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after2">Project<br />Skill</h1>
                        <div class="overview_txt skill-images">
                            <ul class="overview_txt_ul" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li class="dot">기술 스택 및 개발 환경

                                    <p><br /><strong>[ Back-End ]</strong></p>
                                    <p>
                                        <img src={java} />
                                        <img src={spring} />
                                        <img src={security} />
                                        <img src={jpa} />
                                        <img src={node} />
                                    </p>
                                    <p><strong>[ DataBase ]</strong></p>
                                    <p>
                                        <img src={mysql} />
                                    </p>
                                    <p><strong>[ Front-End ]</strong></p>
                                    <p>
                                        <img src={react} />
                                        <img src={js} />
                                        <img src={html} />
                                        <img src={css} />
                                    </p>
                                    <p><strong>[ Dev-Tool ]</strong></p>
                                    <p>
                                        <img src={intellij} />
                                        <img src={vscode} />
                                    </p>
                                    <p><strong>[ Collabo-Tool ]</strong></p>
                                    <p>
                                        <img src={figma} />
                                        <img src={github} />
                                        <img src={miro} />
                                    </p>
                                    <p>
                                        - Spring Security<br />
                                        클라이언트의 요청 시마다 사용자의 자격 증명 정보를 보내는 Token 방식을 사용하였습니다.
                                    </p>
                                    <p>
                                        - JPA<br />
                                        객체와 관계형 데이터베이스 간의 매핑을 통해
                                        자동으로 테이블을 만들어주고 쿼리를 작성해주는 인터페이스인
                                        JPA를 활용하였습니다.
                                    </p>
                                    <p>
                                        - Node.js<br />
                                        node.js로 이미지 서버를 구축하여
                                        취미 및 소셜에 등록되는 이미지를
                                        로컬 서버에 저장하여 호출하는 방식으로 사용하였습니다.
                                    </p>
                                    <p>
                                        - React<br />
                                        자바스크립트의 라이브러리인 react를 활용하여 컴포넌트를 조합, 그리고
                                        fetch API를 활용하여 json 형식의 데이터를 호출하여 프론트를 구성하였습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* styleguide */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after">Style guide</h1>
                        <div class="overview_txt">
                            <ul class="overview_txt_ul" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li class="dot">Concept
                                    <p>취미 활동을 통해 <strong>편안함</strong>을 제공해주는 것을 목표로 하여<br />
                                        <strong>안정, 평화, 휴식</strong>을 상징하는 초록색과 갈색을 메인 컬러로 설정하였습니다. </p>
                                </li>
                                <li class="dot">Keyword
                                    <div class="keyword-wrap">
                                        <span>#휴식</span>
                                        <span>#취미</span>
                                    </div>
                                </li>
                                <li class="dot colorImg">Color
                                    <p>
                                        <img src={toegeungilColor} alt="알고레 스타일 가이드 컬러 색상" />
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* composition */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after">Composition</h1>
                        <div class="overview_txt">
                            <ul class="overview_txt_ul pro-config" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li class="dot">메뉴 구조도
                                    <p><img src={toegeungilConfiguration} /></p>
                                    <p>[ <strong>로그인 및 마이페이지</strong> ]<br /> - Spring security를 사용하여 토큰 방식의 로그인 기능 구현</p>
                                    <p>[ <strong>취미_Hobby</strong> ]<br /> -  강사가 강의하는 다양한 취미 클래스 참여</p>
                                    <p>[ <strong>소셜_Social</strong> ]<br /> - 취미가 비슷하거나 같은 사용자들끼리의 모임형성 및 참여</p>
                                    <br />
                                </li>
                                <li class="dot">시스템 아키텍처
                                    <p><img src={toegeungilArchitecture} /></p>
                                    <br />
                                </li>
                                <li class="dot">Branch 관리
                                    <p><img src={toegeungilGit} /></p>
                                    <p>[ <strong>main</strong> ]<br /> - 실제 배포를 위한 main 브랜치</p>
                                    <p>[ <strong>develop</strong> ]<br /> - main 브랜치에 영향을 주지 않으면서 개발하기 위해서 사용</p>
                                    <p>[ <strong>feature</strong> ]<br /> - 기능 단위로 develop 서버에 영향을 주지 않기 위해서 사용</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* problem & solution */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after2">Problem<br />& Solution</h1>
                        <div class="overview_txt">
                            <ul class="overview_txt_ul" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                {/* <li class="dot">문제 및 해결 */}
                                <li>1. Node.js 이미지 스트리밍 서버 구축 이슈
                                    <p>
                                        Byte 데이터를 DB에 바로 저장하는 방식의 이미지 업로드와 다운로드를 구현하였지만
                                        계속된 이미지 축척으로 용량이 과부하되어 이미지가 로딩이 길어지는 이슈가 발생하였습니다.
                                    </p>
                                    <p>
                                        이를 보완하기 위해 Node.js 이미지 스트리밍 서버를 구축하여
                                        DB에 이미지 URL을 입력하여 Node.js가 이미지를 응답해줄 수 있도록 구성하였습니다.
                                    </p>
                                </li>
                                <li>2. 공통 서버 이슈
                                    <p>
                                        강사님께서 개인 PC에 DB 서버와 config 서버 환경을 구축해주셨지만
                                        많은 양의 데이터로 인해 서버가 계속 다운되는 이슈가 발생하였습니다.
                                    </p>
                                    <p>
                                        공통 서버를 사용하기 위해 학원 측의 양해를 구해 학원 PC로 port forwarding을 통해 DB서버, 이미지 스트리밍 서버, config 서버를 실행시키고
                                        퇴근길 사이트를 배포하였으며, 현재까지도 퇴근길 서비스가 배포될 수 있도록 서버가 실행 중에 있습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* review */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after">Review</h1>
                        <div class="overview_txt">
                            <ul class="overview_txt_ul" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li class="dot">잘한 점
                                    <p>
                                        팀원들과의 협업이 문제없이 원활하게 진행되었으며,<br />
                                        각자 맡은 부분이 아니더라도 어려운 부분이 생겼을 경우 서로 도우며 해결해 나갔습니다.
                                    </p>
                                </li>
                                <li class="dot">아쉬운 점
                                    <p>
                                        레이아웃을 구성 스타일을 모두 px 값으로 주어 100%의 화면 크기에서 레이아웃을 벗어나게 되는 아쉬움이 있었습니다.
                                    </p>
                                    <p>
                                        @media 쿼리를 이용하여 전체 사이즈를 줄이고, px 값을 모두 rem 크기로 변경해 주었지만 배포된 사이트인만큼 전체적인 레이아웃을 잘못 잡았었다는 점이 아쉬움으로 남았습니다.
                                    </p>
                                </li>
                                <li class="dot">프로젝트 완료 리뷰
                                    <p> 웹을 기획하고 배포하는 과정까지 전체적으로 큰 문제 없이 잘 마무리 되었다고 생각합니다.  </p>
                                    <p> 
                                        JPA와 React를 배우고 응용하는 과정을 겪어야 했기 때문에 걱정이 앞섰지만 공통된 컴포넌트를 분리할 수 있었고,
                                        팀원들끼리 서로 소통하며 도왔기에 생각했던 기능들을 모두 구현할 수 있었습니다.
                                        오래 걸리고 어려웠던 부분들도 있었지만 끝까지 포기하지 않고 노력했기 때문에 나온 결과물이라고 생각합니다.
                                    </p>
                                    <p>
                                        또 개인적으로 이번 프로젝트가 좋았던 점은 제가 그동안 부족했던 부분을 객관적으로 파악할 수 있었다는 점 입니다.
                                        관련 코드나 오류를 검색할 때 무작정 생각나는 키워드를 작성하여 찾아왔지만 키워드의 선택과 핵심을 파악하여 검색하는 것이 중요하다는 점을 알게 되었고,
                                        조금 더 효율적인 검색 방법을 공부할 수 있는 계기가 되었습니다.
                                    </p>
                                    <p> 팀원들 모두 한 명도 빠짐없이 열심히 해주셨기에 좋은 결과가 나왔던 것 같고 이번 경험을 통해 한 발자국 더 발전한 것 같아서 감사합니다 :)
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 위로 가기 버튼 */}
                <div class="arrowbtn">
                    <a href="#" class="btn">
                        ⇡
                    </a>
                </div>

                {/* footer */}
                <footer>
                    <ul class="footer_ul">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                                <path
                                    d="m274-450 227 227q9 9 9 21t-9 21q-9 9-21 9t-21-9L181-459q-5-5-7-10t-2-11q0-6 2-11t7-10l278-278q9-9 21-9t21 9q9 9 9 21t-9 21L274-510h496q13 0 21.5 8.5T800-480q0 13-8.5 21.5T770-450H274Z" />
                            </svg>
                            <NavLink to="/minyoung#project">
                                Back to portfolio
                            </NavLink>
                        </li>
                        <li><a href="https://github.com/Teddybear-6" target="_blank">View github</a></li>
                        <li>
                            <NavLink to="/project/algore" target="_blank">
                                Next project
                            </NavLink>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                                <path
                                    d="M686-450H190q-13 0-21.5-8.5T160-480q0-13 8.5-21.5T190-510h496L459-737q-9-9-9-21t9-21q9-9 21-9t21 9l278 278q5 5 7 10t2 11q0 6-2 11t-7 10L501-181q-9 9-21 9t-21-9q-9-9-9-21t9-21l227-227Z" />
                            </svg>
                        </li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Toegeungil;