import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Solution.module.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'; // Import Material Icons

// Import Swiper styles
import 'swiper/css';

const cx = classNames.bind(styles);

function Solution() {
    const { t } = useTranslation();

    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className={cx('solution')}>
            <div className={cx('solution__intro')}>
                <div className={cx('solution__intro-wrapper')}>
                    <div className={cx('solution__intro__title')}>
                        {t('Innovative Software Solutions for a Better World')}
                    </div>
                    <div className={cx('solution__intro__description')}>{t('We commit to integrate')}</div>
                </div>
            </div>

            <div className={cx('solution__video')}>
                {window.innerWidth > 768 ? (
                    <video autoPlay muted loop className='desktop-video'>
                        <source
                            src="https://video.wixstatic.com/video/c794a2_11eba1f5b64f4b7e9a7bde53371293b4/1080p/mp4/file.mp4"
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <img style={{ width: '100%' }} src='https://static.wixstatic.com/media/c794a2_11eba1f5b64f4b7e9a7bde53371293b4f000.jpg/v1/fill/w_1519,h_500,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_11eba1f5b64f4b7e9a7bde53371293b4f000.jpg' alt="Mobile Image" className="mobile-image" />
                )}
            </div>

            <div className={cx('solution__new')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>
                        {t('Innovative Solutions for Modern Businesses')}
                    </div>
                    <div className={cx('solution__new__top__text-two')}>{t('We provide unprecedented')}</div>
                </div>

                <div className={cx('solution__new__carousel')}>
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                    >
                        <SwiperSlide>
                            <div className={cx('solution__new__carousel__wrapper')}>
                                <div className={cx('solution__new__carousel__left')}>
                                    <div className={cx('image-item')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_01bb2e456b43420b84e5beb2471f795d~mv2.jpg/v1/fill/w_427,h_540,q_90/c794a2_01bb2e456b43420b84e5beb2471f795d~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Big Data')}</h2>
                                                <Link to={'/big-data'}>{t('Learn more')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('solution__new__carousel__right')}>
                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_089ed9c3a6514a4fadb9c902123cc8df~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_089ed9c3a6514a4fadb9c902123cc8df~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Web and Mobile application')}</h2>
                                                <Link to={'/web-and-mobile-application'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_76c3e074559b474b979df51a5d68b4f3~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_76c3e074559b474b979df51a5d68b4f3~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Data Analytics')}</h2>
                                                <Link to={'/data-analytics'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_bd8fa2fff7ee4fb289be22a78e48c802~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_bd8fa2fff7ee4fb289be22a78e48c802~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Business Intelligence')}</h2>
                                                <Link to={'/business-intelligence'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_2962dbd66be74847b98fd4728772bfdb~mv2.png/v1/fill/w_214,h_270,q_90/c794a2_2962dbd66be74847b98fd4728772bfdb~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Artificial Intelligence')}</h2>
                                                <Link to={'/artificial-tntelligence'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('solution__new__carousel__wrapper')}>
                                <div className={cx('solution__new__carousel__left')}>
                                    <div className={cx('image-item')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_8370907b50064a96ad8e58557a0a4485~mv2.png/v1/fill/w_427,h_540,q_90/c794a2_8370907b50064a96ad8e58557a0a4485~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Blockchain')}</h2>
                                                <Link to={'/blockchain'}> {t('Learn more')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={cx('solution__new__carousel__right')}
                                    style={{ gridTemplateColumns: '121fr 1fr' }}
                                >
                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_b269cff47a6b468a83839b3255165e07~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_b269cff47a6b468a83839b3255165e07~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Cloud Computing')}</h2>
                                                <Link to={'/cloud-computing'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('image-item', 'image-item--h270')} style={{ opacity: 0 }}>
                                        <img src="https://static.wixstatic.com/media/c794a2_b269cff47a6b468a83839b3255165e07~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_b269cff47a6b468a83839b3255165e07~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Cloud Computing')}</h2>
                                                <Link to={'/cloud-computing'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_90fa6a18e5d847aa9ce92489eea8e503~mv2.jpg/v1/fill/w_214,h_270,fp_0.35_0.51,q_90/c794a2_90fa6a18e5d847aa9ce92489eea8e503~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>{t('Internet of things')}</h2>
                                                <Link to={'/internet-of-things'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className={cx('swiper-button-next')} onClick={goNext}>
                        <MdKeyboardArrowRight />
                    </div>
                    <div className={cx('swiper-button-prev')} onClick={goPrev}>
                        <MdKeyboardArrowLeft />
                    </div>
                </div>

                <div className={cx('solution__new__carousel__mobile')}>
                    <div style={{ width: '100%' }}>
                        <img
                            style={{ width: '100%' }}
                            src="https://static.wixstatic.com/media/c794a2_01bb2e456b43420b84e5beb2471f795d~mv2.jpg/v1/fill/w_427,h_540,q_90/c794a2_01bb2e456b43420b84e5beb2471f795d~mv2.webp"
                        />
                    </div>

                    <div style={{ width: '100%' }}>
                        <img
                            style={{ width: '50%' }}
                            src="https://static.wixstatic.com/media/c794a2_089ed9c3a6514a4fadb9c902123cc8df~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_089ed9c3a6514a4fadb9c902123cc8df~mv2.webp"
                        />
                        <img
                            style={{ width: '50%' }}
                            src="https://static.wixstatic.com/media/c794a2_76c3e074559b474b979df51a5d68b4f3~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_76c3e074559b474b979df51a5d68b4f3~mv2.webp"
                        />
                    </div>

                    <div style={{ width: '100%' }}>
                        <img
                            style={{ width: '50%' }}
                            src="https://static.wixstatic.com/media/c794a2_bd8fa2fff7ee4fb289be22a78e48c802~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_bd8fa2fff7ee4fb289be22a78e48c802~mv2.webp"
                        />
                        <img
                            style={{ width: '50%' }}
                            src="https://static.wixstatic.com/media/c794a2_2962dbd66be74847b98fd4728772bfdb~mv2.png/v1/fill/w_214,h_270,q_90/c794a2_2962dbd66be74847b98fd4728772bfdb~mv2.webp"
                        />
                    </div>

                    <div style={{ width: '100%' }}>
                        <img
                            style={{ width: '100%' }}
                            src="https://static.wixstatic.com/media/c794a2_8370907b50064a96ad8e58557a0a4485~mv2.png/v1/fill/w_427,h_540,q_90/c794a2_8370907b50064a96ad8e58557a0a4485~mv2.webp"
                        />
                    </div>

                    <div style={{ width: '100%' }}>
                        <img
                            style={{ width: '50%' }}
                            src="https://static.wixstatic.com/media/c794a2_b269cff47a6b468a83839b3255165e07~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_b269cff47a6b468a83839b3255165e07~mv2.webp"
                        />
                        <img
                            style={{ width: '50%' }}
                            src="https://static.wixstatic.com/media/c794a2_90fa6a18e5d847aa9ce92489eea8e503~mv2.jpg/v1/fill/w_214,h_270,fp_0.35_0.51,q_90/c794a2_90fa6a18e5d847aa9ce92489eea8e503~mv2.webp"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solution;
