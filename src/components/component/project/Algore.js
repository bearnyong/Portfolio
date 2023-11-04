import "../../../layout/css/layout.css"

import { NavLink } from 'react-router-dom';

import "../../css/project/project.css"
import algoreTitle from '../../images/project/algore/algoreTitle.png'
import algoreColor from '../../images/project/algore/algoreColor.png'
import algoreERD from '../../images/project/algore/algoreERD.png'
import algoreConfigu from '../../images/project/algore/algoreConfiguration.png'
import algoreGit from '../../images/project/algore/algoreGit.png'

// back skill
import java from "../../images/skill/back/back-java.png"
import security from "../../images/skill/back/back-security.png"
import spring from "../../images/skill/back/back-spring.png"
import mybatis from "../../images/skill/back/back-mybatis.png"
import thymeleaf from "../../images/skill/back/back-thymeleaf.png"

// databace
import oracle from "../../images/skill/databace/data-oracle.png"

// front skill
import css from "../../images/skill/front/front-css.png"
import html from "../../images/skill/front/front-html.png"
import js from "../../images/skill/front/front-js.png"

//dev tool
import intellij from "../../images/skill/devtool/dev-intellij.png"

//collabo tool
import figma from "../../images/skill/collabo/col-figma.png"
import github from "../../images/skill/collabo/col-github.png"
import notion from "../../images/skill/collabo/col-notion.png"

function Algore() {

    return (
        <>
            <div className="algore-section projectnout page">
                {/* header */}
                <div className="project-header">
                    <div class="header_wrap">
                        <img src={algoreTitle} alt="알고레 로고" />
                        <div class="headertxt">
                            <div>
                                <h1>알고레(Algore)</h1>
                                <h2>: 공공데이터를 활용한 요리 레시피에 따른 물가 정보 제공 플랫폼</h2>
                                <ul class="headertxt-ul">
                                    <li>2023.07.06 - 2023.07.23</li>
                                    <li>팀 프로젝트 (95%) </li>
                                </ul>
                                <div class="viewbtn right-flex">
                                    <a href="https://github.com/bearnyong/algore/files/13060160/algorePPT.pdf" target="_blank">Presentation</a>
                                    <a href="https://github.com/bearnyong/algore" target="_blank">View github</a>
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
                                    <p>2023.07.06 - 2023.07.23</p>
                                </li>
                                <li>역할
                                    <a href="https://youtu.be/rDlMqXsJYo4" target="_blank" className="left-flex">
                                        <p>키친가이드(손질법, 보관법)</p>
                                        <div className="project-veiw">
                                            <a href="https://youtu.be/rDlMqXsJYo4" target="_blank">▶</a>
                                        </div>
                                    </a>
                                </li>
                                <li>기여도
                                    <div className="project-border">95%</div>
                                </li>
                                <li class="dot">프로젝트 목표
                                    <p><strong>물가 급등</strong>으로 인한 소비 심리 위축 속에서<br /> 요리에 경험이 없거나 숙련되지 않은 사용자들에게<br /><strong>합리적인 소비 방법</strong>을 제안하였으며,</p>
                                    <p>사용자에게 신뢰감을 줄 수 있는 <strong>공공데이터</strong>를 활용하여<br /> <strong>정확한 물가 정보</strong>를 제공하고자 하였습니다. </p>
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
                                    <p><strong>[ Back-End ]</strong></p>
                                    <p>
                                        <img src={java} />
                                        <img src={spring} />
                                        <img src={security} />
                                        <img src={thymeleaf} />
                                        <img src={mybatis} />
                                    </p>
                                    <br />
                                    <p><strong>[ DataBase ]</strong></p>
                                    <p>
                                        <img src={oracle} />
                                    </p>
                                    <p><strong>[ Front-End ]</strong></p>
                                    <p>
                                        <img src={js} />
                                        <img src={html} />
                                        <img src={css} />
                                    </p>
                                    <p><strong>[ Dev-Tool ]</strong></p>
                                    <p>
                                        <img src={intellij} />
                                    </p>
                                    <p><strong>[ Collabo-Tool ]</strong></p>
                                    <p>
                                        <img src={figma} />
                                        <img src={github} />
                                        <img src={notion} />
                                    </p>
                                    <p>
                                        - Spring Security<br />
                                        사용자 정보를 Session 형태로 세션 저장소에 저장하는 Session 방식을 사용하였습니다.
                                    </p>
                                    <p>
                                        - MyBatis<br />
                                        SQL 쿼리를 직접 작성 후 XML 방식으로 데이터 매핑하여 SQL을 별도의 파일로 분리하여 관리하였습니다.
                                    </p>
                                    <p>
                                        - Thymeleaf<br />
                                        Thymeleaf를 활용하여 프로젝트를 진행하며 컨트롤러가 전달하는 데이터를 이용하여 동적으로 화면을 구성해주었습니다.
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
                                        <img src={algoreColor} alt="알고레 스타일 가이드 컬러 색상" />
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
                                    <p><img src={algoreConfigu} /></p>
                                    <p>[ <strong>로그인 및 마이페이지</strong> ]<br /> - Spring security를 사용하여 세션 방식의 로그인 기능 구현</p>
                                    <p>[ <strong>레시피</strong> ]<br /> -  공공데이터를 활용하여 재료 가격과 함께 레시피를 제공</p>
                                    <p>[ <strong>키친가이드</strong> ]<br /> - 재료를 손질하고 보관하는 방법을 관리자 권한으로 작성</p>
                                    <br />
                                </li>
                                <li class="dot">ERD
                                    <p><img src={algoreERD} /></p>
                                    <p>[ <strong>테이블 설계</strong> ]<br /> - DA#5를 활용하여 회원과 레시피를 중심으로 한 테이블 설계</p>
                                    <br />
                                </li>
                                <li class="dot">Branch 관리
                                    <p><img src={algoreGit} /></p>
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
                                <li>1. youtube 링크 데이터의 활용 이슈
                                    <p>
                                        손질법&보관법 게시글 작성 시
                                        유튜브 영상 플레이어와 썸네일 이미지 두 개의 데이터가 필요했지만
                                        DB에는 하나의 Colum만 설정을 해주었기 때문에 테이블 설계를 다시 해야하는 문제가 발생하였습니다.
                                    </p>
                                    <p>
                                        문제를 해결하기 위해 유튜브의 썸네일과 동영상 링크의 공통 요소를 추출하였고, 중복 데이터를 방지하며 
                                        해당 URL의
                                        <strong>타임리프 문법</strong> 을 통하여
                                        메인 이미지와 동영상 링크를 성공적으로 조회 가능하도록 하였습니다.
                                    </p>
                                </li>
                                <li>2. 손질법- 손질 순서 부분의 다중 INSERT 이슈
                                    <p>
                                        손질법의 손질 순서를 차례로 작성하기 위해
                                        PK값인 손질번호를 참조한 채로 다중 INSERT를 작성해주어야 했지만
                                        Oracle은 다중 INSERT가 되지 않았기에 각 쿼리를 따로 작성해주어 연결해줘야 한다는 문제가 발생하였습니다.
                                    </p>
                                    <p>
                                        문제를 해결하기 위해 시퀀스 값을 두어 .NEXTVAL로 참조키를 주고자 하였지만
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
                                        youtube 링크 데이터의 공통 요소를 활용하여 코드의 중복을 제거하였습니다.
                                    </p>
                                    <p>
                                        팀 규칙과 체크 리스트를 만들어 서로의 진행 상황을 공유하고 소통하였습니다.
                                    </p>
                                </li>
                                <li class="dot">아쉬운 점
                                    <p>
                                        데이터베이스를 각각의 로컬 환경에서 구성하였기 때문에 DB의 변경사항이나 데이터를 각자 관리해야 한다는 점에서 아쉬움이 생겼으며, 이를 통해
                                        공통 환경에서의 기획과 소통이 중요하다는 것을 느낄 수 있었습니다.
                                    </p>
                                </li>
                                <li class="dot">프로젝트 완료 리뷰
                                    <p>
                                        프로젝트를 시작하기 전에는 평소 팀원분들과의 소통이 잘 되어 왔다고 생각했기 때문에 프로젝트가 원활하게 진행될 것이라는 기대가 있었습니다.
                                        하지만 프로젝트가 진행될수록 프로젝트의 기획부터 프로그램 작성까지 서로의 의사소통을 통해 맞춰 나가는 과정이 정말 중요하다는 생각이 들었습니다.
                                        답이 명확하게 정해져 있는 것이 아니고 서로가 생각을 맞춰 나가며 결과물을 도출해야 했기 때문에 생각해야 할 부분이 굉장히 많았습니다.
                                    </p>
                                    <p>
                                        특히, 프로젝트를 진행하면서 데이터 베이스의 컬럼들을 여러 번 수정해야 할 때가 가장 난감했습니다.
                                        각자의 로컬 환경에서 직접 데이터를 입력하며 화면을 구성하는 과정 속에서 데이터 베이스의 컬럼 수정 하나로 팀원 전체가 같은 작업을 반복해야 했기 때문에
                                        공통 환경에서의 의사소통은 정말 중요한 요소라는 것을 느끼게 되었습니다. 그래도 수정 사항이 있을 때마다 바로 공유하고 소통했기에 큰 일 없이 잘 마무리 되었다고 생각합니다.
                                    </p>
                                    <p>
                                        또한 깃허브를 함께 공유하며 협업 기능을 사용하게 되면서 같은 파일을 여러 명이 수정했을 때 발생 하는 충돌 문제를 겪고 소통하면서
                                        충돌을 해결하는 방법과 효율적으로 파일 정리를 어떻게 해야 하는지 등 여러 부분을 배울 수 있어서 좋았습니다.
                                    </p>
                                    <p>
                                        결론적으로 이번 프로젝트를 통해 팀 프로젝트는에 있어서 가장 중요한 점은 의사소통이 되어야 한다는 사실임을 깨닫게 되었습니다.
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
                        <li><a href="https://github.com/bearnyong/algore" target="_blank">View github</a></li>
                        <li>
                            <NavLink to="/project/toegeungil" target="_blank">
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

export default Algore;