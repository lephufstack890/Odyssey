import React from 'react';
import classNames from 'classnames/bind';
import styles from './Mission.module.scss';
import m1 from './../../assets/images/mission/m1.png';
import m2 from './../../assets/images/mission/m2.png';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Mission() {
    const { t } = useTranslation();
    return (
        <div className={cx('Mission')}>
            <div className={cx('Mission__intro')}>
                <div className={cx('Mission__intro-wrapper')}>
                    <div className={cx('Mission__intro__title')}>{t('Our Mission')}</div>
                    <div className={cx('Mission__intro__description')}>{t('We are dedicated')}</div>
                </div>
            </div>

            <div className={cx('Mission__video')}>
                {window.innerWidth > 768 ? (
                    <video autoPlay muted loop className='desktop-video'>
                        <source
                            src="https://video.wixstatic.com/video/c794a2_587ca1159a1a4b779fb87f455bdab19f/1080p/mp4/file.mp4"
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <img style={{ width: '100%' }} src="https://static.wixstatic.com/media/c794a2_587ca1159a1a4b779fb87f455bdab19ff000.jpg/v1/fill/w_1519,h_500,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c794a2_587ca1159a1a4b779fb87f455bdab19ff000.jpg" alt="Mobile Image" className="mobile-image" />
                )}
            </div>

            <div className={cx('Mission__need')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('Mission__need-left', 'col-lg-5', 'col-md-5', 'col-sm-12')}>
                            <img style={{ width: '100%' }} src={m1} alt="mission" />
                            <p>{t('We understand what you need')}</p>
                        </div>
                        <div className={cx('Mission__need-right', 'col-lg-7', 'col-md-5', 'col-sm-12')}>
                            <p>{t('We understand that every business')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('Mission__help')}>
                <div className={cx('container')} style={{ padding: '0' }}>
                    <div className={cx('row', 'Mission__help-wrapper')}>
                        <div className={cx('Mission__help-left', 'col-lg-7')}>
                            <p>{t('At Odyssey, we are')}</p>
                        </div>
                        <div className={cx('Mission__help-right', 'col-lg-5')}>
                            <img style={{ width: '100%' }} src={m2} alt="mission" />
                            <p>{t('We are ready to help you')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
