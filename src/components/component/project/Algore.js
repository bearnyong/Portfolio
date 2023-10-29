import "../../../layout/css/layout.css"

import "../../css/project/algore.css"
import algoreTitle from '../../images/project/algoreTitle.png'

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
                                <h2>만랩커피 반응형 웹사이트 <span>(Main page)</span></h2>

                                <ul class="headertxt-ul">
                                    <li>2023.06.08-2023.06.14</li>
                                    <li>팀 프로젝트 (100%) </li>
                                </ul>
                                <div class="viewbtn right-flex">
                                    <a href="../10000LAB/10000LAB.html" target="_blank">View github</a>
                                    <a href="../10000LAB/10000LAB.html" target="_blank">presentation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* overview */}
                <section class="overview">
                    <div class="common_wrap">
                        <h1>Overview</h1>
                        <div class="overview_txt">
                            <ul class="overview_txt_ul" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li class="dot">목표
                                    <p>기존 만랩커피 사이트의 포인트 컬러를 살려 디자인하고자 하였습니다.</p><br />
                                    <p>카페 브랜드인 만큼 기존의 딱딱한 이미지보단 <strong>귀엽고 친근한 이미지</strong>로 리디자인 하여<br /> <strong>소비자들이 더욱 부담 없이 즐길 수
                                        있도록</strong> 웹
                                        사이트를 제작하는 것을 목표로
                                        삼았습니다.</p>
                                </li>
                                <li>작업기간
                                    <p>2023.06.08-2023.06-14</p>
                                </li>
                                <li>기여도
                                    <p>100%</p>
                                </li>
                                <li>웹사이트 유형
                                    <p>Mobile 우선 반응형 웹</p>
                                    <p> -Mobile : 768px &nbsp; -Tablet: 1200px &nbsp; -PC: 1920px</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* technology */}
                <section class="technology">
                    <div class="common_wrap">
                        <h1>technology</h1>
                        <div class="technology_txt" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                            <p class="dot">사용 기술</p>
                            <ul class="technology_ul1">
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                            <ul class="technology_ul2">
                                <li>JavaScript</li>
                                <li>jQuery</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* styleguide */}
                <section class="styleguide">
                    <div class="common_wrap">
                        <h1>Style guide</h1>
                        <div class="styleguide_txt">
                            <ul class="styleguide_ul" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                                <li class="dot">Concept
                                    <p>기존 <strong>만랩커피 사이트의 포인트 컬러를 유지</strong>하면서 귀여운 느낌으로 리디자인 하였습니다. 카페 브랜드인 만큼 음료의 이미지를 크게 넣어 강조하였습니다.</p>
                                </li>
                                <li class="dot">Keyword
                                    <div class="keyword-wrap">
                                        <span>#귀여운</span>
                                        <span>#생동감</span>
                                    </div>
                                </li>
                                <li class="dot">Color
                                    <img src="./images/color.png" alt="스타일 가이드 컬러 색상" />
                                </li>
                                <li class="dot">Typography
                                    <div class="typo-wrap">
                                        <div class="typo-left">
                                            <h3>나눔스퀘어라운드(한글)</h3>
                                            <p>가나다AaBbCc0123 Bold</p>
                                            <p>가나다AaBbCc0123 ExtraBold </p>
                                        </div>
                                        <div class="typo-right">
                                            <h3>Rubik(영문)</h3>
                                            <p>AaBbCcDd0123 Bold</p>
                                            <p>AaBbCcDd0123 ExtraBold</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* publishing */}
                <section class="publishing">
                    <div class="common_wrap">
                        <h1>Publishing</h1>
                        <div class="publishing_txt" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                            <h3 class="dot">퍼블리싱</h3>
                            <ul class="publishing_ul">
                                <li>- flex, position을 사용한 다양한 레이아웃 구현</li>
                                <li>- CSS3 애니메이션 속성 활용 움직이는 글씨, 이미지 구현</li>
                                <li>- 모바일 버전 메뉴 아이콘 클릭시 드롭다운 메뉴 구현</li>
                                <li>- 미디어 쿼리를 활용한 반응형 웹 제작</li>
                                <li>- Swiper.js 라이브러리 활용한 슬라이드</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* problem & solution */}
                <section class="problem_solution">
                    <div class="common_wrap">
                        <h1>Problems<br /><span>&</span>Solution</h1>
                        <div class="problem_solution_txt" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                            <h3 class="dot">문제 및 해결</h3>
                            <ul class="problem_solution_ul">
                                <li>1. Arrivals 섹션 음료 이미지 디자인
                                    <p>&nbsp;&nbsp;Arrivals 섹션에 다양한 음료 이미지들을 넣어야 했는데 음료에 대한 많은 정보들도 같이 넣으려다 보니 디자인이 복잡해지는 문제가
                                        발생했습니다.
                                    </p>
                                    <p>&nbsp;&nbsp;여러 번 디자인을 다시 해보면서 <strong>음료 이미지와 각 음료에 대한 이름만 넣어주었더니 </strong>보기에도 편하고 깔끔한 디자인으로 완성시킬 수
                                        있었습니다.
                                    </p>
                                </li>
                                <li>2. 첫번째 섹션 부분 움직이는 이미지들 position 적용 오류 문제
                                    <p>&nbsp;&nbsp;position: absolute는 절대위치로 특정 부모에 의해 절대적으로 움직인다는 것을 알고있었음에도 원하는 위치로 적용되지 않았습니다.
                                    </p>
                                    <p>&nbsp;&nbsp;자식 요소들에게 div를 씌웠는데도 해결이 되지 않아서 <strong>absolute가 적용되야 할 이미지들을 묶어서 div를 씌워줬더니</strong> 해결
                                        되었습니다.
                                    </p>
                                </li>
                                <li>3. 넘치는 텍스트 제어
                                    <p>&nbsp;&nbsp; 데스크탑과 pc버전은 괜찮았지만 모바일의 경우 가로 폭이 좁아져서 텍스트가 넘치는 경우가 있었습니다.
                                    </p>
                                    <p>&nbsp;&nbsp;이를 해결하기 위해
                                        <strong>텍스트를 감싸는 div요소에 overflow:hidden; white-space:no-wrap; 값을 주고</strong> 넘치는 텍스트는 ···으로 표기될 수 있도록
                                        overflow:ellipsis; 값을 주어 문제를 해결하였습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* review */}
                <section class="review">
                    <div class="common_wrap">
                        <h1>Review</h1>
                        <div class="review_txt" data-aos="fade-up" data-aos-delay="30" data-aos-duration="1500">
                            <h3 class="dot">프로젝트 완료 리뷰</h3>
                            <p> &nbsp;반응형 웹사이트를 만들어 보는 것은 처음이라 걱정 반 기대 반인 마음으로 프로젝트를 진행하였습니다.<br /> 모바일, 태블릿, 데스크탑 세 가지 유형을 모두 고려해야 했기 때문에
                                디자인부터 퍼블리싱까지 여러 시행착오가 있었습니다. </p>
                            <p> &nbsp;모바일 우선 반응형 웹사이트를 만들었기 때문에 모바일, 태블릿, 데스크탑 순으로 퍼블리싱을 진행하였는데, 각 디바이스 별로 코드를 수정하게 되면 다른 디바이스의 레이아웃이 영향을 받는
                                경우가
                                많았습니다. 이러한 문제들을 고려해서 코드를 짜고 수정하는 것이 가장 힘들었던 부분이였던 것 같습니다.</p>
                            <p> &nbsp;그럼에도 불구하고 반응형 웹 사이트를 제작하는 것은 저에게 굉장히 흥미로운 일이였습니다. 하나의 html 구조를 기반으로 각 디바이스에 맞는 css 코드를 작성하는 게 굉장히
                                매력적으로
                                다가왔으며 코드를
                                짜면서 생기는 여러 문제들을 해결하며 큰 즐거움을 느꼈습니다.
                            </p>
                            <p> &nbsp;앞으로도 기회가 된다면 지금까지 제작한 다른 웹사이트들도 반응형으로 제작할 계획입니다. 이번 경험을 통해 더 많은 것을 배우고 발전해나갈 수 있기를 바라며 글을 마치겠습니다 :)
                            </p>
                        </div>
                    </div>
                </section>

                {/* 위로 가기 버튼 */}
                <section class="arrowbtn">
                    <a href="#" class="btn">
                        ⇡
                    </a>
                </section>

                {/* footer */}
                <footer>
                    <ul class="footer_ul">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                                <path
                                    d="m274-450 227 227q9 9 9 21t-9 21q-9 9-21 9t-21-9L181-459q-5-5-7-10t-2-11q0-6 2-11t7-10l278-278q9-9 21-9t21 9q9 9 9 21t-9 21L274-510h496q13 0 21.5 8.5T800-480q0 13-8.5 21.5T770-450H274Z" />
                            </svg>
                            <a href="../index.html">
                                Back to portfolio
                            </a>
                        </li>
                        <li><a href="../10000LAB/10000LAB.html" target="_blank">View site</a></li>
                        <li>
                            <a href="../project4/project4.html">
                                Next project
                            </a>
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