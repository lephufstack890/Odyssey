import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Solution.module.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';

const cx = classNames.bind(styles);

function Solution() {
    const { t } = useTranslation();
    return (
        <div className={cx('solution')}>
            <div className={cx('solution__intro')}>
                <div style={{ position: 'absolute', maxWidth: '798px', left: '110px', bottom: ' 43px' }}>
                    <div className={cx('solution__intro__title')}>
                        {t('Innovative Software Solutions for a Better World')}
                    </div>
                    <div className={cx('solution__intro__description')}>{t('We commit to integrate')}</div>
                </div>
            </div>

            <div className={cx('solution__video')}>
                <video autoPlay muted loop>
                    <source
                        src="https://video.wixstatic.com/video/c794a2_11eba1f5b64f4b7e9a7bde53371293b4/1080p/mp4/file.mp4"
                        type="video/mp4"
                    />
                </video>
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
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoplay={{ delay: 200 }}
                    >
                        <SwiperSlide>
                            <div className={cx('solution__new__carousel__wrapper')}>
                                <div className={cx('solution__new__carousel__left')}>
                                    <div className={cx('image-item')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_01bb2e456b43420b84e5beb2471f795d~mv2.jpg/v1/fill/w_427,h_540,q_90/c794a2_01bb2e456b43420b84e5beb2471f795d~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>Dữ liệu lớn</h2>
                                                <Link to={'/'}>Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('solution__new__carousel__right')}>
                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_089ed9c3a6514a4fadb9c902123cc8df~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_089ed9c3a6514a4fadb9c902123cc8df~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>
                                                    Ứng dụng di <br />
                                                    động & Web
                                                </h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_76c3e074559b474b979df51a5d68b4f3~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_76c3e074559b474b979df51a5d68b4f3~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>
                                                    Phân tích dữ <br /> liệu
                                                </h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_bd8fa2fff7ee4fb289be22a78e48c802~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_bd8fa2fff7ee4fb289be22a78e48c802~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>Trí tuệ doanh nghiệp</h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_2962dbd66be74847b98fd4728772bfdb~mv2.png/v1/fill/w_214,h_270,q_90/c794a2_2962dbd66be74847b98fd4728772bfdb~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>Trí tuệ nhân tạo</h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
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
                                                <h2>Dữ liệu lớn</h2>
                                                <Link to={'/'}>Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('solution__new__carousel__right')}>
                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_b269cff47a6b468a83839b3255165e07~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_b269cff47a6b468a83839b3255165e07~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>
                                                    Ứng dụng di <br />
                                                    động & Web
                                                </h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('image-item', 'image-item--h270')} style={{ opacity: 0 }}>
                                        <img src="https://static.wixstatic.com/media/c794a2_b269cff47a6b468a83839b3255165e07~mv2.jpg/v1/fill/w_214,h_270,q_90/c794a2_b269cff47a6b468a83839b3255165e07~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>
                                                    Ứng dụng di <br />
                                                    động & Web
                                                </h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('image-item', 'image-item--h270')}>
                                        <img src="https://static.wixstatic.com/media/c794a2_90fa6a18e5d847aa9ce92489eea8e503~mv2.jpg/v1/fill/w_214,h_270,fp_0.35_0.51,q_90/c794a2_90fa6a18e5d847aa9ce92489eea8e503~mv2.webp" />

                                        <div className={cx('overlay')}>
                                            <div>
                                                <h2>Trí tuệ doanh nghiệp</h2>
                                                <Link to={'/'} style={{ width: '140px' }}>
                                                    {t('Learn more')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Solution;
