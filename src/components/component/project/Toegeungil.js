import "../../../layout/css/layout.css"

import { NavLink } from 'react-router-dom';

import "../../css/project/project.css"
import toegeungilTitle from '../../images/project/toegeungil/toegeungilTitle.png'
import toegeungilColor from '../../images/project/toegeungil/toegeungilColor.png'

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
                                        <strong>Restful API</strong>를 활용하여 <strong> 취미생활</strong>을 갖고자 하는 직장인들에게 <br/>다양한 <strong>취미와 여가 생활의 방향성</strong>을 제시하며,
                                    </p>
                                    <p>
                                        <strong>취미</strong>가 비슷하거나 같은 사용자들끼리의 <strong>모임 형성 및 참여</strong>와<br />
                                        <strong>취미에 대한 고민과 방법</strong>을 나눌 수 있는 커뮤니티 형성을 <br/>제공하고자 하였습니다.
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
                        <div class="overview_txt">
                            <ul class="overview_txt_ul" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li class="dot">사용 기술
                                    <div className="project-skill">Java</div>
                                    <p>
                                        &nbsp;&nbsp;- Spring Framwork의 security, thymeleaf, web을 build하여 <br />
                                        &nbsp;&nbsp;- JPA <br />
                                    </p>
                                    <div className="project-skill">MySQL</div>
                                    <p>
                                        &nbsp;&nbsp;- Oracle Databace를 활용하여 <br />
                                    </p>
                                    <div className="project-skill">React</div>
                                    <p>
                                        &nbsp;&nbsp;- JavaScript의 라이브러리인 React를 활용하여 featch API 호출<br />
                                        &nbsp;&nbsp;- Html<br />
                                        &nbsp;&nbsp;- CSS<br />
                                    </p>
                                    <div className="project-skill">Tool</div>
                                    <p>
                                        &nbsp;&nbsp;- IntelliJ<br />
                                        &nbsp;&nbsp;- VScode<br />
                                    </p>
                                    <div className="project-skill">collabo</div>
                                    <p>
                                        <br />
                                        &nbsp;&nbsp;- Github<br />
                                        &nbsp;&nbsp;- Figma<br />
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
                                    <p><strong>공공데이터</strong>를 사용하였기에 <strong>신뢰감</strong>을 형성해줄 수 있는 컬러인 <strong>파란색</strong>을 메인컬러로 설정하였습니다.<br /></p>
                                    <p><strong>레시피</strong>가 중점인 웹 페이지이기에<br /><strong>이미지</strong> 위주의 메인 화면을 구상하였습니다.</p>
                                </li>
                                <li class="dot">Keyword
                                    <div class="keyword-wrap">
                                        <span>#신뢰감</span>
                                        <span>#생동감</span>
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

                {/* publishing */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after">Composition</h1>
                        <div class="overview_txt">
                            <ul class="overview_txt_ul pro-config" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li class="dot">메뉴 구조도
                                    <p><img src="" /></p>
                                    <p>[ <strong>로그인 및 마이페이지</strong> ]<br /> - Spring security를 사용하여 세션 방식의 로그인 기능 구현</p>
                                    <p>[ <strong>레시피</strong> ]<br /> -  공공데이터를 활용하여 재료 가격과 함께 레시피를 제공</p>
                                    <p>[ <strong>키친가이드</strong> ]<br /> - 재료를 손질하고 보관하는 방법을 관리자 권한으로 작성</p>
                                    <br />
                                </li>
                                <li class="dot">ERD
                                    <p><img src="" /></p>
                                    <p>[ <strong>테이블 설계</strong> ]<br /> - DA#5를 활용하여 회원과 레시피를 중심으로 한 테이블 설계</p>
                                    <br />
                                </li>
                                <li class="dot">Branch 관리
                                    <p><img src="" /></p>
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
                                <li>1. Node.js 이미지 서버 구축 이슈 (+DB)
                                    <p>
                                        손질법&보관법 게시글 조회 부분에서 유튜브 영상 플레이어
                                        유튜브 링크를 삽입하여 동영상을 실행시켜주는 뭐시깽이와
                                        Database에 동영상 링크 Colum만 설정을 해주었기 때문에
                                        메인 사진을 설정해주지 못해 테이블 설계를 다시 해야하는 문제가 생겼습니다.
                                    </p>
                                    <p>
                                        유튜브의 썸네일과 동영상 링크의 공통 요소를 추출하여
                                        해당 URL의
                                        <strong>타임리프 문법</strong> 을 통하여
                                        메인 이미지와 동영상 링크를 성공적으로 조회 가능하도록 하였습니다.
                                    </p>
                                </li>
                                <li>2. JavaScript node(퇴근길은 이미지 서버)
                                    <p>
                                        손질법과 보관법 게시글 작성 시,
                                        JavaScript를 활용하여 해당 과정의 순서를 추가하거나 삭제하는
                                    </p>
                                    <p>

                                    </p>
                                </li>
                                <li>3. CSS 반응형 웹 제작 이슈
                                    <p>
                                        손질법의 손질 순서를 차례로 작성하기 위해
                                        PK값인 손질번호를 참조한 채로 다중 INSERT를 작성해주어야 했지만
                                        Oracle은 다중 INSERT가 되지 않았기에 각 쿼리를 따로 작성해주어 연결해줘야 한다는 문제가 발생하였습니다.
                                    </p>
                                    <p>
                                        시퀀스 값을 두어 .NEXTVAL로 참조키를 주고자 하였지만
                                        무결성 제약 조건 위배로 에러가 발생하였습니다.
                                        이를 해결하기 위해 시퀀스를 만드는 함수를 만들어 해당 함수를 계속 호출해주는 방식으로 다중 INSERT에 성공하였습니다.
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
                                        반응형 웹사이트를 만들어 보는 것은 처음이라 걱정 반 기대 반인 마음으로 프로젝트를 진행하였습니다.<br /> 모바일, 태블릿, 데스크탑 세 가지 유형을 모두 고려해야 했기 때문에
                                        디자인부터 퍼블리싱까지 여러 시행착오가 있었습니다.
                                    </p>
                                </li>
                                <li class="dot">부족한 점
                                    <p>
                                        반응형 웹사이트를 만들어 보는 것은 처음이라 걱정 반 기대 반인 마음으로 프로젝트를 진행하였습니다.<br /> 모바일, 태블릿, 데스크탑 세 가지 유형을 모두 고려해야 했기 때문에
                                        디자인부터 퍼블리싱까지 여러 시행착오가 있었습니다.
                                    </p>
                                </li>
                                <li class="dot">배운 점
                                    <p>
                                        반응형 웹사이트를 만들어 보는 것은 처음이라 걱정 반 기대 반인 마음으로 프로젝트를 진행하였습니다.<br /> 모바일, 태블릿, 데스크탑 세 가지 유형을 모두 고려해야 했기 때문에
                                        디자인부터 퍼블리싱까지 여러 시행착오가 있었습니다.
                                    </p>
                                </li>
                                <li class="dot">프로젝트 완료 리뷰
                                    <p> 반응형 웹사이트를 만들어 보는 것은 처음이라 걱정 반 기대 반인 마음으로 프로젝트를 진행하였습니다.<br /> 모바일, 태블릿, 데스크탑 세 가지 유형을 모두 고려해야 했기 때문에
                                        디자인부터 퍼블리싱까지 여러 시행착오가 있었습니다. </p>
                                    <p> springframework.web.servlet.ModelAndView모바일 우선 반응형 웹사이트를 만들었기 때문에 모바일, 태블릿, 데스크탑 순으로 퍼블리싱을 진행하였는데, 각 디바이스 별로 코드를 수정하게 되면 다른 디바이스의 레이아웃이 영향을 받는
                                        경우가
                                        많았습니다. 이러한 문제들을 고려해서 코드를 짜고 수정하는 것이 가장 힘들었던 부분이였던 것 같습니다.</p>
                                    <p> 그럼에도 불구하고 반응형 웹 사이트를 제작하는 것은 저에게 굉장히 흥미로운 일이였습니다. 하나의 html 구조를 기반으로 각 디바이스에 맞는 css 코드를 작성하는 게 굉장히
                                        매력적으로
                                        다가왔으며 코드를
                                        짜면서 생기는 여러 문제들을 해결하며 큰 즐거움을 느꼈습니다.
                                    </p>
                                    <p> 앞으로도 기회가 된다면 지금까지 제작한 다른 웹사이트들도 반응형으로 제작할 계획입니다. 이번 경험을 통해 더 많은 것을 배우고 발전해나갈 수 있기를 바라며 글을 마치겠습니다 :)
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
                            <NavLink to="/project/algore">
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