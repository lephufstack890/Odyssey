import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function AboutUs() {
    const { t } = useTranslation();
    return (
        <div className={cx('solution')}>
            <div className={cx('solution__new')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>{t('About us')}</div>
                    <div className={cx('solution__new__top__text-two')}>{t('​Odyssey consists of enthusiastic')}</div>
                </div>
            </div>

            <div className={cx('solution__video')}>
                {window.innerWidth > 768 ? (
                    <video autoPlay muted loop className='desktop-video'>
                        <source
                            src="https://video.wixstatic.com/video/11062b_fc39bc30d1b04fa48aa1a5bcefaafe7e/1080p/mp4/file.mp4"
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <img style={{ width: '100%' }} src="https://static.wixstatic.com/media/11062b_fc39bc30d1b04fa48aa1a5bcefaafe7ef000.jpg/v1/fill/w_1519,h_303,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_fc39bc30d1b04fa48aa1a5bcefaafe7ef000.jpg" alt="Mobile Image" className="mobile-image" />
                )}
            </div>

            <div className={cx('solution__new', 'solution__new--two')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}> {t('Our Team')}</div>
                    <div className={cx('solution__new__top__text-two')}>{t('Our team comprises')}</div>
                </div>

                <div className={cx('container', 'solution__new__bottom', 'justify-content-center')}>
                    <div className={cx('row', 'justify-content-center')}>
                        <div className={cx('item', 'col-lg-3')}>
                            <img src="./aboutus/portrait.jpg" />

                            <div className={cx('item__title')}>
                                <span>Khanh Nguyen</span>
                                <span>Founder & CEO</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>
                            <img src="./aboutus/y_nguyen.jpg" />

                            <div className={cx('item__title')}>
                                <span>Y Nguyen</span>
                                <span>Project Manager</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>
                            <img src="./aboutus/hao_nguyen.jpg" />

                            <div className={cx('item__title')}>
                                <span>Hao Nguyen</span>
                                <span>Tech Lead</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>

                            <img src="./aboutus/quang_tran.jpg"/>
                            <div className={cx('item__title')}>
                                <span>Quang Tran</span>
                                <span>Product Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('solution__new', 'solution__new--three')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>{t('Our Partners')}</div>
                    <div className={cx('solution__new__top__text-two')}>{t('Our partners stand')}</div>
                </div>
            </div>

            <div className={cx('solution__new', 'solution__new--three')}>
                <div className={cx('solution__new__top')}>
                    <div className={cx('solution__new__top__text')}>{t('Our Clients')}</div>
                    <div className={cx('solution__new__top__text-two')}>{t('Our client comprises')}</div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
