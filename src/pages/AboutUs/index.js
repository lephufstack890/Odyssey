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
                            <img src="https://static.wixstatic.com/media/c794a2_cd7f518018094d8295613dfb0ebf78e3~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_2248/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3435_edited.jpg" />

                            <div className={cx('item__title')}>
                                <span>Khanh Nguyen</span>
                                <span>Founder & CEO</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>
                            <img src="https://static.wixstatic.com/media/c794a2_4477ec376737464dbb009ad42d2dcce1~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_2248/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3448_edited.jpg" />

                            <div className={cx('item__title')}>
                                <span>Y Nguyen</span>
                                <span>Project Manager</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>
                            <img src="https://static.wixstatic.com/media/c794a2_320bf9a2136948d290884bc6acd2d335~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_2248/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3442_edited.jpg" />

                            <div className={cx('item__title')}>
                                <span>Hao Nguyen</span>
                                <span>Tech Lead</span>
                            </div>
                        </div>

                        <div className={cx('item', 'col-lg-3')}>
                            <img src="https://static.wixstatic.com/media/c794a2_7c8d9744cd6c47f9abad98514b2b4a47~mv2.jpg/v1/crop/x_0,y_0,w_2000,h_2248/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3427_edited.jpg" />

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
