// https://swiperjs.com/demos
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import toegeungil from './images/toegeungil.png'
import algore from './images/algore.png'
import ythink from './images/ythink.png'

import "../layout/css/layout.css"
import "./css/project.css"

function Project() {

    return (
        <>
            <section id="project" className='page project-section'>
                <div className="pageTitle marB">Project</div>
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
                        <div>
                            <div>Slide 1</div>
                            <div>Slide 1</div>
                            <div>Slide 1</div>
                        </div>
                        <div className='project-img'>
                            <img src={toegeungil} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div>Slide 1</div>
                            <div>Slide 1</div>
                            <div>Slide 1</div>
                        </div>
                        <div className='project-img'>
                            <img src={algore} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div>Slide 1</div>
                            <div>Slide 1</div>
                            <div>Slide 1</div>
                        </div>
                        <div className='project-img'>
                            <img src={ythink} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Project;