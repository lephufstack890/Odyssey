import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import startedVideo from './../../assets/video/home/started.mp4';

const cx = classNames.bind(styles);

function Home() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(-1);
    };
    return (
        <div className={cx('main-page')}>
            <div className={cx('main-page__sectionOne')}>
                <div className={cx('main-page__video')}>
                    <video autoPlay muted loop>
                        <source
                            src="https://video.wixstatic.com/video/c794a2_553d56f3fda64a6bb01d8a7b545f8665/1080p/mp4/file.mp4"
                            type="video/mp4"
                        />
                    </video>

                    <div className={cx('main-page__sectionOne__content')}>
                        <div style={{ fontSize: '64px', marginBottom: '20px', lineHeight: '76px' }}>
                            Transform Your World with Innovative Technology
                        </div>
                        <div style={{ fontSize: '24px', marginBottom: '19px', lineHeight: '40px' }}>
                            We believe that technology can make the world a better place. That's why we commit to develop
                            innovative, effective and reliable software solutions that help you transform your dream into
                            reality.
                        </div>
                        <div>
                            <Link to={'/'}>Lean More</Link>
                        </div>
                    </div>
                </div>

                <div style={{ background: '#141416', padding: '0px 180px' }}>
                    <div className={cx('main-page__solutions')}>
                        <div className={cx('main-page__solutions-top')}>
                            <span>Our Solutions</span>
                            <span>Cooperate to innovate</span>
                            <span>your company</span>
                            <span>Explore how you can digitalize your business with Odyssey</span>
                        </div>
                        <div className={cx('main-page__solutions-content')}>
                            <div>
                                <Swiper
                                    modules={[Navigation, Pagination, A11y]}
                                    spaceBetween={20}
                                    slidesPerView={6}
                                >
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                className={cx('main-page__solutions-content-item', { 'active': activeIndex === index })}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <img
                                                    className={cx('sl-img')}
                                                    src={require(`./../../assets/images/home/solution${index + 1}.png`)}
                                                    alt=''
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ background: '#141416', paddingTop: '100px' }}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-5', 'col-md-6', 'col-12', 'main-page__missons-left')}>
                                <h3>Our Mission: Making the world a better place</h3>
                                <p>We apply the modern software development methodologies such as Waterfall, Agile, Scrum, Kanban, XP and so on to meet customer requirements and deliver the software with highest quality. Our track record is marked by the successful completion of many projects, each earning accolades and commendations from our valued clients. These accomplishments stand as a testament to our commitment to excellence and our unwavering dedication to delivering results that exceed expectations.</p>
                                <div style={{ margin: '10px 120px' }}>
                                    <Link to={'/'}>Lean More</Link>
                                </div>
                            </div>
                            <div className={cx('col-lg-7', 'col-md-6', 'col-12', 'main-page__missons-right')}>
                                <video autoPlay muted loop>
                                    <source
                                        src="https://video.wixstatic.com/video/11062b_cca29298dbe547f4983e127aba1c1966/1080p/mp4/file.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('main-page__odyssey')}>
                    <video autoPlay muted loop>
                        <source
                            src="https://video.wixstatic.com/video/c794a2_4f8fe01f8e54496a922159eb6ea3894a/720p/mp4/file.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className={cx('main-page__odyssey-content')}>
                        <h3>Why Choose Odyssey</h3>
                        <p>Our team comprises individuals who have undergone rigorous training and education at world-class universities. Our objective is to deliver creative and effective software solutions, enabling you to transform your aspirations into tangible outcomes.</p>
                    </div>
                    <div className={cx('main-page__odyssey-actions', 'container')}>
                        <div className={cx('d-flex', 'align-items-center')}>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <span>Our Partners</span>
                            </div>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <img src='https://static.wixstatic.com/media/c794a2_d951ecbf103042f8bc74eaeeb369d448~mv2.png/v1/fill/w_170,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-microsoft-404px-grey.png' alt='' />
                            </div>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <img src='https://static.wixstatic.com/media/c794a2_34e01f8153284b68811bd5570305082a~mv2.png/v1/fill/w_163,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Google_2015_logo_colorless_mourning_period.png' alt='' />
                            </div>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <img src='https://static.wixstatic.com/media/c794a2_5c7ffbef9b8448d0a20681a7ebff5784~mv2.png/v1/fill/w_190,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngwing_com%20(1).png' alt='' />
                            </div>
                            <div className={cx('main-page__odyssey-actions-item')}>
                                <img src='https://static.wixstatic.com/media/c794a2_5bfd6dbe922a4e5fbc3915deb7201eef~mv2.png/v1/fill/w_170,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c794a2_5bfd6dbe922a4e5fbc3915deb7201eef~mv2.png' alt='' />
                            </div>
                        </div>
                        <div className={cx('d-flex')}>
                            <div className={cx('main-page__odyssey-actions-startedLeft')} style={{ border: '1px solid rgb(138, 138, 138)' }}>
                                {startedVideo && (
                                    <video autoPlay muted loop>
                                        <source src="https://video.wixstatic.com/video/c794a2_553d56f3fda64a6bb01d8a7b545f8665/1080p/mp4/file.mp4" type="video/mp4" />
                                    </video>
                                )}
                                <p>Are you ready to transform your business ?</p>
                            </div>
                            <div className={cx('main-page__odyssey-actions-startedRight')} style={{ border: '1px solid rgb(138, 138, 138)' }}>
                                <p>We commit to help you achieve your goals. Whether you're looking to streamline your operations, improve customer engagement, or gain a competitive edge, we've got the tools and expertise you need to succeed</p>
                                <div>
                                    <Link to={'/'}>Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
