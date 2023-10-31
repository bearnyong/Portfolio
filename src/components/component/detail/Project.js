// https://swiperjs.com/demos
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import toegeungil from '../../images/detail/toegeungil.png'
import algore from '../../images/detail/algore.png'
import ythink from '../../images/detail/ythink.png'

import "../../../layout/css/layout.css"
import "../../css/ditail/project.css"
import { Link } from 'react-router-dom';

function Project() {

    return (
        <>
            <section id="project" className='page project-section'>
                <div className="skillTitle marB">_ Project</div>
                <div className='project-board'>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel={true}
                        keyboard={true}
                        loop={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='project-no'>
                                <div className='project-sec1'>01.</div>
                                <div className='project-sec2'>퇴근길</div>
                                <div className='project-sec3'>퇴근 후, 직장인들의 취미 플랫폼</div>
                                <div className='project-key-flex project-sec4'>
                                    <div>#RestAPI</div>
                                    <div>#React</div>
                                </div>
                                <NavLink to='/project/toegeungil' target="_blank">
                                    <div className='project-view'>
                                        View More →
                                    </div>
                                </NavLink>
                            </div>
                            <div className='project-img'>
                                <img src={toegeungil} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='project-no'>
                                <div className='project-sec1'>02.</div>
                                <div className='project-sec2'>알고레</div>
                                <div className='project-sec3'>요리 레시피에 따른<br />물가 정보 제공 웹사이트</div>
                                <div className='project-key-flex project-sec4'>
                                    <div>#공공데이터</div>
                                    <div>#Thymeleaf</div>
                                </div>
                                <NavLink to='/project/algore' target="_blank">
                                    <div className='project-view'>
                                        View More →
                                    </div>
                                </NavLink>
                            </div>
                            <div className='project-img'>
                                <img src={algore} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='project-no'>
                                <div className='project-sec1'>03.</div>
                                <div className='project-sec2'>YThink</div>
                                <div className='project-sec3'>천안시 청소년들을 위한<br />아이디어 공모전 정보 제공 웹사이트</div>
                                <div className='project-key-flex project-sec4'>
                                    <div>#PHP</div>
                                    <div>#HTML</div>
                                </div>
                                <NavLink to='/project/ythink' target="_blank">
                                    <div className='project-view'>
                                        View More →
                                    </div>
                                </NavLink>
                            </div>
                            <div className='project-img'>
                                <img src={ythink} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Project;